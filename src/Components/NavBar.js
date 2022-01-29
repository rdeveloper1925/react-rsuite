import React, { useContext } from "react";
import {
  Drawer,
  Dropdown,
  Sidenav,
  Navbar,
  Nav,
  InputGroup,
  Input,
  CustomProvider,
  Container,
} from "rsuite";
import { UserBadge, PeoplesCostomize } from "@rsuite/icons";
import { NavLink, useNavigate } from "react-router-dom";
import TagNumberIcon from "@rsuite/icons/TagNumber";
import MenuIcon from "@rsuite/icons/Menu";
import SearchIcon from "@rsuite/icons/Search";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import ThemeContext from "../Store/ThemeContext";

function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <CustomProvider theme={theme}>
      <Navbar appearance={theme === "light" ? "inverse" : "default"}>
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
            {theme === "light" ? (
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
      <Container style={{ padding: "15px" }}>{props.children}</Container>
    </CustomProvider>
  );
}

function DrawerNavigation(props) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const navigateOnClick = (route) => {
    props.setOpen(false);
    navigate(route);
  };
  return (
    <div>
      <Drawer
        size="xs"
        backdrop={true}
        placement="left"
        open={props.open}
        onClose={() => props.setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Rsuite Tutorial</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body style={{ padding: 0, margin: 0 }}>
          <div style={styles}>
            <Sidenav
              appearance={theme === "light" ? "inverse" : "default"}
              defaultOpenKeys={["3", "4"]}
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item
                    eventKey="1"
                    active
                    onClick={navigateOnClick.bind(this, "/dashboard")}
                    icon={<UserBadge />}
                  >
                    Dashboard
                  </Nav.Item>
                  <Dropdown
                    eventKey="2"
                    title="Proforma Invoices"
                    icon={<TagNumberIcon />}
                  >
                    <NavLink
                      to="/proforma"
                      style={{ textDecoration: "none" }}
                      onClick={navigateOnClick.bind(this, "/proforma")}
                    >
                      <Dropdown.Item eventKey="2-1">
                        Proforma Invoice
                      </Dropdown.Item>
                    </NavLink>
                  </Dropdown>

                  <Dropdown
                    eventKey="3"
                    title="Invoices"
                    icon={<PeoplesCostomize />}
                  >
                    <NavLink
                      to="/mhe"
                      style={{ textDecoration: "none" }}
                      onClick={navigateOnClick.bind(this, "/mhe")}
                    >
                      <Dropdown.Item eventKey="5-1">Rodey</Dropdown.Item>
                    </NavLink>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

const styles = {
  width: "100%",
};

export default NavBar;
