import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import { useAppSelector } from '../../../app/hooks'
import style from './style.module.css'

const ItemList: React.FC = () => {
    const itemsList = useAppSelector((state) => state.itemList)
   
  return (
    <div className={style.container}>
        {itemsList.map((item, index) => (
            <ItemCard item={item} key={index} />
        ))}
    </div>
  )
}

export default ItemList