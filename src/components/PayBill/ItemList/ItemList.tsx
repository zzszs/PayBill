import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'antd'
import ItemCard from '../../Global/ItemCard/ItemCard'
import { StoreType } from '../../../types/types'

const ItemList: React.FC = () => {
    const itemsList = useSelector((state: StoreType) => state.itemList)
   
  return (
    <Row>
        {itemsList.map((item, index) => (
            <ItemCard item={item} key={index} />
        ))}
    </Row>
  )
}

export default ItemList