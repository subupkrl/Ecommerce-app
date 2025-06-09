import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Layouts from "./components/Layouts";

const MyRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Layouts} />
          <Route index element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoute;
