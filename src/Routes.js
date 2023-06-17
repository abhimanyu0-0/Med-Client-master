import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Category from "./views/Category/Category";
import ProductPage from "./views/ProductPage/ProductPage";
import Cart from "./views/Cart/Cart";

const MedPharmRoutes = () => {
  return (
    <div>
        <Suspense fallback={<div></div>}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path ="/cart" element={<Cart />}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default MedPharmRoutes;