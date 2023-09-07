import React from 'react'
import { Row, Col } from 'antd'
import AddItem from '../../components/Forms/AddItem/AddItem'
import ItemList from '../../components/PayBill/ItemList/ItemList'
import PayBillTable from '../../components/PayBill/PayBillTable/PayBillTable'
import AddPerson from '../../components/Forms/AddPerson/AddPerson'
const PayBill: React.FC = () => {
  return (
    <Row justify={'center'} gutter={[0, 15]} align={'middle'}>
        <Col span={24}>
            <AddItem />
        </Col>
        <Col span={24}>
            <AddPerson />
        </Col>
        <Col span={24}>
            <ItemList />
        </Col>
        <Col span={24}>
            <PayBillTable />
        </Col>
    </Row>
  )
}

export default PayBill