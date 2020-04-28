import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { roomPropType } from 'proptypes/RoomsPropTypes';

class RoomItem extends React.PureComponent {

  render() {
    const room = this.props.room;

    return (
      <ListGroupItem>
        { room.name }
      </ListGroupItem>
    );
  }

}

RoomItem.propTypes = {
  room: roomPropType,
};


export default RoomItem;