import React from 'react'
import style from './style.module.css'
import PersonCard from '../PersonCard/PersonCard'
import { ListItem } from '../../../types/types'

const ItemCard: React.FC<{item: ListItem}> = ({item}) => {
  return (
    <div className={style.container}>
        <div className={style.title}>
            <p>{item.name}</p>
            <p>{item.price}$</p>
        </div>
        <div className={style.inner_container}>
            <PersonCard />
        </div>
    </div>
  )
}

export default ItemCard