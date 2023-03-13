import React from "react";
import { Window, Button, CloseButton } from "../utils/styledComponents";

const CartForm = ({ handleCloseForm, addCartData }) => {
  const addNewCart = () => {
    addCartData();
    handleCloseForm();
  };
  return (
    <Window>
      <div>Form</div>
      <CloseButton>
        <i class="fa fa-close" onClick={handleCloseForm}></i>
      </CloseButton>
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
