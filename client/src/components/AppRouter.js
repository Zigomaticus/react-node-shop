import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// Routes
import { authRoutes, publicRoutes } from "../routes";
// Pages
import Shop from "../pages/Shop";
// Context
import { Context } from "../index";

const AppRouter = () => {
  const { user } = useContext(Context);

  console.log(user);

  return (
    <div>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
