import { Dropdown, DropdownButton, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/react.svg";
import ShopptingCart from "../features/cart/ShopptingCart";



function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              style={{ marginRight: "0.6rem" }}
            />
            <Navbar.Text>Shoppy</Navbar.Text>
          </Navbar.Brand>

          <Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                  <ShopptingCart/>
              </Nav.Item>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
