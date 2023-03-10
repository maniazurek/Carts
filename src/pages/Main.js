import React, { useEffect, useState } from "react";
import SingleCart from "../components/SingleCart";
import useFetch from "../hooks/useFetch";
import { BASE_API_URL } from "../utils/commons";

const Main = () => {
  // const [cartsList, setCartsList] = useState([]);
  // const [cartsData, setCartsData] = useFetch(`${BASE_API_URL}`);

  // useEffect(() => {
  //   if (cartsData.carts) {
  //     setCartsList(cartsData.carts);
  //   }
  // }, [cartsData]);

  const [cartsData, setCartsData] = useState([]);

  useEffect(() => {
    getCartsData();
  }, []);

  const getCartsData = () => {
    fetch(`${BASE_API_URL}`)
      .then((res) => res.json())
      .then((data) => setCartsData(data.carts));
  };

  const handleOnDelete = (id) => {
    fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => getCartsData());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          padding: "5px",
        }}
      >
        <div>ID</div>
        <div>Number of categories</div>
        <div>More</div>
      </div>
      <div>
        {cartsData.map((cart) => {
          return (
            <SingleCart
              key={cart.id}
              id={cart.id}
              listOfProducts={cart.products}
              numberOfCategories={cart.products.length}
              handleOnDelete={handleOnDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Main;
