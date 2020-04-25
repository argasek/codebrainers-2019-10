import React from "react";
import PropTypes from "prop-types";
import PlantForm from "./plant-form/PlantForm";
import { Card, CardBody } from "reactstrap";

const PlantCreate = (props) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <PlantForm {...props} />
      </CardBody>
    </Card>
  );
};

PlantCreate.propTypes = {};

export default PlantCreate;
