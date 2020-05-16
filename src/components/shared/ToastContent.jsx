import React from 'react';
import PropTypes from 'prop-types';

const ToastContent = ({ title, children }) => {
  return (
    <div className="toast-content">
      <h6 className="pb-2 font-weight-bold">{ title }</h6>
      <div>
        { children }
      </div>
    </div>
  );
};

ToastContent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToastContent;
