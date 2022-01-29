import React from "react";
import { Navbar, Nav, Dropdown, InputGroup, Input } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import DrawerNavigation from "./DrawerNavigation";
import SearchIcon from "@rsuite/icons/Search";

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
          <Nav.Item>
            <InputGroup size="md" style={{ width: "100%" }}>
              <Input placeholder="Search" />
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
            </InputGroup>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Dropdown title="Profile">
            <Dropdown.Item>Hello</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
      <DrawerNavigation open={open} setOpen={setOpen} />
      {props.children}
    </>
  );
}

export default NavBar;
