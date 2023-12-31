import React from "react";
import { Form, Input, Button } from "antd";
import { postPerson } from "../../../app/slices/peopleSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import style from './style.module.css'

const AddPerson: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.people.status);
  const onFinish = (value: { name: string }) => {
    dispatch(postPerson(value.name));

    form.resetFields();
  };

  return (
    <Form className={style.form} form={form} name="personForm" onFinish={onFinish}>
      <Form.Item
        label="Person Name"
        name="name"
        rules={[{ required: true, message: "Please input a name" }]}
      >
        <Input placeholder="Person Name" />
      </Form.Item>
      <Form.Item className={style.form_button_container}>
        <Button
          htmlType="submit"
          type="primary"
          loading={loading === "loading"}
          disabled={loading === "loading"}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPerson;
