import React from "react";
import { useNavigate } from "react-router";
import { MainLayout, Button, MainTitle } from "../utils/styledComponents";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/carts");
  };
  return (
    <MainLayout style={{ margin: "0", paddingLeft: "80px"}}>
      <MainTitle style={{ marginTop: "100px" }}>Hello!</MainTitle>
      <MainTitle>
        Please click the button below to see the solution of the recruitment
        task:
      </MainTitle>
      <Button onClick={onStart} style={{ fontSize: "25px", padding: "10px", marginTop: "35px" }}>
        See the result
      </Button>
    </MainLayout>
  );
};

export default Welcome;
