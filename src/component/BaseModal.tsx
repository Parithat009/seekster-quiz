import React from 'react'
import BaseButton from './BaseButton'

interface Props {
  visible: boolean
  children: React.ReactNode
  onSubmit: () => void
  onClose: () => void
}

const BaseModal: React.FC<Props> = (props) => {
  const { visible, children, onSubmit, onClose } = props

  if (!visible) return null
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        {children}

        <div className='modal-action'>
          <BaseButton onClick={onSubmit}>Save</BaseButton>
          <BaseButton onClick={onClose}>Cancel</BaseButton>
        </div>
      </div>
    </div>
  )
}

export default BaseModal
