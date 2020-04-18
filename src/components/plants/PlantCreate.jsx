import React from "react";
import PropTypes from "prop-types";
import PlantForm from "./PlantForm";
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

PlantCreate.propTypes = {
  fertilizingFrequency: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  plantName: PropTypes.string.isRequired,
  someSelectField: PropTypes.string.isRequired,
};

export default PlantCreate;
