import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import RoomItem from "components/rooms/RoomItem";
import InProgress from "components/shared/InProgress";
import { withRoomsPropTypes } from 'proptypes/RoomsPropTypes';
import OperationFailed from 'components/shared/OperationFailed';
import withRooms from 'components/rooms/Rooms';

class RoomsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    const {
      rooms,
      roomsErrorMessage,
      roomsInProgress,
      roomsSuccess,
    } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
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
          </div>
        </CardBody>
      </Card>
    );
  }
}

RoomsContainer.propTypes = {
  ...withRoomsPropTypes
};

export default withRooms(RoomsContainer);