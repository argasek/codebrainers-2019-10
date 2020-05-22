import InProgress from 'components/shared/InProgress';
import OperationFailed from 'components/shared/OperationFailed';
import React, { useEffect } from 'react';
import RoomItem from 'components/rooms/RoomItem';
import withRooms from 'components/rooms/Rooms';
import { Card, CardBody, ListGroup } from 'reactstrap';
import useRooms from 'ducks/rooms/useRooms';

const RoomsContainer = () => {

  const {
    rooms,
    roomsErrorMessage,
    roomsInProgress,
    roomsSuccess,
    fetchRooms,
  } = useRooms();

  useEffect(() => {
    fetchRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardBody>
        <InProgress inProgress={ roomsInProgress } />
        <OperationFailed isFailed={ roomsSuccess === false }>
          <strong>Failed to fetch rooms.</strong>
          { ' Reason: ' }
          { roomsErrorMessage }
        </OperationFailed>
        {
          roomsSuccess &&
          <ListGroup className="rooms">
            {
              rooms.map((room) =>
                <RoomItem
                  room={ room }
                  key={ room.id }
                />
              )
            }
          </ListGroup>
        }
      </CardBody>
    </Card>
  );
};

RoomsContainer.propTypes = {};

export default withRooms(RoomsContainer);