import React from 'react'
import { AxiosError } from 'axios'
import {
  ApiDeleteUser,
  ApiGetUser,
  ApiPostUser,
  ApiPutUser,
  UserPostData,
  UserPutData
} from '../../setting/api'
import { UserDTO } from '../../model'
import {
  ModalType,
  UserActionType,
  MessageType
} from '../../type'
import UserFlatList from './component/UserFlatList'
import UserFlatListItem from './component/UserFlatListItem'
import UserModal from './component/UserModal'
import BaseButton from '../../component/BaseButton'
import BaseMessage from '../../component/BaseMessage'

interface InitialState extends UserActionType {
  id: number
}

const initialState: InitialState = {
  id: 0,
  name: '',
  email: '',
  website: ''
}

const initialMessage: MessageType = {
  message: '',
  visible: false,
  type: 'fail'
}

const initialModal: ModalType = {
  type: 'default',
  visible: false
}

const UserViewPage: React.FC = () => {
  const [userLoadable, setUser] = React.useState<UserDTO[]>([])
  const [modal, setModal] = React.useState(initialModal)
  const [defaultValue, setDefaultValue] = React.useState(initialState)
  const [message, setMessage] = React.useState(initialMessage)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setDefaultValue(prev => ({
      ...prev,
      [e.target.name]: value
    }))
  }

  const handleModal = (value: ModalType): void => {
    setModal(prev => ({ ...prev, ...value }))
  }

  const onRetrieveUser = async (): Promise<void> => {
    try {
      const response = await ApiGetUser.get()

      if (response?.status !== 200) return
      setUser(response?.data)
    } catch (error) {
      const { response } = error as AxiosError
      setMessage({
        message: `System error ${response?.status} ...`,
        visible: true,
        type: 'fail'
      })
    }
  }

  const onCreate = async (value: UserPostData) => {
    try {
      const response = await ApiPostUser.post(value)

      if (response?.status !== 201) return
      setUser(prev => [
        ...prev,
        {
          ...response?.data,
          id: Math.random()
        }
      ])
      setMessage({
        message: `Success ...`,
        visible: true,
        type: 'success'
      })
    } catch (error) {
      const { response } = error as AxiosError
      setMessage({
        message: `System error ${response?.status} ...`,
        visible: true,
        type: 'fail'
      })
    }

    handleModal({ type: 'default', visible: false })
  }

  const onEdit = async (value: UserPutData): Promise<void> => {
    try {
      const response = await ApiPutUser.put(value)

      if (response?.status !== 200) return
      setUser(prev => {
        return prev?.map(item => {
          if (item.id !== value?.id) return item
          else return { ...item, ...value }
        })
      })
      setMessage({
        message: `Success ...`,
        visible: true,
        type: 'success'
      })
    } catch (error) {
      const { response } = error as AxiosError
      setMessage({
        message: `System error ${response?.status} ...`,
        visible: true,
        type: 'fail'
      })
    }

    handleModal({ type: 'default', visible: false })
  }

  const onDelete = async (value: InitialState): Promise<void> => {
    try {
      const response = await ApiDeleteUser.delete(value?.id)

      if (response?.status !== 200) return
      setUser(prev => prev.filter(item => item?.id !== value?.id))
      setMessage({
        message: `Success ...`,
        visible: true,
        type: 'success'
      })
    } catch (error) {
      const { response } = error as AxiosError
      setMessage({
        message: `System error ${response?.status} ...`,
        visible: true,
        type: 'fail'
      })
    }

    handleModal({ type: 'default', visible: false })
  }

  const onSubmit = (): void => {
    if (modal?.type === 'edit') {
      onEdit(defaultValue)
    } else if (modal?.type === 'delete') {
      onDelete(defaultValue)
    } else if (modal?.type === 'create') {
      onCreate(defaultValue)
    }
  }

  React.useEffect(() => {
    onRetrieveUser()
  }, [])

  return (
    <div className='user-container'>
      <div className='btn-content'>
        <BaseButton onClick={() => setModal({ type: 'create', visible: true })}>
          Create User
        </BaseButton>
      </div>

      <UserFlatList
        data={userLoadable}
        keyExtractor={(index) => index}
        renderItem={(item) => (
          <UserFlatListItem
            item={item}
            handleModal={handleModal}
            handleState={(value) => setDefaultValue(value)}
          />
        )}
      />

      <UserModal
        modal={modal}
        defaultValue={defaultValue}
        onChange={onChange}
        onSubmit={onSubmit}
        handleModal={handleModal}
      />

      <BaseMessage
        message={message}
        onClose={() => setMessage(initialMessage)}
      />
    </div>
  )
}

export default UserViewPage
