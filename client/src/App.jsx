import React from "react";
import { BrowserRouter } from "react-router-dom";
// Components
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
