import React from 'react'
import {Row} from 'antd'
import AddItem from '../../components/PayBill/AddItem/AddItem'

const PayBill: React.FC = () => {
  return (
    <Row justify={'center'} align={'middle'}>
        <AddItem />
    </Row>
  )
}

export default PayBill