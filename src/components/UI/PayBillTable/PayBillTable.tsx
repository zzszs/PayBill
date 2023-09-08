import React from "react";
import { Table } from "antd";
import { AlignType } from "rc-table/lib/interface";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getPersonsForTable,
  removePerson,
} from "../../../app/slices/peopleSlice";
import DeleteButton from "../DeleteButton/DeleteButton";
import { removePersonFromAllItems } from "../../../app/slices/itemListSlice";
import type { ColumnsType } from 'antd/es/table';
import { PayBillTableCols } from "../../../types/types";

const PayBillTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const people = useAppSelector(getPersonsForTable);

  const deletePerson = (id: string) => {
    if (confirm("Are you sure you want to delete this person?")) {
      dispatch(removePerson({ id }));
      dispatch(removePersonFromAllItems({ id }));
    }
  };

  const columns: ColumnsType<PayBillTableCols> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => {
          console.log(a)
          if (a.name < b.name) return -1;
          if (b.name < a.name) return 1;
          return 0;
        },
      },
    },
    {
      title: "Pay",
      dataIndex: "price",
      key: "price",
      sorter: {
        compare: (a, b) => {
          const firstPrice = parseFloat(a.price.replace("$", ""));
          const secondPrice = parseFloat(b.price.replace("$", ""));

          return firstPrice - secondPrice;
        },
      },
    },
    {
      title: "IBAN",
      dataIndex: "iban",
      key: "iban",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      align: "right" as AlignType,
      render: (_a: string, b: PayBillTableCols) => {
        return <DeleteButton onClick={() => deletePerson(b.id)} />;
      },
    },
  ];

  return <Table columns={columns} dataSource={people} rowKey={"id"} />;
};

export default PayBillTable;
