import { useEffect, useState } from "react";

function SkillCard({ name, level, color, icon: Icon }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level);
    }, 300);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="skill-card">

      <div className="skill-top">

        <div className="skill-icon">

          <Icon />

        </div>

        <div>

          <h3>{name}</h3>

          <span>{progress}%</span>

        </div>

      </div>

      <div className="progress">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: color,
          }}
        ></div>

      </div>

    </div>
  );
}

export default SkillCard;