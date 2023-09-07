import React from 'react'
import { Row } from 'antd'
import ItemCard from '../../Global/ItemCard/ItemCard'
import { useAppSelector } from '../../../app/hooks'

const ItemList: React.FC = () => {
    const itemsList = useAppSelector((state) => state.itemList)
   
  return (
    <Row>
        {itemsList.map((item, index) => (
            <ItemCard item={item} key={index} />
        ))}
    </Row>
  )
}

export default ItemList