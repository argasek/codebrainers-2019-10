import PropTypes from 'prop-types';

const roomPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const roomsPropTypes = PropTypes.arrayOf(roomPropType).isRequired;

const withRoomsPropTypes = {
  rooms: roomsPropTypes,
  roomsErrorMessage: PropTypes.string.isRequired,
  roomsInProgress: PropTypes.bool.isRequired,
  roomsSuccess: PropTypes.bool,
  fetchRooms: PropTypes.func.isRequired,
};


export {
  roomPropType,
  roomsPropTypes,
  withRoomsPropTypes,
};