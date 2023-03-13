import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carts from "../components/Carts";
import Content from "../components/Content";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
