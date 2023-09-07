import React from 'react'
import { Row, Col } from 'antd'
import AddItem from '../../components/PayBill/AddItem/AddItem'
import ItemList from '../../components/PayBill/ItemList/ItemList'

const PayBill: React.FC = () => {
  return (
    <Row justify={'center'} gutter={[0, 15]} align={'middle'}>
        <Col span={24}>
            <AddItem />
        </Col>
        <Col span={24}>
            <ItemList />
        </Col>
    </Row>
  )
}

export default PayBill