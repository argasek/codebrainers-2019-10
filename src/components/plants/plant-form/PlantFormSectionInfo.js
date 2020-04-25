import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from "components/shared/form/PlantasticInput";
import { plantDifficultyOptions } from "constants/PlantConstants";
import PlantasticRadioNoFeedback from "components/shared/form/PlantasticRadioNoFeedback";

const PlantFormSectionInfo = (props) => {
  const plantNameId = "plantName";
  const plantDifficultyId = "plantDifficultyLevel";
  return (
    <section className="mb-4">
      <h4>Plant info</h4>
      <Row>
        <Col xs={ 12 } lg={ 6 }>
          <FormGroup className="mb-0">
            <Label for={ plantNameId }>Plant name:</Label>
            <Field
              id={ plantNameId }
              name="name"
              type="text"
              placeholder="Monstera Deliciosa"
              component={ PlantasticInput }
            />
          </FormGroup>
        </Col>
        <Col xs={ 12 } lg={ 6 }>
          <FormGroup tag="fieldset" className="mb-0">
            <legend className="col-form-label">
              Difficulty:
              <span className="asterisk"/>
            </legend>
            { plantDifficultyOptions.map((item) => (
              <Field
                id={ plantDifficultyId + item.id }
                key={ item.id }
                value={ item.id }
                name="difficultyLevel"
                type="radio"
                label={ item.name }
                component={ PlantasticRadioNoFeedback }
                className="mb-2"
                inline
              />
            )) }
          </FormGroup>
        </Col>
      </Row>
    </section>
  );
};

PlantFormSectionInfo.propTypes = {};

export default PlantFormSectionInfo;
