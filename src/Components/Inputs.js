import React from "react";
import { Form, Button, Schema, ButtonToolbar } from "rsuite";

export function CompleteForm({ fields, validation, submitHandler, ...rest }) {
  //console.log(validation);
  return (
    <div>
      <Form model={validation} {...rest}>
        {fields.map((field, index) => (
          <Input key={index} {...field} />
        ))}
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

export function Input({ name, label, accepter, ...rest }) {
  return (
    <Form.Group controlId={`${name}-2`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}
