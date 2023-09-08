import React from "react";
import AddItem from "../../components/Forms/AddItem/AddItem";
import ItemList from "../../components/UI/ItemList/ItemList";
import PayBillTable from "../../components/UI/PayBillTable/PayBillTable";
import AddPerson from "../../components/Forms/AddPerson/AddPerson";
import style from './style.module.css';

const PayBill: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.group}>
        <AddItem />
        <AddPerson />
      </div>
      <ItemList />
      <PayBillTable />
    </div>
  );
};

export default PayBill;
