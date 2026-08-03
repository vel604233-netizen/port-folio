import skills from "../data/skills.js";
import SkillCard from "../components/SkillsCard.jsx";

import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section">

      <div className="skills-title">

        <h1>Technical Skills</h1>

        <p>

          Technologies and tools I use to build modern web applications.

        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill) => (

          <SkillCard
            key={skill.id}
            name={skill.name}
            level={skill.level}
            color={skill.color}
            icon={skill.icon}
          />

        ))}

      </div>

    </section>
  );
}

export default Skills;