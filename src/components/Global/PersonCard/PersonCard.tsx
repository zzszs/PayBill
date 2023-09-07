import React from 'react'
import { Card, Row, Col, InputNumber } from 'antd'

const PersonCard: React.FC = () => {
  return (
    <Card bodyStyle={{padding: '6px'}}>
        <Row justify={'space-between'} align={'middle'}>
            <Col span={12} >
                <InputNumber controls={false} addonAfter="$" placeholder='Price' />
            </Col>
            <Col span={12} >
                <p style={{textAlign: 'right'}}>Person 1</p>
            </Col>
        </Row>
    </Card>
  )
}

export default PersonCard