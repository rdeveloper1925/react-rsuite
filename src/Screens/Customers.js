import React from "react";
import { Grid, Row, Col } from "rsuite";
import { CompleteModal, WidgetCards } from "../Components/Utilities";

function Customers() {
  return (
    <div>
      <h3>Customers</h3>
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24} sm={12} md={6} lg="3">
            <WidgetCards style={{ backgroundColor: "green" }}>
              128 Customers
            </WidgetCards>
          </Col>
        </Row>
        <CompleteModal title="Add Customer"></CompleteModal>
      </Grid>
    </div>
  );
}

export default Customers;
