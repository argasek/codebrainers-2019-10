import React from 'react';
import UserSkill from "./UserSkill";

class UserSkills extends React.PureComponent {

  render() {
    const { skillLevels, onUserSkillClick } = this.props;
    const iconSize = 80;

    return (
      <div className="user-skills-container">
        {
          skillLevels.map((level, index) =>
            <UserSkill
              key={index}
              index={index + 1}
              size={iconSize}
              level={level}
              onUserSkillClick={onUserSkillClick}
            />
          )
        }
      </div>
    );

  }
}

export default UserSkills;
