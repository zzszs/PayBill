import React from 'react'
import { Table } from 'antd' 
import { useAppSelector } from '../../../app/hooks'
import { getPersonsForTable } from '../../../app/slices/peopleSlice'

const PayBillTable: React.FC = () => {
    const people = useAppSelector(getPersonsForTable)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Pay',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'IBAN',
            dataIndex: 'iban',
            key: 'iban'
        },
    ]
  return (
    <Table columns={columns} dataSource={people} rowKey={"id"} />
  )
}

export default PayBillTable