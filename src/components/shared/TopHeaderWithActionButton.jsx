import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

const TopHeaderWithActionButton = ({ title, children }) => {
  return (
    <Row>
      <Col xs={ 12 } sm={ 6 }>
        <h3 className="mb-3">{ title }</h3>
      </Col>
      <Col xs={ 12 } sm={ 6 } className="text-sm-right mb-3 mb-sm-0">
        { children }
      </Col>
    </Row>
  );
};

TopHeaderWithActionButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default TopHeaderWithActionButton;
