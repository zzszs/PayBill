import React from "react";
import { useDispatch} from 'react-redux'
import { addItem } from "../../../app/slices/itemListSlice";
import { Input, InputNumber, Button, Form } from "antd";



const AddItem: React.FC = () => {

    const dispatch = useDispatch()

    const onFinish = (value: {name: string, price: string}) => {
        const {name, price} = value
        dispatch(addItem({
            name,
            price
        }))
    }
  return (
    <Form 
        name="listItemForm"
        onFinish={onFinish}
    >
      <Form.Item
        label="Item Name"
        name="name"
        rules={[{ required: true, message: 'Please input a name' }]}
        >
        <Input placeholder="Item Name" />
      </Form.Item>
      <Form.Item 
        label="Price" 
        name="price"
        rules={[{ required: true, message: 'Please input a price' }]}
        >
        <InputNumber addonAfter="$" controls={false} placeholder="Price"  />
      </Form.Item>
      <Form.Item >
        <Button htmlType="submit" type="primary">Add</Button>
      </Form.Item>
    </Form>
  );
};

export default AddItem;
