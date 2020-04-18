import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import { plantExposureOptions, plantHumidityOptions } from "constants/PlantConstants";
import React from "react";
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import PlantasticInput from "components/shared/form/PlantasticInput";
import PlantasticSelect from "components/shared/form/PlantasticSelect";

class PlantForm extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const firstOf = (arr) => arr[0].value;

        const name = '';
        const exposure = firstOf(plantExposureOptions);
        const humidity = firstOf(plantHumidityOptions);

        const initialValues = {
            name,
            exposure,
            humidity,
        };

        const onSubmit = () => { };

        const plantExposureId = 'plantExposure';
        const plantNameId = 'plantName';
        const plantHumidityId = 'plantHumidity';

        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {
                    ({ isValid }) => (
                        <Form method="GET">
                            <Row>
                                <Col xs={6} lg={3}>
                                    <Label for={plantExposureId}>Exposure:</Label>
                                    <Field
                                        id={plantExposureId}
                                        name="exposure"
                                        items={plantExposureOptions}
                                        component={PlantasticSelect}
                                    />
                                </Col>
                                <Col xs={6} lg={5}>
                                    <Label for={plantHumidityId}>Humidity:</Label>
                                    <Field
                                        id={plantHumidityId}
                                        name="humidity"
                                        items={plantHumidityOptions}
                                        component={PlantasticSelect}
                                    />
                                </Col>
                                <Col xs={12} lg={4}>
                                    <FormGroup>
                                        <Label for={plantNameId}>Plant name:</Label>
                                        <Field
                                            id={plantNameId}
                                            name="name"
                                            type="text"
                                            placeholder="Monstera Deliciosa"
                                            component={PlantasticInput}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button color="primary" type="submit" className="mt-3">Create new plant</Button>
                        </Form>
                    )
                }

            </Formik>
        )
    }

}

PlantForm.propTypes = {
};


export default PlantForm;