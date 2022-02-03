import React from "react";
import { Grid, Row, Col, Schema, Placeholder, Stack } from "rsuite";
import { CompleteForm, getFormData } from "../Components/Inputs";
import { CompleteModal, WidgetCards } from "../Components/Utilities";

function Customers() {
  const [customers, setCustomers] = React.useState(
    <CustomerPlaceholder count={5} />
  );

  //TODO: FETCH ALL CUSTOMERS

  const formValidation = Schema.Model({
    customerName: Schema.Types.StringType().isRequired(
      "Customer Name is required"
    ),
    address: Schema.Types.StringType().isRequired("Address is required"),
    email: Schema.Types.StringType().isEmail("Provide a valid email"),
    contactPerson: Schema.Types.StringType().isRequired(
      "Contact Person is required"
    ),
    phone: Schema.Types.NumberType()
      .min(11111111, "Enter a valid length of phone number")
      .max(99999999999, "Enter a valid length of phone number")
      .isRequired("Phone is required"),
  });

  const fields = [
    { name: "customerName", label: "Customer Name", type: "text" },
    { name: "address", label: "Address", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "contactPerson", label: "ContactPerson", type: "text" },
    { name: "phone", label: "phone", type: "number" },
  ];

  const submitHandler = (formValue, event) => {
    //formValue will be false if form has validation errors and true otherwise
    if (formValue) {
      var formData = getFormData(event, fields);
      //TODO: WRITE CUSTOMER TO DB
    }
  };
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
        <CompleteModal title="Add Customer">
          <CompleteForm
            onSubmit={submitHandler}
            validation={formValidation}
            fields={fields}
          />
        </CompleteModal>
      </Grid>
      {/*Listing the Customers */}
      <Stack spacing={10}>{customers}</Stack>
    </div>
  );
}

const CustomerPlaceholder = (props) => {
  let placeholders = [];
  for (var i = 0; i < props.count; i++) {
    placeholders.push(
      <WidgetCards
        key={i}
        style={{
          padding: "0",
          width: "150px",
          margin: "10px",
        }}
      >
        <Placeholder.Paragraph active rows={5} rowMargin={10} rowHeight={20} />
      </WidgetCards>
    );
  }
  return <>{placeholders}</>;
};

export default Customers;
