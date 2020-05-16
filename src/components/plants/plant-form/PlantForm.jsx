import Effect from 'components/shared/form/Effect';
import PlantFormButtons from 'components/plants/plant-form/sections/PlantFormButtons';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import PlantFormInformation from 'components/plants/plant-form/sections/PlantFormInformation';
import PlantFormMaintenance from 'components/plants/plant-form/sections/PlantFormMaintenance';
import React from 'react';
import { Form, Formik } from 'formik';
import { formikFormApplyYupTransforms as yupTransform } from 'formik-yup';
import { plantFormCreateSchema, plantFormUpdateSchema } from 'components/plants/plant-form/PlantFormSchemas';
import { plantFormPropTypes } from 'proptypes/PlantFormPropTypes';

const PlantForm = (props) => {
  const {
    categories,
    initialValues,
    rooms,
  } = props;

  const initialStatus = PlantFormFields.getInitialStatus();
  const key = initialValues.uuid;
  const validateOnMount = !initialValues.id;
  const validationSchema = initialValues.id ? plantFormUpdateSchema : plantFormCreateSchema;

  const onChange = (currentState) => {
    const { name } = currentState.values;
    props.onPlantNameChange(name);
  };

  const onSubmit = async (values, formikBag) => {
    const transformPromise = yupTransform(values, formikBag, validationSchema);
    const [ formattedValues, hasErrors ] = await transformPromise;
    if (hasErrors) {
      return;
    }
    const plant = PlantFormFields.toModel(formattedValues);
    return props.onSubmit(plant);
  };

  const formikProps = {
    key,
    initialValues,
    initialStatus,
    validateOnMount,
    onSubmit,
    validationSchema,
  };

  const submitDisabled = (isValid, isSubmitting) => !isValid || isSubmitting;

  return (
    <Formik { ...formikProps }>
      { ({ isValid, isSubmitting }) => (
        <Form className="plant-form" noValidate>
          <Effect onChange={ onChange } />
          <PlantFormInformation
            categories={ categories }
            rooms={ rooms }
          />
          <PlantFormCultivation />
          <PlantFormMaintenance />
          <PlantFormButtons
            cancelLabel="Back to the list"
            isSubmitting={ isSubmitting }
            resetLabel="Reset"
            submitDisabled={ submitDisabled(isValid, isSubmitting) }
            submitLabel={ key ? 'Save changes' : 'Create new plant' }
          />
        </Form>
      ) }
    </Formik>
  );

};

PlantForm.propTypes = plantFormPropTypes;

export default PlantForm;
