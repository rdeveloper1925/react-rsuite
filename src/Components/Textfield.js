import React from "react";
import { Form, Input } from "rsuite";

function Textfield({ name, label, ...props }) {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control checkAsync name={name} {...props} />
    </Form.Group>
  );
}

export default Textfield;
