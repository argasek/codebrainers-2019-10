import React from 'react';
import UserSkill from "./UserSkill";
import skillLevels from "../../../models/SkillLevels";

class UserSkills extends React.PureComponent {

  render() {
    const iconSize = 256;

    console.log(skillLevels);

    return (
      <div>
        { skillLevels.map((level) => <UserSkill size={48} level={level} />)}
      </div>
    );

  }
}

export default UserSkills;
