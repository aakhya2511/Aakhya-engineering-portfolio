import type { DiagramKind } from "@/components/diagrams/ArchitectureDiagram";

export type LinkConfig = {
  github: string | null;
  linkedin: string | null;
  email: string | null;
  resume: string | null;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  problem?: string;
  built: string[];
  decisions: string[];
  validation: string[];
  evidence: Array<{ value: string; label: string }>;
  technologies: string[];
  focus: string[];
  diagram: DiagramKind;
  github: string | null;
  featured: boolean;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  summary: string;
  technologies: string[];
};
