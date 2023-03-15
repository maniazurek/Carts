import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  MainLayout,
  Button,
  MainTitle,
  Title,
} from "../utils/styledComponents";

const Welcome = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   const addNewItem = () => {
  //     const newItem = {
  //       nameItem: name,
  //       priceItem: price,
  //     };
  //     setItems([...items, newItem]);
  //   };
  //   addNewItem();
  // }, []);

  const addNewItem = (event) => {
    event.preventDefault();
    const newItem = {
      nameItem: name,
      priceItem: price,
    };
    // setItems([...items, newItem]);
    console.log(newItem);
    setItems([...items, newItem]);
    console.log(items)
  };

  const navigate = useNavigate();

  const onStart = () => {
    navigate("/carts");
  };
  return (
    <MainLayout style={{ margin: "0", paddingLeft: "80px" }}>
      <form onSubmit={addNewItem}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <MainTitle style={{ marginTop: "100px" }}>Hello!</MainTitle>
      <MainTitle>
        Please click the button below to see the result of the recruitment task:
      </MainTitle>
      <Button
        onClick={onStart}
        style={{ fontSize: "25px", padding: "10px", marginTop: "35px" }}
      >
        <Title>See the result</Title>
        <span
          class="fas fa-angle-double-right"
          style={{ fontSize: "23px" }}
        ></span>
      </Button>
    </MainLayout>
  );
};

export default Welcome;
