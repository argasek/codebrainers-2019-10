import React from 'react';
import { Container } from 'reactstrap';
import 'components/authentication/login/LoginPageContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const LoadingPage = ({ visible }) => {
  const className = classNames(
    'h-100 align-items-center justify-content-center',
    { 'd-flex': visible },
    { 'd-none': !visible }
  );

  return (
    <Container className={ className }>
      <span className="h3 text-muted">
        <FontAwesomeIcon icon={ faSpinner } pulse={ true } />
      </span>
    </Container>
  );
};

LoadingPage.propTypes = {};


export default LoadingPage;