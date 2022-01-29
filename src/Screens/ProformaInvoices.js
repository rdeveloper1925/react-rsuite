import React from "react";
import { Col, Container, Form, Row, Schema, Button } from "rsuite";
import Textfield from "../Components/Textfield";

function ProformaInvoices() {
  const validationModel = Schema.Model({
    customer: Schema.Types.NumberType("A number is required for this.").max(
      2,
      "less htan 2"
    ),
  });

  const submitHandler = (e) => {
    //e.preventDefault();
    alert("heeyaw");
  };
  return (
    <Container>
      <Row>
        <Col xs={6} md={12}>
          <Form model={validationModel} onSubmit={(e) => submitHandler(e)}>
            <Textfield name="customer" type="number" label="Customer" />
            <Button appearance="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProformaInvoices;
