import type { DiagramKind } from "@/components/diagrams/ArchitectureDiagram";

export type LinkConfig = {
  github: string | null;
  linkedin: string | null;
  email: string | null;
  phone: string | null;
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
  detailEvidence?: Array<{ value: string; label: string }>;
  evidenceNote?: string;
  technologies: string[];
  focus: string[];
  diagram: DiagramKind;
  githubUrl: string | null;
  featured: boolean;
  section: "featured" | "more" | "additional";
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  summary: string;
  areas?: Array<{ title: string; text: string }>;
  impact?: Array<{ value: string; label: string }>;
  technologies: string[];
};
