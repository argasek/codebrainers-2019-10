import React from 'react';
import { Form, Formik } from 'formik';
import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import Effect from 'components/shared/form/Effect';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import { plantFormPropTypes } from 'proptypes/PlantFormPropTypes';
import PlantFormButtons from 'components/plants/plant-form/sections/PlantFormButtons';

const PlantForm = (props) => {

  const onChange = (currentState) => {
    const { name } = currentState.values;
    props.onPlantNameChange(name);
  };

  const onSubmit = (values) => {
    const plant = PlantFormFields.toModel(values);
    props.onSubmit(plant);
  };

  const {
    categories,
    initialValues,
    rooms,
  } = props;

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
          <PlantFormInformation
            categories={ categories }
            rooms={ rooms }
          />
          <PlantFormCultivation />
          <PlantFormMaintenance />
          <PlantFormButtons
            cancelLabel="Cancel"
            submitDisabled={ !isValid }
            submitLabel={ key ? 'Save changes' : 'Create new plant' }
          />
        </Form>
      ) }
    </Formik>
  );

};

PlantForm.propTypes = plantFormPropTypes;

export default React.memo(PlantForm);
