import React, { useEffect, useState } from "react";
import SingleCart from "../components/SingleCart";
import CartForm from "../components/CartForm";
import { BASE_API_URL } from "../utils/commons";
import {
  MainLayout,
  CartsContainer,
  Button,
  Overlay,
} from "../utils/styledComponents";

const Main = () => {
  const [cartsData, setCartsData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  console.log(cartsData);

  useEffect(() => {
    window.addEventListener("click", () => setIsFormOpen(false));
  }, []);

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

  const addCartData = () => {
    fetch(`${BASE_API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: 1,
            quantity: 1,
          },
          {
            id: 50,
            quantity: 2,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(() => getCartsData());
  };

  const handleOpenForm = (event) => {
    setIsFormOpen(true);
    event.stopPropagation();
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <MainLayout>
      <div>LIST OF CARTS:</div>
      <CartsContainer>
        {cartsData.map((cart) => {
          return (
            <SingleCart
              key={cart.id}
              id={cart.id}
              listOfProducts={cart.products}
              numberOfCategories={cart.products.length}
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
          />
        </Overlay>
      )}
      <Button
        onClick={(event) => handleOpenForm(event)}
        style={{
          borderRadius: "50%",
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "60px",
          height: "60px",
          fontSize: "20px",
        }}
      >
        +
      </Button>
    </MainLayout>
  );
};

export default Main;
