import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`Förhandsvisning av ${project.title}`}
          />
        ) : (
          <span>Bild kommer</span>
        )}
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p className="project-card-description">
          {project.shortDescription}
        </p>

        <div
          className="project-card-technologies"
          aria-label="Tekniker"
        >
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <button
          className="project-card-action"
          type="button"
          aria-label={`Visa mer om ${project.title}`}
        >
          Visa projekt
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}