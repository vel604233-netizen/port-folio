import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}) {
  return (
    <div className="project-card">

      <div className="project-image">

        <img
          src={image}
          alt={title}
        />

      </div>

      <div className="project-body">

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-tech">

          {technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-tag"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="project-buttons">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="githubBtn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="demoBtn"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;