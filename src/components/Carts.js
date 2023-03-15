import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import CartForm from "./CartForm";
import { BASE_API_URL } from "../utils/commons";
import {
  MainLayout,
  Header,
  CartsContainer,
  Button,
  Overlay,
} from "../utils/styledComponents";

const Carts = () => {
  const [cartsData, setCartsData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getCartsData();
  }, []);

  const getCartsData = () => {
    fetch(`${BASE_API_URL}`)
      .then((res) => res.json())
      .then((data) => setCartsData(data.carts));
  };

  const deleteCartData = (id) => {
    fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getCartsData());
  };

  const addCartData = (userId, products) => {
    fetch(`${BASE_API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        products,
      }),
    })
      .then((res) => res.json())
      .then(() => getCartsData());
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <MainLayout>
      <Header>LIST OF CARTS:</Header>
      <CartsContainer>
        {cartsData.map((cart) => {
          return (
            <SingleCart
              key={cart.id}
              id={cart.id}
              listOfProducts={cart.products}
              numberOfProducts={cart.products.length}
              deleteCartData={deleteCartData}
            />
          );
        })}
      </CartsContainer>

      {isFormOpen && (
        <Overlay>
          <CartForm
            handleCloseForm={handleCloseForm}
            addCartData={addCartData}
            cartsData={cartsData}
          />
        </Overlay>
      )}
      <Button
        onClick={(event) => handleOpenForm(event)}
        style={{
          borderRadius: "50%",
          position: "sticky",
          width: "60px",
          height: "60px",
          fontSize: "20px",
          margin: "0",
          bottom: "30px",
          marginLeft: "1180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i className="fa fa-plus"></i>
      </Button>
    </MainLayout>
  );
};

export default Carts;
