import React from 'react';
import { Container } from 'reactstrap';
import 'components/authentication/login/LoginPageContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingPage = () => {

  return (
    <Container className="h-100 d-flex align-items-center justify-content-center">
      <span className="h3 text-muted">
        <FontAwesomeIcon icon={ faSpinner } pulse={ true } />
      </span>
    </Container>
  );
};

LoadingPage.propTypes = {};


export default LoadingPage;