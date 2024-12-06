import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AsyncShoppingList = React.lazy(() => import("@/views/ShoppingList"));

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/Shop-Listing">
      <Routes>
        <Route path="/" element={<AsyncShoppingList />} />
        <Route path="/*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
