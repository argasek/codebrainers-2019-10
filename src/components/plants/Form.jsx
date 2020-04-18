import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

const commonSchema = Yup.object()
  .shape({
    field: Yup.number()
      .typeError('...')
      .positive('...')
  });

const someSchema = Yup.object()
  .shape({
    content: Yup.string()
      .trim()
      .required('Please provide string.'),
  })
  .concat(commonSchema);

const otherSchema = Yup.object()
  .shape({
    file: Yup.mixed()
      .required('Some error.')
  })
  .concat(commonSchema);

class SomeForm extends React.PureComponent {

  render() {

    const initialValues = {
      content: '',
      price: '',
    };

    const validationSchema = undefined;

    return (
          <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={validationSchema}>
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
    )
  }

}
