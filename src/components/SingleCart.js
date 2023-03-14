import React, { useEffect } from "react";
import { useState } from "react";
import {
  SingleCartContainer,
  TextContainer,
  Title,
  Description,
  List,
  Button,
  Overlay,
  Window,
  CloseButton,
} from "../utils/styledComponents";
import LineGraph from "./LineGraph";

const SingleCart = ({
  id,
  listOfProducts,
  numberOfCategories,
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
          <Title>Number of categories:</Title>
          <Description>{numberOfCategories}</Description>
        </TextContainer>

        <Button onClick={handleOpenCart}>Details</Button>
      </SingleCartContainer>

      {isCartOpened && (
        <Overlay>
          <Window>
            <Title style={{ marginBottom: "30px", fontSize: "25px" }}>
              Details of cart ID: {id}
            </Title>
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
