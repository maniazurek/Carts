import React, { useState } from "react";
import { Window, Button, CloseButton, Title } from "../utils/styledComponents";

const CartForm = ({ handleCloseForm, addCartData, cartsData }) => {
  const [userId, setUserId] = useState("");
  const [products, setProducts] = useState([{}]);

  const addNewCart = (event) => {
    addCartData(userId, products);
    handleCloseForm();
  };
  return (
    <Window>
      <form onSubmit={addNewCart}>
        <label>User ID</label>
        <input
          type="text"
          placeholder="Type user ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <select>
          {cartsData.map((product) => {
            return <option value={product.id}>{product.id}</option>;
          })}
        </select>
        <CloseButton>
          <span class="fa fa-close" onClick={handleCloseForm}></span>
        </CloseButton>
        <Button
          type="submit"
          style={{
            position: "absolute",
            bottom: "25px",
            right: "25px",
            padding: "8px",
          }}
        >
          <span className="fas fa-shopping-cart	"></span>
          <Title>Add Cart</Title>
        </Button>
      </form>
    </Window>
  );
};

export default CartForm;
