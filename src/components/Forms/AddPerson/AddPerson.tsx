import React from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addPerson } from '../../../app/slices/peopleSlice'

const AddPerson: React.FC = () => {

    const dispatch = useDispatch()
    const onFinish = (value: {name: string}) => {
        dispatch(addPerson({name: value.name}))
    }
  return (
    <Form 
    name="personForm"
    onFinish={onFinish}
    >
  <Form.Item
    label="Person Name"
    name="name"
    rules={[{ required: true, message: 'Please input a name' }]}
    >
    <Input placeholder="Person Name" />
  </Form.Item>
  <Form.Item >
    <Button htmlType="submit" type="primary">Add</Button>
  </Form.Item>
</Form>
  )
}

export default AddPerson