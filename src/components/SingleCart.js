import React from "react";

const SingleCart = ({ id, listOfProducts }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <div>{id}</div>
      {listOfProducts.map((product) => {
        return <div>{product.title}</div>;
      })}
    </div>
  );
};

export default SingleCart;
