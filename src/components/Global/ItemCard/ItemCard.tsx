import React, { useState } from "react";
import style from "./style.module.css";
import { Select, Button, InputNumber } from "antd";
import { ListItem, Person } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getPersonsForItem } from "../../../app/slices/peopleSlice";
import { addPersonToItem, changePersonSlice } from "../../../app/slices/itemListSlice";

const ItemCard: React.FC<{ item: ListItem }> = ({ item }) => {
  const dispatch = useAppDispatch();
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
      dispatch(changePersonSlice({id: item.id, person: personPrice}))
      setPersonPrice(null)
    }
  };


  return (
    <div className={style.container}>
      <div className={style.title}>
        <p>{item.name}</p>
        <p>{item.price}$</p>
      </div>
      <div className={style.inner_container}>
        {item.people.map((person) => (
          <div key={person.id}>
            <InputNumber
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
            <p>{person.name}</p>
          </div>
        ))}
        <Select
          value={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          options={selectOptions}
        />
        <Button onClick={addPerson}>Add</Button>
      </div>
    </div>
  );
};

export default ItemCard;
