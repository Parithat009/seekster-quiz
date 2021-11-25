import React from 'react'
import { UserDTO } from '../../../model'

interface Props<ItemT> {
  data: ItemT[]
  keyExtractor: (index: number) => number
  renderItem: (item: ItemT, index: number) => React.ReactElement
}

const UserFlatList: React.FC<Props<UserDTO>> = (props) => {
  const { data, keyExtractor, renderItem } = props

  if (data?.length === 0) return null
  return (
    <div className='flatlist'>
      {data?.map((item, index) => (
        <div key={keyExtractor(index)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}

export default UserFlatList
