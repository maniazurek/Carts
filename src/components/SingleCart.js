import React from "react";
import { useState } from "react";
import {
  SingleCartContainer,
  TextContainer,
  Title,
  Description,
  Button,
  Overlay,
  Window,
  CloseButton,
} from "../utils/styledComponents";
import LineGraph from "./LineGraph";

const SingleCart = ({
  id,
  listOfProducts,
  numberOfProducts,
  deleteCartData,
}) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleOpenCart = (event) => {
    setIsCartOpened(true);
  };

  const deleteCart = (id) => {
    deleteCartData(id);
    setIsCartOpened(false);
  };

  return (
    <>
      <SingleCartContainer>
        <TextContainer>
          <Title>Cart ID:</Title>
          <Description>{id}</Description>
        </TextContainer>
        <TextContainer>
          <Title>Number of products:</Title>
          <Description>{numberOfProducts}</Description>
        </TextContainer>

        <Button onClick={handleOpenCart}>Details</Button>
      </SingleCartContainer>

      {isCartOpened && (
        <Overlay>
          <Window>
            <TextContainer style={{ marginBottom: "30px" }}>
              <Title style={{ fontSize: "25px" }}>Details of cart ID:</Title>
              <Description style={{ fontSize: "25px", margin: "0" }}>
                {id}
              </Description>
            </TextContainer>
            <CloseButton>
              <i class="fa fa-close" onClick={() => setIsCartOpened(false)}></i>
            </CloseButton>
            <Button
              onClick={() => deleteCart(id)}
              style={{
                position: "absolute",
                bottom: "25px",
                right: "25px",
                padding: "8px",
              }}
            >
              <span class="fa fa-trash-o"></span>
              <Title>Delete Cart</Title>
            </Button>
            <LineGraph listOfProducts={listOfProducts} />
          </Window>
        </Overlay>
      )}
    </>
  );
};

export default SingleCart;
