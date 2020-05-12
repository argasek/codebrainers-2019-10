import { Button } from 'reactstrap';
import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import loginFormFields from 'components/authentication/constants/LoginFormFields';
import LoginFormUsername from 'components/authentication/login/fields/LoginFormUsername';
import LoginFormPassword from 'components/authentication/login/fields/LoginFormPassword';
import NonFieldErrors from 'components/shared/form/NonFieldErrors';
import { ApiErrors } from 'components/shared/form/FormikApiErrors';

const LoginForm = (props) => {
  const formFields = loginFormFields;

  const initialValues = formFields.getInitialValues();
  const initialStatus = formFields.getInitialStatus();

  /**
   *
   * @param {ApiErrors} apiErrors
   * @param {number} httpStatusCode
   * @param {FormikValues} values
   * @param {function} resetForm
   */
  const onSubmitError = (apiErrors, httpStatusCode, values, resetForm) => {
    const status = formFields.getStatusFromApi(apiErrors, httpStatusCode);
    resetForm({ values, status });
  };

  /**
   *
   * @param {FormikValues} values
   * @param {FormikBag} formikBag
   */
  const onSubmit = (values, formikBag) => {
    const credentials = formFields.toModel(values);
    const { resetForm } = formikBag;
    const onSubmitApiErrors = (apiErrors, httpStatusCode) => onSubmitError(apiErrors, httpStatusCode, values, resetForm);
    return props.onSubmit(credentials, onSubmitApiErrors);
  };

  return (
    <Formik initialValues={ initialValues } initialStatus={ initialStatus } onSubmit={ onSubmit }>
      { ({ isValid }) => (
        <Form className="login-form">
          <NonFieldErrors label={ 'Unable to login' } />
          <LoginFormUsername />
          <LoginFormPassword />
          <Button color="primary" type="submit" className="mt-3" disabled={ !isValid }>
            Sign In
          </Button>
        </Form>
      ) }
    </Formik>
  );

};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
