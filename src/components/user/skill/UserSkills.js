import React from 'react';
import UserSkill from "./UserSkill";
import skillLevels from "../../../models/SkillLevels";

class UserSkills extends React.PureComponent {

  render() {
    const iconSize = 128;

    console.log(skillLevels);

    return (
      <div>
        {
          skillLevels.map((level) => <UserSkill key={level.id} size={iconSize} level={level} />)
        }
      </div>
    );

  }
}

export default UserSkills;
