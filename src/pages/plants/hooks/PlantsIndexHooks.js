import Success from 'constants/Success';
import useCategories from 'ducks/categories/useCategories';
import useRooms from 'ducks/rooms/useRooms';
import usePlants from 'ducks/plants/usePlants';
import { useLayoutEffect, useState } from 'react';

const usePlantsIndexSuccess = () => {
  const { categoriesSuccess } = useCategories();
  const { roomsSuccess } = useRooms();
  const { plantsSuccess } = usePlants();
  const [ success, setSuccess ] = useState(Success.UNKNOWN);

  const statuses = [ categoriesSuccess, roomsSuccess, plantsSuccess ];

  useLayoutEffect(() => {
    if (statuses.some(status => status === Success.FAIL)) {
      setSuccess(Success.FAIL);
    } else if (statuses.every(status => status === Success.OK)) {
      setSuccess(Success.OK);
    } else {
      setSuccess(Success.UNKNOWN);
    }

  }, [ statuses ]);

  return success;
};

export {
  usePlantsIndexSuccess
};