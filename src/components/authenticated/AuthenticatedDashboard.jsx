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
          <p>(All because plants cannot bark on your guests).</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={ 12 } md={ 4 }>
          <Link to={ Routes.PLANTS }>
            Manage your collection
          </Link>
        </Col>
        <Col xs={ 12 } md={ 4 }>
          <Link to={ Routes.CATEGORIES }>
            Define plants categories
          </Link>
        </Col>
        <Col xs={ 12 } md={ 4 }>
          <Link to={ Routes.ROOMS }>
            Set up your rooms
          </Link>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default AuthenticatedDashboard;
