import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import LoginFormFields from 'components/authentication/constants/LoginFormFields';

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
        name={ LoginFormFields.USERNAME }
        placeholder="Your username"
        type="text"
      />
    </FormGroup>
  );
};

LoginFormUsername.propTypes = {};

export default LoginFormUsername;
