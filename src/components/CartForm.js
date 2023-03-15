import React, { useState } from "react";
import {
  Window,
  Button,
  CloseButton,
  Title,
  Header,
  Form,
  Input,
  TextContainer,
  Description,
  Select,
  Option,
  ListContainer,
  ListElement,
  Error,
} from "../utils/styledComponents";

const CartForm = ({ handleCloseForm, addCartData, cartsData }) => {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [userIdError, setUserIdError] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [productIdError, setProductIdError] = useState(false);
  const [productQuantityError, setProductQuantityError] = useState(false);

  const addNewProduct = (event) => {
    event.preventDefault();
    if (productId.length < 1) {
      setProductIdError(true);
    } else if (productQuantity.length < 1) {
      setProductQuantityError(true);
    } else {
      const newProduct = {
        id: productId,
        quantity: productQuantity,
      };
      setProducts([...products, newProduct]);
      setProductId("");
      setProductQuantity("");
    }
  };

  const addNewCart = (event) => {
    event.preventDefault();
    if (userId.length < 1) {
      setUserIdError(true);
    } else if (products.length < 1) {
      setProductsError(true);
    } else {
      addCartData(userId, products);
      handleCloseForm();
    }
  };

  return (
    <Window
      style={{
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <TextContainer
        style={{
          margin: "50px",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Header>Add new cart:</Header>
        <Form onSubmit={addNewCart}>
          <TextContainer
            style={{
              backgroundColor: "#eef3f6",
              padding: "30px",
              borderRadius: "10px",
              width: "fit-content",
              paddingLeft: "25px",
            }}
          >
            <Title>1. User ID:</Title>
            <Input
              type="number"
              placeholder="Type user ID"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </TextContainer>
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
        </Form>
        <Form
          onSubmit={addNewProduct}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            backgroundColor: "#eef3f6",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Title>2. Products:</Title>
          <TextContainer style={{ width: "fit-content" }}>
            <Title>Product ID:</Title>
            <Select
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
            >
              <Option value="" disabled hidden>
                ID
              </Option>
              {cartsData.map((product) => {
                return <option value={product.id}>{product.id}</option>;
              })}
            </Select>
          </TextContainer>
          <TextContainer style={{ width: "fit-content" }}>
            <Title>Quantity:</Title>
            <Input
              type="number"
              value={productQuantity}
              onChange={(event) => setProductQuantity(event.target.value)}
              placeholder="Type quantity"
            />
          </TextContainer>
          <Button>Add product</Button>
        </Form>
        {products.length > 0 && (
          <Title style={{ paddinLeft: "30px" }}>Added products:</Title>
        )}
        <ListContainer>
          {products.map((product) => {
            return (
              <TextContainer>
                <ListElement>
                  <TextContainer>
                    <Description style={{ margin: "0" }}>
                      ID: {product.id}
                    </Description>
                    <Description style={{ margin: "0" }}>
                      Quantity: {product.quantity}
                    </Description>
                  </TextContainer>
                </ListElement>
              </TextContainer>
            );
          })}
        </ListContainer>
      </TextContainer>
      {userIdError && (
        <Error style={{ top: "0" }}>*Please write User ID*</Error>
      )}
      {productsError && (
        <Error style={{ top: "12px" }}>
          *Cart must contain at least one product*
        </Error>
      )}
      {productIdError && (
        <Error style={{ top: "24px" }}>*Product has to have its own ID*</Error>
      )}
      {productQuantityError && (
        <Error style={{ top: "36px" }}>*Please write quantity*</Error>
      )}
    </Window>
  );
};

export default CartForm;
