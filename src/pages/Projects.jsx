import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";


import "../styles/Projects.css";

function Projects() {

  return (
    <section className="projects-section">

      <div className="projects-title">

        <h1>My Projects</h1>

        <p>
          Academic and personal projects developed while learning modern web technologies.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            
          />

        ))}

      </div>

    </section>
  );
}

export default Projects;