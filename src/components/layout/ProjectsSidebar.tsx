import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsSidebar() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <aside className="projects-sidebar">
      <h2 className="projects-sidebar-title">
        Utvalda projekt
      </h2>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <button
        className="view-all-projects"
        type="button"
      >
        Se alla projekt
        <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}