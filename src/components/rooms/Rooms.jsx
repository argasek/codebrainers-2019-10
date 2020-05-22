import React from 'react';
import useRooms from 'ducks/rooms/useRooms';

const withRooms = (WrappedComponent) => {

  return (props) => {
    const rooms = useRooms();

    return (
      <WrappedComponent
        { ...props }
        { ...rooms }
      />
    );
  };
};

export default withRooms;