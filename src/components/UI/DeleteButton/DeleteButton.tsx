import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button size="small" onClick={onClick} style={{ backgroundColor: "red" }}>
      <DeleteOutlined style={{ color: "#ffffff", fontSize: "18px" }} />
    </Button>
  );
};

export default DeleteButton;
