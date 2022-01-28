import React from "react";
import { Navbar, Nav, Dropdown } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import DrawerNavigation from "./DrawerNavigation";

function NavBar(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Navbar appearance="inverse">
        <Nav.Item pullLeft onClick={() => setOpen(!open)}>
          <MenuIcon size="15em" />
        </Nav.Item>
        <Navbar.Brand href="#">
          <strong>Rsuite Tutorial</strong>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Profile</Nav.Item>
        </Nav>
      </Navbar>
      <DrawerNavigation open={open} setOpen={setOpen} />
      {props.children}
    </>
  );
}

export default NavBar;
