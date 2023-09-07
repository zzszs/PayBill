import React from 'react'
import style from './style.module.css'
import PersonCard from '../PersonCard/PersonCard'

const ItemCard: React.FC = () => {
  return (
    <div className={style.container}>
        <div className={style.title}>
            Item1
        </div>
        <div className={style.inner_container}>
            <PersonCard />
        </div>
    </div>
  )
}

export default ItemCard