import { Button } from 'reactstrap';
import React from 'react';
import { Form, Formik } from 'formik';
import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import PropTypes from 'prop-types';
import Effect from 'components/shared/form/Effect';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

class PlantForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setupInitialValues();
  }

  setupInitialValues() {
    this.initialValues = PlantFormFields.getInitialValues();
  }

  render() {
    const onChange = (currentState, previousState) => {
      const { name } = currentState.values;
      this.props.onPlantNameChange(name);
    };

    const onSubmit = (values) => {
      const plant = PlantFormFields.toModel(values);

      this.props.onSubmit(plant);
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
  onSubmit: PropTypes.func.isRequired,
};

export default PlantForm;
