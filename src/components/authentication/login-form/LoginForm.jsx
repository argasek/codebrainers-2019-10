import { Button } from 'reactstrap';
import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import LoginFormFields from 'components/authentication/constants/LoginFormFields';
import LoginFormUsername from 'components/authentication/login-form/fields/LoginFormUsername';
import LoginFormPassword from 'components/authentication/login-form/fields/LoginFormPassword';

const LoginForm = (props) => {

  const initialValues = LoginFormFields.getInitialValues();

  const onSubmit = (values) => {
    const credentials = LoginFormFields.toModel(values);
    props.onSubmit(credentials);
  };

  return (
    <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
      { ({ isValid }) => (
        <Form className="login-form">
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
