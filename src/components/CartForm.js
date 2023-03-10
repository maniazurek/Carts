import React from "react";
import { Window, Button, CloseButton } from "../utils/styledComponents";

const CartForm = ({ handleCloseForm, addCartData }) => {
  const addNewCart = () => {
    addCartData();
  };
  return (
    <Window>
      <div>Form</div>
      <CloseButton onClick={handleCloseForm}>X</CloseButton>
      <Button
        onClick={addNewCart}
        style={{ position: "absolute", bottom: "15px", right: "15px" }}
      >
        Add
      </Button>
    </Window>
  );
};

export default CartForm;
