import React from "react";
import { Col, Container, Form, Row, Schema, Grid } from "rsuite";
import { GrStackOverflow } from "react-icons/gr";
import { CompleteModal, WidgetCards } from "../Components/Utilities";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { CompleteForm } from "../Components/Inputs";

function ProformaInvoices() {
  const validationModel = Schema.Model({
    customerId: Schema.Types.NumberType().isRequired("Required"),
    date: Schema.Types.DateType()
      .min(new Date().getDate(), "Enter valid date")
      .isRequired("Required"),
    currency: Schema.Types.StringType()
      .isRequired("Required")
      .isOneOf(["UGX", "USD"]),
    modeOfPayment: Schema.Types.StringType()
      .isRequired("Required")
      .isOneOf(["Cash", "Cheque", "EFT"]),
    lpoNo: Schema.Types.NumberType().isRequired("Required"),
    carRegNo: Schema.Types.StringType().isRequired("Required"),
    mileage: Schema.Types.NumberType().isRequired("Required"),
    carType: Schema.Types.StringType().isRequired("Required"),
    preparedBy: Schema.Types.StringType().isRequired("Required"),
    narration: Schema.Types.StringType().isRequired("Required"),
  });
  const fields = [
    { name: "customerId", label: "Customer", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "currency", label: "Currency", type: "text" },
    { name: "modeOfPayment", label: "Mode of Payment", type: "text" },
    { name: "lpoNo", label: "Lpo No", type: "number" },
    { name: "carRegNo", label: "Car Registration", type: "text" },
    { name: "mileage", label: "Mileage", type: "number" },
    { name: "carType", label: "Car Type", type: "text" },
    { name: "preparedBy", label: "Prepared By", type: "text" },
    { name: "narration", label: "Narration", type: "text" },
  ];

  const submitHandler = (e) => {
    //e.preventDefault();
    alert("heeyaw");
  };
  return (
    <Container>
      <h3>Proforma Invoices</h3>
      <Grid fluid>
        <Row className="show-grid">
          <Col xs="8" md="6" lg="8">
            <WidgetCards style={{ backgroundColor: "#eb9d17", padding: "0px" }}>
              <GrStackOverflow size="25px" /> <h5>96 Invoices</h5>
            </WidgetCards>
          </Col>
          <Col xs="8" md="6" lg="8">
            <WidgetCards style={{ backgroundColor: "red", padding: "0px" }}>
              <MdOutlineCancelPresentation size="25px" />
              <h5>47 Unpaid Invoices</h5>
            </WidgetCards>
          </Col>
          <Col xs="8" md="6" lg="8">
            <WidgetCards style={{ backgroundColor: "green", padding: "0px" }}>
              <GrMoney style={{ color: "white" }} size="25px" />{" "}
              <h5>19 Paid Invoices</h5>
            </WidgetCards>
          </Col>
        </Row>
      </Grid>
      <Row>
        <Col xs={6} md={12}>
          <CompleteModal title="Add Proforma Invoice" body="body">
            <CompleteForm
              fields={fields}
              validation={validationModel}
              submitHandler={submitHandler}
            />
          </CompleteModal>
        </Col>
      </Row>
    </Container>
  );
}

export default ProformaInvoices;
