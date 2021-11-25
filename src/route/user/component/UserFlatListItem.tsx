import React from 'react'
import { UserDTO } from '../../../model'
import BaseSpan from '../../../component/BaseSpan'
import BaseButton from '../../../component/BaseButton'

interface ModalType {
  type: 'edit' | 'delete' | 'default'
  visible: boolean
}

interface Props {
  item: UserDTO
  handleModal: (value: ModalType) => void
  handleState: (value: UserDTO) => void
}

const UserFlatListItem: React.FC<Props> = (props) => {
  const { item, handleModal, handleState } = props

  const handleEdit = (): void => {
    handleState(item)
    handleModal({
      type: 'edit',
      visible: true
    })
  }

  const handleDelete = (): void => {
    handleState(item)
    handleModal({
      type: 'delete',
      visible: true
    })
  }

  return (
    <div className='flatlist-item'>
      <div className='flatlist-item-detail'>
        <BaseSpan title={'Name'} description={item?.name} />
        <BaseSpan title={'Address'} description={item?.address?.city} />
        <BaseSpan title={'Phone'} description={item?.phone} />
        <BaseSpan title={'Username'} description={item?.username} />
        <BaseSpan title={'Website'} description={item?.website} />
        <BaseSpan title={'Email'} description={item?.email} />
        <BaseSpan title={'Company name'} description={item?.company?.name} />
      </div>
      <div className='flatlist-item-action'>
        <BaseButton onClick={handleEdit}>Edit</BaseButton>
        <BaseButton onClick={handleDelete}>Delete</BaseButton>
      </div>
    </div>
  )
}

export default UserFlatListItem
