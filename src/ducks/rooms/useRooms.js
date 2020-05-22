import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRooms,
  selectRooms,
  selectRoomsErrorMessage,
  selectRoomsInProgress,
  selectRoomsSuccess
} from 'ducks/rooms/roomsSlice';

const useRooms = () => {
  const dispatch = useDispatch();

  return {
    rooms: useSelector(selectRooms),
    roomsErrorMessage: useSelector(selectRoomsErrorMessage),
    roomsInProgress: useSelector(selectRoomsInProgress),
    roomsSuccess: useSelector(selectRoomsSuccess),
    fetchRooms: () => dispatch(fetchRooms())
  };

};

export default useRooms;