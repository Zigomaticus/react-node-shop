import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
//import Reg from "../pages/Auth";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex=column">
          <Form.Control placeholder="Введите ваш email..." className="mt-3" />
        </Form>
        <Form className="d-flex flex=column">
          <Form.Control
            placeholder="Введите ваш password..."
            className="mt-3"
          />
        </Form>
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin ? (
            <div>
              Нет аккаунта?
              <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</Link>
            </div>
          ) : (
            <div>
              Есть аккаунта?
              <Link to={LOGIN_ROUTE}>Войдите!</Link>
            </div>
          )}
          <Button variant="outline-success" className="mt-3">
            {isLogin ? "Войти" : "Регистрация"}
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
