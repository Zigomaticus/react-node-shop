import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Http
import { login, registration } from "../../http/userAPI";
// Utils
import { LOGIN_ROUTE } from "../../utils/consts";
// Css
import "./Auth.scss";

const Auth = () => {
  let location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    if (isLogin) {
      const response = await login(email, password);
      console.log(response);
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
    console.log("click");
  };

  return (
    <form className="auth">
      <h2 className="auth__title">{isLogin ? "Авторизация" : "Регистрация"}</h2>
      <input
        className="auth__email"
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="auth__password"
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Введите ваш password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        <div className="reg__btn" onClick={click}>
          {isLogin ? "Войти" : "Регистрация"}
        </div>
      </div>
    </form>
  );
};

export default Auth;
