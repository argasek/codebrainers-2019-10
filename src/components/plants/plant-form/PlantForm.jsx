import Effect from 'components/shared/form/Effect';
import PlantFormButtons from 'components/plants/plant-form/sections/PlantFormButtons';
import PlantFormCultivation from 'components/plants/plant-form/sections/PlantFormCultivation';
import { plantFormFields as formFields } from 'components/plants/plant-form/constants/PlantFormFields';
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
    onRemove,
    plantInProgress,
    rooms,
  } = props;

  const initialStatus = formFields.getInitialStatus();

  const key = initialValues.uuid;

  const isCreateMode = !initialValues.id;
  const isUpdateMode = !!initialValues.id;

  const validateOnMount = isCreateMode;
  const validationSchema = isUpdateMode ? plantFormUpdateSchema : plantFormCreateSchema;

  const onChange = (currentState) => {
    const { name } = currentState.values;
    props.onPlantNameChange(name);
  };

  /**
   *
   * @param {ApiErrors} apiErrors
   * @param {ApiErrorStatus} httpStatusCode
   * @param {FormikValues} values
   * @param {function} resetForm
   */
  const onSubmitError = (apiErrors, httpStatusCode, values, resetForm) => {
    const status = formFields.getStatusFromApi(apiErrors, httpStatusCode);
    resetForm({ values, status });
  };

  const onSubmit = async (values, formikBag) => {
    const transformPromise = yupTransform(values, formikBag, validationSchema);
    const [ formattedValues, hasErrors ] = await transformPromise;
    if (hasErrors) {
      return;
    }
    const plant = formFields.toModel(formattedValues);
    const { resetForm } = formikBag;
    const onSubmitApiErrors = (apiErrors, httpStatusCode) => onSubmitError(apiErrors, httpStatusCode, values, resetForm);
    return props.onSubmit(plant, onSubmitApiErrors);
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
            isSubmitting={ isSubmitting }
            submitDisabled={ submitDisabled(isValid, isSubmitting) }
            submitLabel={ isCreateMode ? 'Create new plant' : 'Save changes' }
            onRemove={ onRemove }
            plantInProgress={ plantInProgress }
          />
        </Form>
      ) }
    </Formik>
  );

};

PlantForm.propTypes = plantFormPropTypes;

export default PlantForm;
