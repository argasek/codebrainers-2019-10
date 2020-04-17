import React from 'react';
import propTypes from 'prop-types';
import { Level, Levels } from "../../../models/Levels";
import skillBeginnerIcon from '../../../images/skill-beginner.jpg';
import skillExperiencedIcon from '../../../images/skill-experienced.jpg';
import skillHopelessIcon from '../../../images/skill-hopeless.jpg';
import skillMasterIcon from '../../../images/skill-master.jpg';
import skillSkilledIcon from '../../../images/skill-skilled.jpg';

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
      case Levels.EXPERIENCED:
        levelIcon = skillExperiencedIcon;
        break;
      case Levels.SKILLED:
        levelIcon = skillSkilledIcon;
        break;
      case Levels.MASTER:
        levelIcon = skillMasterIcon;
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
    levelIcons[Levels.EXPERIENCED] = skillExperiencedIcon;
    levelIcons[Levels.HOPELESS] = skillHopelessIcon;
    levelIcons[Levels.MASTER] = skillMasterIcon;
    levelIcons[Levels.SKILLED] = skillSkilledIcon;

    let levelIcon = levelIcons[level.id];

    levelIcon = levelIcon || skillHopelessIcon;

    return levelIcon;
  }


  render() {
    const { level, size, index, onUserSkillClick} = this.props;

    return (
      <div className="user-skill-level d-flex" onClick={(event) => onUserSkillClick(event)}>
        <div className="p-3 flex-1">
          <img
            src={this.levelIconOtherImplementation(level)}
            alt="Plant image"
            width={size}
            height={size}
          />
        </div>
        <div className="pt-4 pb-4 pr-3">
          <h6 className="font-weight-bold">{index}. {level.title}</h6>
          <p className="mb-0">{level.description}</p>
        </div>
      </div>
    );

  }
}

UserSkill.propTypes = {
  level: propTypes.instanceOf(Level).isRequired,
  size: propTypes.number.isRequired,
};

export default UserSkill;
