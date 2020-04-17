import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Select from "components/shared/Select";
import { someArray, someOtherArray } from "constants/PlantConstants";
import React from "react";
import PropTypes from 'prop-types';

const Plants = ({
                  fertilizingFrequency,
                  inputOnChange,
                  plantName,
                  someSelectField,
                }) => {

  return (
    <Card className="mb-4">
      <CardBody>
        <form method="GET">
          <Row>
            <Col xs={6} lg={3}>
              <Select name="someSelectField" value={someSelectField} onChange={inputOnChange} options={someArray} label="Jakieś pole" />
            </Col>
            <Col xs={6} lg={5}>
              <Select name="fertilizingFrequency" value={fertilizingFrequency} onChange={inputOnChange} options={someOtherArray} label="Fertilizing frequency" />
            </Col>
            <Col xs={12} lg={4}>
              <FormGroup>
                <Label for="plantName">Plant name:</Label>
                <Input
                  id="plantName"
                  name="plantName"
                  type="text"
                  value={plantName}
                  onChange={inputOnChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button type="submit" className="mt-3">Wyślij formularz</Button>
        </form>
      </CardBody>
    </Card>
  )
};

Plants.propTypes = {
  fertilizingFrequency: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  plantName: PropTypes.string.isRequired,
  someSelectField: PropTypes.string.isRequired,
}


export default Plants;