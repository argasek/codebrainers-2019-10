import { Button } from 'reactstrap';
import React from 'react';
import { Form, Formik } from 'formik';
import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import Effect from 'components/shared/form/Effect';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import { plantFormPropTypes } from 'proptypes/PlantFormPropTypes';

const PlantForm = (props) => {

  const onChange = (currentState) => {
    const { name } = currentState.values;
    props.onPlantNameChange(name);
  };

  const onSubmit = (values) => {
    const plant = PlantFormFields.toModel(values);
    props.onSubmit(plant);
  };

  const { initialValues } = props;

  const key = initialValues.id;

  const formikProps = {
    key,
    initialValues,
    onSubmit,
  };

  return (
    <Formik { ...formikProps }>
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

};

PlantForm.propTypes = plantFormPropTypes;

export default React.memo(PlantForm);
