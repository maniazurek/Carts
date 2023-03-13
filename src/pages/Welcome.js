import React from "react";
import { useNavigate } from "react-router";
import { MainLayout, Button } from "../utils/styledComponents";

const Welcome = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/carts");
  };
  return (
    <MainLayout style={{ margin: "0" }}>
      <div>Welcome</div>
      <Button onClick={onStart}>See the result</Button>
   
    </MainLayout>
  );
};

export default Welcome;
