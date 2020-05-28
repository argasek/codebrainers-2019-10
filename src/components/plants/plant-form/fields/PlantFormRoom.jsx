import React from 'react';
import { FormGroup, FormText, Label } from 'reactstrap';
import { Field } from 'formik';
import PlantasticSelect from 'components/shared/form/PlantasticSelect';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import { roomsPropType } from 'proptypes/RoomsPropTypes';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';
import { Link } from 'react-router-dom';
import Routes from 'constants/Routes';

const PlantFormRoom = ({ rooms }) => {
  const id = 'plantRoom';
  return (
    <FormGroup>
      <Label for={ id }>Room:</Label>
      <Field
        component={ PlantasticSelect }
        required
        id={ id }
        items={ rooms }
        name={ PlantFormFields.ROOM }
      >
        <OptionPleaseSelect />
      </Field>
      <FormText>
        No room on the list? <Link to={ Routes.ROOMS } target="_blank">Create room…</Link>
      </FormText>
    </FormGroup>
  );
};

PlantFormRoom.propTypes = {
  rooms: roomsPropType
};

export default PlantFormRoom;
