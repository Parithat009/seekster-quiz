import React from 'react'
import { MessageType } from '../type/MessageType'

interface Props {
  message: MessageType
  onClose: () => void
}

const BaseMessage: React.FC<Props> = (props) => {
  const { message, onClose } = props

  const renderStyle = (): string => {
    if (message?.type === 'success')
      return 'message-content-success'
    else
      return 'message-content-fail'
  }

  React.useEffect(() => {
    let timer
    if (message?.visible) {
      timer = setTimeout(() => onClose(), 2500)
    }

    return () => {
      clearTimeout(timer);
    }
  }, [message?.visible])

  if (!message?.visible) return null
  return (
    <div className='message-container'>
      <div className={renderStyle()}>
        {message?.message}
      </div>
    </div>
  )
}

export default BaseMessage
