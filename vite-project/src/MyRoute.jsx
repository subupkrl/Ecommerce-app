import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Layouts from "./components/Layouts";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import EmailVerify from "./auth/EmailVerify";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./auth/Profile";
import UserRoute from "./auth/UserRoute";

const MyRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route
              path="productdetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="register" element={<Register />} />
            <Route path="email/confirmation/:token" element={<EmailVerify />} />
            <Route path="signin" element={<Login />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="reset/password/:token" element={<ResetPassword />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="/profile" element={<UserRoute />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoute;
