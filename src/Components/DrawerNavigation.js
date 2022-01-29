import React, { useContext } from "react";
import { Drawer, Dropdown, Sidenav, Nav } from "rsuite";
import { UserBadge, PeoplesCostomize } from "@rsuite/icons";
import { NavLink, useNavigate } from "react-router-dom";
import TagNumberIcon from "@rsuite/icons/TagNumber";
import ThemeContext from "../Store/ThemeContext";

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
              appearance={theme == "light" ? "inverse" : "default"}
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
                  {/* {<Nav.Item eventKey="2" icon={<UserInfo />}>
                    User Group
                  </Nav.Item>
                  <Dropdown
                    eventKey="3"
                    title="Advanced"
                    icon={<PeoplesCostomize />}
                  >
                    <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    eventKey="4"
                    title="Settings"
                    icon={<PeoplesCostomize />}
                  >
                    <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                    <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                    <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                    <Dropdown.Menu eventKey="4-5" title="Custom Action">
                      <Dropdown.Item eventKey="4-5-1">
                        Action Name
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4-5-2">
                        Action Params
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>} */}
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

export default DrawerNavigation;
