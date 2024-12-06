import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AsyncShoppingList = React.lazy(() => import("@/views/ShoppingList"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <AsyncShoppingList />
            </Suspense>
          }
        />
        <Route path="/*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
