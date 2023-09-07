import React from 'react'
import { Table } from 'antd' 
import { useAppSelector } from '../../../app/hooks'

const PayBillTable: React.FC = () => {
    const people = useAppSelector((state) => state.people)

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