import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import loginFormFields from 'components/authentication/login/form/LoginFormFields';

const LoginFormUsername = (props) => {
  const id = "userLoginUsername";
  return (
    <FormGroup>
      <Label for={ id }>
        Login:
      </Label>
      <Field
        component={ PlantasticInput }
        id={ id }
        name={ loginFormFields.USERNAME }
        placeholder="Your username"
        type="text"
      />
    </FormGroup>
  );
};

LoginFormUsername.propTypes = {};

export default LoginFormUsername;
