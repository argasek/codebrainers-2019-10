import React from 'react';
import skillHopelessIcon from '../../../images/skill-hopeless.jpeg';
import propTypes from 'prop-types';
import { Col, Row } from "reactstrap";
import { Level } from "../../../models/Levels";

class UserSkill extends React.PureComponent {

  render() {
    const { level, size } = this.props;

    return (
      <Row>
        <Col>
          <img src={skillHopelessIcon} alt="Plant image" width={size} height={size} />
        </Col>
        <Col>
          <p>{level.title}</p>
          <p>{level.description}</p>
        </Col>
      </Row>
    );

  }
}

UserSkill.propTypes = {
  level: propTypes.instanceOf(Level).isRequired,
  size: propTypes.number.isRequired,
};

export default UserSkill;
