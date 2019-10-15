import React from "react";
import { Field, Form } from "react-final-form";

const Root = () => {
  return (
    <Form
      onSubmit={formObj => {
        console.log(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ input }) => (
              <input
                placeholder="Name"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="Email"
                type="email"
                {...input}
              />
            )}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default Root;
