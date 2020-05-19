import React from 'react';
import { Card, CardBody } from 'reactstrap';

const NotFound = () => {
  const cardHeaderLabel = '404 Page Not Found';
  const cardBody = <p>The page you were looking for was not found.</p>;
  return (
    <Card className="mb-4" color="light">
      <CardBody>
        <h3 className="mb-4">{ cardHeaderLabel }</h3>
        { cardBody }
      </CardBody>
    </Card>
  );
};

NotFound.propTypes = {};

export default NotFound;
