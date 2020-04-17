import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const InProgress = ({ inProgress }) => {
  const icon = 'spinner';
  return inProgress &&
    <p>
      <FontAwesomeIcon icon={faSpinner} spin />
      { ' ' }
      Loading data...
    </p>
};

export default InProgress;