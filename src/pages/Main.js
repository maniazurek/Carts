import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carts from "../components/Carts";
import Content from "../components/Content";

const Main = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route
          path="/carts"
          element={
            <Carts isProfileOpen={isProfileOpen} closeProfile={closeProfile} />
          }
        />
      </Routes>
      <Outlet />
      <Navigation openProfile={openProfile} />
    </>
  );
};

export default Main;
