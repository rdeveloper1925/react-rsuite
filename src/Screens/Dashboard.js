import React from "react";
import { Col, Grid, Row } from "rsuite";
import { WidgetCards } from "../Components/Utilities";
import { BiGroup } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Dashboard() {
  return (
    <Grid fluid style={{ margin: "15px" }}>
      <Row gutter={3} className="show-grid">
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "green" }}>
            <BiGroup size="26px" />
            <br />
            <h4>
              94
              <br /> Customers
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <MdOutlineInventory2 size="26px" />
            <br />
            <h4>
              90
              <br /> Products
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <GrServices size="26px" />
            <br />
            <h4>
              193
              <br /> Services
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <AiOutlineShoppingCart size="26px" />
            <br />
            <h4>
              412
              <br /> Orders
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <MdOutlineInventory2 size="26px" />
            <br />
            <h4>
              90
              <br /> Inventory
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <MdOutlineInventory2 size="26px" />
            <br />
            <h4>
              90
              <br /> Inventory
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <MdOutlineInventory2 size="26px" />
            <br />
            <h4>
              90
              <br /> Inventory
            </h4>
          </WidgetCards>
        </Col>
        <Col xs={12} sm={8} md={4} lg={3}>
          <WidgetCards style={{ backgroundColor: "orange" }}>
            <MdOutlineInventory2 size="26px" />
            <br />
            <h4>
              90
              <br /> Inventory
            </h4>
          </WidgetCards>
        </Col>
      </Row>
    </Grid>
  );
}

export default Dashboard;
