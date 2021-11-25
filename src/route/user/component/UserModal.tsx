import React from 'react'
import { UserPostData } from '../../../setting/api'
import { ModalType } from '../../../type'
import BaseModal from '../../../component/BaseModal'
import BaseInput from '../../../component/BaseInput'

interface Props {
  modal: ModalType
  defaultValue: UserPostData
  onSubmit: () => void
  handleModal: (value: ModalType) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserModal: React.FC<Props> = (props) => {
  const {
    modal,
    defaultValue,
    onSubmit,
    handleModal,
    onChange
  } = props
  return (
    <BaseModal
      visible={modal?.visible}
      onSubmit={onSubmit}
      onClose={() => handleModal({ type: 'default', visible: false })}
    >
      {modal?.type === 'delete' && 'Are You Sure Delete ?'}
      {(modal?.type === 'edit' || modal?.type === 'create') && (
        <React.Fragment>
          <BaseInput
            name='name'
            label='Name'
            defaultValue={modal?.type === 'edit' ? defaultValue?.name : ''}
            onChange={onChange}
          />
          <BaseInput
            name='email'
            label='Email'
            defaultValue={modal?.type === 'edit' ? defaultValue?.email : ''}
            onChange={onChange}
          />
          <BaseInput
            name='website'
            label='Website'
            defaultValue={modal?.type === 'edit' ? defaultValue?.website : ''}
            onChange={onChange}
          />
        </React.Fragment>
      )}
    </BaseModal>
  )
}

export default UserModal
