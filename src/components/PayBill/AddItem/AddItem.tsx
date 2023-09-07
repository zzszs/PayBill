import React from "react";
import { Input, Button, Col, Row } from "antd";

const AddItem: React.FC = () => {
  return (
    <Row gutter={[5, 0]}>
      <Col span={16}>
        <Input placeholder="Item Name" />
      </Col>
      <Col>
        <Button type="primary">Add</Button>
      </Col>
    </Row>
  );
};

export default AddItem;
