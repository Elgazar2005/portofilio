import React from 'react'
import { skills } from "../../data/skills";

function Skills() {
  return (
    <div>
      {skills.frontend.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
}

export default Skills;