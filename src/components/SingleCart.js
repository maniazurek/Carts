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

const SingleCart = ({
  id,
  listOfProducts,
  numberOfCategories,
  deleteCartData,
}) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleOpenCart = (event) => {
    event.stopPropagation();
    setIsCartOpened(true);
  };

  const deleteCart = (id) => {
    deleteCartData(id);
    setIsCartOpened(false);
  };

  useEffect(() => {
    window.addEventListener("click", () => setIsCartOpened(false));
  }, []);

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
            {listOfProducts.map((product) => {
              return <div key={product.id}>{product.title}</div>;
            })}
            <CloseButton>X</CloseButton>
            <Button
              onClick={() => deleteCart(id)}
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
              }}
            >
              Delete Cart
            </Button>
          </Window>
        </Overlay>
      )}
    </>
  );
};

export default SingleCart;
