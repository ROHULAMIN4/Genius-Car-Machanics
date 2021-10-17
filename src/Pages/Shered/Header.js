import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-warning">
            Genious Car Machanic
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              {" "}
              Services{" "}
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              {" "}
              Experts{" "}
            </Nav.Link>
            {user?.email ? (
              <button onClick={logOut} className="btn btn-light">
                LogOut
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                {" "}
                Login{" "}
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in :
              <a href="#login">
                <span className="text-warning">{user?.displayName}</span>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
