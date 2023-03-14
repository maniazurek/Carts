import React from "react";
import { Window, Button, CloseButton, Title } from "../utils/styledComponents";

const CartForm = ({ handleCloseForm, addCartData }) => {
  const addNewCart = () => {
    addCartData();
    handleCloseForm();
  };
  return (
    <Window>
      <div>Form</div>
      <CloseButton>
        <span class="fa fa-close" onClick={handleCloseForm}></span>
      </CloseButton>
      <Button
        onClick={addNewCart}
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
    </Window>
  );
};

export default CartForm;
