export type ProjectType = "live" | "demo" | "case-study";

export interface Project {
  id: string;

  title: string;
  shortDescription: string;
  description?: string;

  technologies: string[];

  image: string;
  video?: string;

  type: ProjectType;
  featured: boolean;

  liveUrl?: string;
  githubUrl?: string;
}