import React, { useEffect, useState } from "react";
import SingleCart from "../components/SingleCart";
import useFetch from "../hooks/useFetch";
import { BASE_API_URL } from "../utils/commons";

const Main = () => {
  const [cartsList, setCartsList] = useState([]);
  const [cartsData, setCartsData] = useFetch(`${BASE_API_URL}`);

  useEffect(() => {
    if (cartsData.carts) {
      setCartsList(cartsData.carts);
    }
  }, [cartsData]);

  return (
    <>
      <div>
        {cartsList.map((cart) => {
          return (
            <SingleCart
              key={cart.id}
              id={cart.id}
              listOfProducts={cart.products}
            />
          );
        })}
      </div>
    </>
  );
};

export default Main;
