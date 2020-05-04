import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import LoginFormFields from 'components/authentication/constants/LoginFormFields';

const LoginFormPassword = (props) => {
  const id = "userLoginPassword";
  return (
    <FormGroup>
      <Label for={ id }>
        Password:
      </Label>
      <Field
        component={ PlantasticInput }
        id={ id }
        name={ LoginFormFields.PASSWORD }
        placeholder="Your password"
        type="password"
      />
    </FormGroup>
  );
};

LoginFormPassword.propTypes = {};

export default LoginFormPassword;
