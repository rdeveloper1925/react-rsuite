import React from "react";
import { Form, Button, ButtonToolbar } from "rsuite";

//Provides full form functionality
/* <CompleteForm onSubmit={submitHandler} validation={formValidation} fields={fields} />
 */
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

//Blueprint for input
export function Input({ name, label, accepter, ...rest }) {
  return (
    <Form.Group controlId={`${name}-2`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

//form data organizer
export function getFormData(event, fields) {
  //processed the form data as formData
  let formData = {};
  for (let i = 0; i <= fields.length; i++) {
    formData[event.target[i].name] = event.target[i].value;
  }
  return formData;
}
