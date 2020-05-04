import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import LoginForm from 'components/authentication/login-form/LoginForm';
import PropTypes from 'prop-types';
import axios from 'axios';
import Api from 'constants/Api';
import Logo from 'components/shared/Logo';
import './LoginPage.scss';

const LoginPage = ({ onTokenObtained }) => {

  /**
   * @param {Credentials} credentials
   * @return
   */
  const onSignIn = (credentials) => {
    return axios.post(Api.AUTH_TOKEN, credentials)
      .then((response) => {
        const { token } = response.data;
        onTokenObtained(token);
      })
      .catch((error) => {
        // TODO: some decent error handling
        console.warn('TODO');
      });
  };

  return (
    <Container className="h-100">
      <Row className="h-100 align-items-start align-items-md-center justify-content-center ">
        <Col xs={ { size: 12 } } sm={ { size: 10 } } lg={ { size: 8 } }>
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
                  <LoginForm onSubmit={ onSignIn } />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

LoginPage.propTypes = {
  onTokenObtained: PropTypes.func.isRequired,
};


export default LoginPage;