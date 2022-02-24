import React, { useContext } from "react";
import { Context } from "../index";
import { Link, useNavigate } from "react-router-dom";

// React-bootsctrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ color: "white" }} to={SHOP_ROUTE}>
          КупиДевайс
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              style={{ marginLeft: "10px" }}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
