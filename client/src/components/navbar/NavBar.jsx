import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
// Context
import { Context } from "../../index";
// Css
import "./NavBar.scss";

const NavBar = () => {
  const { user } = useContext(Context);
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__logo">Logo</div>
      </Link>
      {user.isAuth ? (
        <div className="panel">
          <button onClick={() => navigate("admin")} className="panel__admin">
            Админ
          </button>
          <button onClick={() => navigate("login")} className="panel__logo">
            Выйти
          </button>
        </div>
      ) : (
        <div className="panel">
          <button className="panel__logo" onClick={() => user.setIsAuth(true)}>
            Авторизация
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(NavBar);
