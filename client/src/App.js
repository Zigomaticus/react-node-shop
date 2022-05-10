import React from "react";
import { BrowserRouter } from "react-router-dom";
// Components
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
