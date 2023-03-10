import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "../utils/styledComponents";

const SingleCart = ({
  id,
  listOfProducts,
  numberOfCategories,
  handleOnDelete,
}) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpened(true);
  };

  const deleteCart = (id) => {
    handleOnDelete(id);
    setIsCartOpened(false);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            margin: "5px",
            width: "500px",
            padding: "5px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{id}</div>
            <div>{numberOfCategories}</div>
            <Button onClick={handleOpenCart} style={{ cursor: "pointer" }}>
              Details
            </Button>
          </div>
        </div>
        {isCartOpened && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "rgba(0, 0, 0, 0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "700px",
                height: "500px",
                position: "relative",
                background: "#fff",
                borderRadius: "15px",
                padding: "15px",
              }}
            >
              {listOfProducts.map((product) => {
                return <div key={product.id}>{product.title}</div>;
              })}
              <div
                onClick={() => setIsCartOpened(false)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                }}
              >
                X
              </div>
              <Button
                onClick={() => deleteCart(id)}
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "15px",
                  cursor: "pointer",
                }}
              >
                Delete Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleCart;
