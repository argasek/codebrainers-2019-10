import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const withHistoryBackButtonOptions = (Button, options) => {
  const innerFn = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const { to } = options;
    const onClick = history.goBack;
    const buttonOptions = history.length > 2 ? { onClick } : { tag: Link, to };

    return <Button { ...props } { ...buttonOptions } />;
  };

  innerFn.propTypes = {};

  return innerFn;
};

export default withHistoryBackButtonOptions;