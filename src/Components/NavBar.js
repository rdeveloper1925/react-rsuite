import React from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  InputGroup,
  Input,
  CustomProvider,
} from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import DrawerNavigation from "./DrawerNavigation";
import SearchIcon from "@rsuite/icons/Search";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import ThemeContext from "../Store/ThemeContext";

function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <CustomProvider theme={theme}>
      <Navbar appearance={theme == "light" ? "inverse" : "default"}>
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
          <Nav.Item onClick={changeTheme}>
            {theme == "light" ? (
              <strong>
                <BsSunFill size="20px" />
              </strong>
            ) : (
              <strong>
                <BsFillMoonFill size="20px" />
              </strong>
            )}
          </Nav.Item>
        </Nav>
      </Navbar>
      <DrawerNavigation open={open} setOpen={setOpen} />
      {props.children}
    </CustomProvider>
  );
}

export default NavBar;
