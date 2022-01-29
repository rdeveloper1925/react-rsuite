import React from "react";
import { CompleteForm } from "../Components/Inputs";
import { Schema } from "rsuite";

function TestScreen() {
  //schema for the form
  const formValidation = Schema.Model({
    username: Schema.Types.StringType().isRequired("Username is required"),
    password: Schema.Types.StringType()
      .isRequired("Password is required")
      .minLength(5, "Must be greater than 5")
      .maxLength(12, "Must be greater than 12"),
    email: Schema.Types.StringType()
      .isEmail("Invalid email")
      .isRequired("The email is required"),
  });
  //fields for the form
  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ];
  //getting submitted events
  const submitHandler = (formValue, event) => {
    //formValue will be false if form has validation errors and true otherwise
    if (formValue) {
      let formData = {};
      for (let i = 0; i <= 2; i++) {
        formData[event.target[i].name] = event.target[i].value;
      }
      //processed the form data as formData
    }
  };
  return (
    <div>
      <h3>Form Component testing</h3>
      <CompleteForm
        fields={fields}
        onSubmit={submitHandler}
        validation={formValidation}
      />
    </div>
  );
}

export default TestScreen;
