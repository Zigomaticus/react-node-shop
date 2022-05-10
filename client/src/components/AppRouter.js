import React from "react";
import { Routes, Route } from "react-router-dom";
// Routes
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  let isAuth = false;

  return (
    <div>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
