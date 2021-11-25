import React from 'react'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const BaseButton: React.FC<Props> = (props) => {
  const { children, onClick } = props
  return (
    <button
      className='btn'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default BaseButton
