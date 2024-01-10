import React from "react";

interface SkillProps {
  skillName: string;
}

const Skill  = ({ skillName }: SkillProps) => {
  return (
    <div className="text-xs font-semibold w-fit px-3 py-2 rounded-full text-text-skill bg-skill-bg mr-1 my-2">
      {skillName}
    </div>
  );
};

export default Skill;
