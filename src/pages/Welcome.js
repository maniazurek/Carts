import React from "react";
import { useNavigate } from "react-router";
import {
  MainLayout,
  Button,
  MainTitle,
  Title,
} from "../utils/styledComponents";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/carts");
  };
  return (
    <MainLayout style={{ margin: "0", paddingLeft: "80px" }}>
      <MainTitle style={{ marginTop: "100px" }}>Hello!</MainTitle>
      <MainTitle>
        Please click the button below to see the result of the recruitment task:
      </MainTitle>
      <Button
        onClick={onStart}
        style={{ fontSize: "25px", padding: "10px", marginTop: "35px" }}
      >
        <Title>See the result</Title>
        <span
          class="fas fa-angle-double-right"
          style={{ fontSize: "23px" }}
        ></span>
      </Button>
    </MainLayout>
  );
};

export default Welcome;
