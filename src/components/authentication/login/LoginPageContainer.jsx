import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import Logo from 'components/shared/Logo';
import './LoginPageContainer.scss';
import classNames from 'classnames';

const LoginPageContainer = React.memo(({ onSubmit, visible }) => {
  const className = classNames(
    'h-100',
    { 'd-none': !visible }
  );
  return (
    <Container className={ className }>
      <Row className="h-100 align-items-start align-items-md-center">
        <Col xs={ { size: 12 } } sm={ { size: 10 } } lg={ { size: 8, offset: 2 } }>
          <Card className="login-container">
            <CardHeader>
              Welcome! Please sign in.
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs={ 12 } md={ 4 } className="application-logo-container">
                  <Logo className="application-logo" />
                </Col>
                <Col xs={ 12 } md={ 8 }>
                  <LoginForm onSubmit={ onSubmit } />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

LoginPageContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default LoginPageContainer;