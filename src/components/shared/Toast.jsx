import React from 'react';
import PropTypes from 'prop-types';

const ToastContent = ({ title, children }) => {
  return (
    <div className="toast-content">
      <h6 className="pb-2 font-weight-bold">{ title }</h6>
      <div className="small">
        { children }
      </div>
    </div>
  );
};

ToastContent.propTypes = {
  title: PropTypes.string.isRequired,
};

class Toast {
  constructor(toastManager) {
    this.toastManager = toastManager;
  }

  _toastContent(message, title) {
    return <ToastContent title={ title }>{ message }</ToastContent>;
  }

  success(message, title = 'Success!') {
    this.toastManager.add(this._toastContent(message, title), { appearance: 'success' });
  }

  error(message, title = 'Success!') {
    this.toastManager.add(this._toastContent(message, title), { appearance: 'error' });
  }
}

export { ToastContent, Toast };
