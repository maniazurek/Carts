import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/CartsPage";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
