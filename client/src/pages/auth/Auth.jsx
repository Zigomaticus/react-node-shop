import React from "react";
import { Link, useLocation } from "react-router-dom";
// Utils
import { LOGIN_ROUTE } from "../../utils/consts";
// Css
import "./Auth.scss";

const Auth = () => {
  let location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <form className="auth">
      <h2 className="auth__title">{isLogin ? "Авторизация" : "Регистрация"}</h2>
      <input
        className="auth__email"
        type="email"
        placeholder="Введите ваш email"
      />
      <input
        className="auth__password"
        type="password"
        placeholder="Введите ваш password"
      />
      <div className="reg">
        {isLogin ? (
          <div className="reg__text">
            Нет аккаунта?
            <Link to="/registration">
              <span>Зарегистрируйтесь!</span>
            </Link>
          </div>
        ) : (
          <div className="reg__text">
            Есть аккаунта?
            <Link to="/login">
              <span>Войдите!</span>
            </Link>
          </div>
        )}
        <button className="reg__btn">
          {isLogin ? "Войти" : "Регистрация"}
        </button>
      </div>
    </form>
  );
};

export default Auth;
