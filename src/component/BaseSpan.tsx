import React from 'react'

interface Props {
  title: string
  description: string
}

const BaseSpan: React.FC<Props> = (props) => {
  const { title, description } = props
  return (
    <div>
      <span className='base-span-title'>{title}: </span>
      <span className='base-span-description'>{description}</span>
    </div>
  )
}

export default BaseSpan
