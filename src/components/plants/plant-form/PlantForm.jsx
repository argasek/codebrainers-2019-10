import { Button } from 'reactstrap';
import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantHumidityOptions,
  plantTemperatureOptions,
} from 'constants/PlantConstants';
import React from 'react';
import { Form, Formik } from 'formik';
import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import PropTypes from 'prop-types';
import Effect from 'components/shared/form/Effect';
import Plant from 'models/Plant';
import { classToPlain } from 'serializers/Serializer';
import pick from 'lodash-es/pick';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

class PlantForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setupInitialValues();
  }

  setupInitialValues() {
    const firstOf = (arr) => arr[0].id;
    const plant = new Plant();
    const fieldNames = Object.values(PlantFormFields);

    const initialValues = pick(
      classToPlain(plant, false),
      fieldNames
    );

    this.initialValues = Object.assign(initialValues, {
      [PlantFormFields.REQUIRED_EXPOSURE]: firstOf(plantExposureOptions),
      [PlantFormFields.REQUIRED_HUMIDITY]: firstOf(plantHumidityOptions),
      [PlantFormFields.DIFFICULTY]: firstOf(plantDifficultyOptions),
      [PlantFormFields.REQUIRED_TEMPERATURE]: firstOf(plantTemperatureOptions),
    });

  }

  render() {
    const onChange = (currentState, previousState) => {
      const { name } = currentState.values;
      console.log(currentState.values);
      this.props.onPlantNameChange(name);
    };

    const onSubmit = (values) => {
      console.log(values);
    };

    return (
      <Formik initialValues={ this.initialValues } onSubmit={ onSubmit }>
        { ({ isValid }) => (
          <Form className="plant-form">
            <Effect onChange={ onChange } />
            <PlantFormInformation />
            <PlantFormCultivation />
            <PlantFormMaintenance />
            <Button color="primary" type="submit" className="mt-3" disabled={ !isValid }>
              Create new plant
            </Button>
          </Form>
        ) }
      </Formik>
    );
  }

}

PlantForm.propTypes = {
  onPlantNameChange: PropTypes.func.isRequired,
};

export default PlantForm;
