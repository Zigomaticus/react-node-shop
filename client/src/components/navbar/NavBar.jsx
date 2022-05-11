import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
// Context
import { Context } from "../../index";
// Css
import "./NavBar.scss";

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__logo">Logo</div>
      </Link>
      {user.isAuth ? (
        <div className="panel">
          <button className="panel__admin">Admin</button>
          <button className="panel__logo">Enter</button>
        </div>
      ) : (
        <div className="panel">
          <button className="panel__logo" onClick={() => user.setIsAuth(true)}>
            Authorization
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(NavBar);
