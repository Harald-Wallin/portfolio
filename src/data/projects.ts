import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "rok",
    title: "RöK",
    shortDescription:
      "Ett modulärt 2D-RPG med fokus på återanvändbara system och skalbar arkitektur.",

    technologies: ["Unity", "C#"],

    image: "",

    type: "case-study",
    featured: true,
  },

  {
    id: "project-placeholder-1",
    title: "Projekt kommer",
    shortDescription:
      "Här kommer ett av mina utvalda fullstack-projekt att presenteras.",

    technologies: ["React", "TypeScript"],

    image: "",

    type: "live",
    featured: true,
  },

  {
    id: "project-placeholder-2",
    title: "Projekt kommer",
    shortDescription:
      "Ytterligare ett utvalt projekt kommer att presenteras här.",

    technologies: ["C#", ".NET"],

    image: "",

    type: "demo",
    featured: true,
  },
];