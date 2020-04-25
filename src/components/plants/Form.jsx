import React from "react";
import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import { Button, FormGroup, Input, Label } from "reactstrap";

const commonSchema = Yup.object().shape({
  field: Yup.number().typeError("...").positive("..."),
});

const someSchema = Yup.object()
  .shape({
    content: Yup.string().trim().required("Please provide string."),
  })
  .concat(commonSchema);

const otherSchema = Yup.object()
  .shape({
    file: Yup.mixed().required("Some error."),
  })
  .concat(commonSchema);

class SomeForm extends React.PureComponent {
  render() {
    const initialValues = {
      content: "",
      price: "",
    };

    const validationSchema = undefined;

    return (
      <React.Fragment>
        <h3>Add a new plant</h3>
        <form method="POST" action="">
          {/* to jest z serwera</form>/ */ }
          <Label>Plant category:</Label>
          <Input
            type="text"
            name="category"
            value={ category }
            onChange={ this.handleInputChange }
          />
          <Label>Room:</Label>
          <Input
            type="text"
            name="room"
            value={ room }
            onChange={ this.handleInputChange /*, this.isPalindrom*/ }
          />

          <Label>Fertilizing interval:</Label>
          <Input
            type=""
            name="fertilizingInterval"
            value={ fertilizingInterval }
            onChange={ this.handleInputChange }
          />

          <Label>Bloomig:</Label>
          <Input
            type="checkbox"
            name="blooming"
            value={ blooming }
            onChange={ this.handleInputChange }
          />

          <Button type="submit">Submit new plant</Button>
        </form>

        <Formik
          initialValues={ initialValues }
          onSubmit={ onSubmit }
          validationSchema={ validationSchema }
        >
          { ({ isValid }) => (
            <Form>
              <FormGroup className="required">
                <Label htmlFor="label>">Quotation Body</Label>
                <Field
                  id="label"
                  name="content"
                  type="textarea"
                  rows="10"
                  placeholder="Enter your text…"
                  component={ FlockInput }
                  disabled={ isDisabled }
                />
              </FormGroup>
            </Form>
          ) }
        </Formik>
      </React.Fragment>
    );
  }
}
