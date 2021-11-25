import React from 'react'

interface Props {
  name: string
  label: string
  defaultValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<Props> = (props) => {
  const { name, label, defaultValue, onChange } = props
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        className='input'
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  )
}

export default BaseInput
