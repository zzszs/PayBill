import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd' 
import { StoreType } from '../../../types/types'

const PayBillTable: React.FC = () => {
    const people = useSelector((state: StoreType) => state.people)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'IBN',
            dataIndex: 'ibn',
            key: 'ibn'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
    ]
  return (
    <Table columns={columns} dataSource={people} rowKey={"id"} />
  )
}

export default PayBillTable