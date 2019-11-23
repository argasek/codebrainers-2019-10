import React from 'react';
import propTypes from 'prop-types';
import { Col, Row } from "reactstrap";
import { Level, Levels } from "../../../models/Levels";
import skillHopelessIcon from '../../../images/skill-hopeless.jpeg';
import skillBeginnerIcon from '../../../images/skill-beginner.jpeg';

class UserSkill extends React.PureComponent {

  levelIconSwitchImplementation (level) {
    let levelIcon;

    switch(level.id) {
      case Levels.BEGINNER:
        levelIcon = skillBeginnerIcon;
        break;
      case Levels.HOPELESS:
        levelIcon = skillHopelessIcon;
        break;
      default:
        levelIcon = skillHopelessIcon;
        break;
    }

    return levelIcon;
  }

  levelIconOtherImplementation (level) {
    const levelIcons = {};
    levelIcons[Levels.BEGINNER] = skillBeginnerIcon;
    levelIcons[Levels.HOPELESS] = skillHopelessIcon;


    let levelIcon = levelIcons[level.id];

    levelIcon = levelIcon || skillHopelessIcon;

    return levelIcon;
  }


  render() {
    const { level, size, secondclickaction} = this.props;

    return (
      <Row className="user-skill-level">
        <Col className="p-4">
          <img src={this.levelIconOtherImplementation(level)} onClick={(event) => secondclickaction(event)} alt="Plant image" width={size} height={size} />
        </Col>
        <Col className="p-4">
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
