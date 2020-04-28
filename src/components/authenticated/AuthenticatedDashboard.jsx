import React from 'react';
import Logo from 'components/shared/Logo';
import { Button, Col, Jumbotron, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Routes from 'constants/Routes';

const AuthenticatedDashboard = () => {
  return (
    <Jumbotron>
      <Row>
        <Col xs={ 12 } xl={ 3 }>
          <Logo className="w-100" />
        </Col>
        <Col xs={ 12 } xl={ 9 }>
          <h1 className="display-3 font-weight-normal">Plantastic</h1>
          <p className="lead">
            This is a simple application for managing your house plants collection,
            made purely for fun and educational reasons.</p>
          <hr className="my-2" />
          <p className="small">(And because plants are cool and don't bark on your guests).</p>
          <p className="lead">
            <Button color="primary" size="lg" tag={ Link } to={ Routes.PLANTS }>Manage your plant collection</Button>
          </p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default AuthenticatedDashboard;
