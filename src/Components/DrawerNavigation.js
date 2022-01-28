import React from "react";
import { Drawer, Button, Dropdown, Sidenav, Nav } from "rsuite";
import { UserBadge, UserInfo, PeoplesCostomize } from "@rsuite/icons";

function DrawerNavigation(props) {
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
          {/* {<Drawer.Actions>
            <Button onClick={() => props.setOpen(false)}>Cancel</Button>
            <Button onClick={() => props.setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>} */}
        </Drawer.Header>
        <Drawer.Body style={{ padding: 0, margin: 0 }}>
          <div style={styles}>
            <Sidenav appearance="inverse" defaultOpenKeys={["3", "4"]}>
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" active icon={<UserBadge />}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<UserInfo />}>
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

export default DrawerNavigation;
