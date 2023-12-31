import React, { useState } from "react";
import style from "./style.module.css";
import { Select, Button, Form } from "antd";
import { ListItem, Person } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getPersonsForItem } from "../../../app/slices/peopleSlice";
import { addPersonToItem, changePersonPrice, changePricesEqually, removeItem, removePersonFromItem } from "../../../app/slices/itemListSlice";
import DeleteButton from "../DeleteButton/DeleteButton";
import MoneyInput from "../MoneyInput/MoneyInput";

const ItemCard: React.FC<{ item: ListItem }> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm()
  const selectOptions = useAppSelector((state) =>
    getPersonsForItem(state, item.people)
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [personPrice, setPersonPrice] = useState<Person | null>(null);

  const addPerson = () => {
    if (selectedOption !== "") {
      dispatch(
        addPersonToItem({ id: item.id, person: JSON.parse(selectedOption) })
      );
      setSelectedOption("");
    }
  };

  const updatePersonPrice = () => {
    if (personPrice) {
      dispatch(changePersonPrice({id: item.id, person: personPrice}))
      setPersonPrice(null)
    }
  };

  const deletePersonFromItem = (value: string) => {
    if (confirm(`Are you sure you want to remove this person, from ${item.name}`)) {
      dispatch(removePersonFromItem({id: item.id, personId: value}))
    }
  }

  const deleteItem = () => {
    if (confirm(`Are you sure you want to delete ${item.name}`)) {
      dispatch(removeItem({id: item.id}))
    }
  }

  const splitEqually = () => {
    if (item.people.length === 0) return
    const peopleArray = [...item.people]
    const totalPrice = item.price
    const splitPrice = (totalPrice / peopleArray.length).toFixed(2)

    for (let i = 0; i < peopleArray.length; i++) {
      form.setFieldValue(`price-${peopleArray[i].id}`, splitPrice)
    }
    dispatch(changePricesEqually({id: item.id, price: splitPrice}))
  }


  return (
    <div className={style.container}>
      <div className={style.title}>
        <p>{item.name}</p>
        <p>{item.price}$</p>
        <DeleteButton onClick={deleteItem} />
      </div>
      <div className={style.button_container}>
        <Button size="small" onClick={splitEqually}>Split Equally</Button>
      </div>
      <div className={style.inner_container}>
        {item.people.map((person) => (
          <Form form={form} className={style.person_contaienr} key={person.id}>
           <Form.Item className={style.form_item} name={`price-${person.id}`} >
              <MoneyInput
                addonAfter="$"
                min={0}
                controls={false}
                onChange={(value) =>
                  setPersonPrice({
                    ...person,
                    price: parseFloat(`${value ? value : 0}`),
                  })
                }
                onBlur={updatePersonPrice}
              />
            </Form.Item>
            <p className={style.person_name}>{person.name}</p>
            <DeleteButton onClick={() => deletePersonFromItem(person.id)}/>
          </Form>
        ))}
        <Select
          value={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          options={selectOptions}
        />
        <Button onClick={addPerson}>Add</Button>
      </div>
      <div className={`${style.error} ${item.error.visible ? style.error_visible : ''}`}>{item.error.text}</div>
    </div>
  );
};

export default ItemCard;
