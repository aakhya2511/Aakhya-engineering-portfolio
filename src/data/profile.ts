import type { LinkConfig } from "@/types/content";

export const profileLinks: LinkConfig = {
  github: null,
  linkedin: null,
  email: null,
  resume: null,
};

export const metrics = [
  { value: "50+", label: "Enterprise analytics workloads migrated" },
  { value: "20+", label: "Stored procedures converted" },
  { value: "500M+", label: "Records processed / validated" },
  { value: "3.9 / 4.0", label: "Graduate GPA" },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "C++", "Java"] },
  { title: "Backend & Systems", items: ["Distributed systems", "Caching", "System design", "Concurrency"] },
  { title: "Data", items: ["BigQuery", "PostgreSQL", "DB2", "pandas", "Apache Iceberg"] },
  { title: "Cloud & Infrastructure", items: ["GCP", "GCS", "Dataflow", "Airflow", "Azure DevOps"] },
  { title: "AI / ML", items: ["PyTorch", "Hugging Face", "LLMs", "RAG", "Embeddings", "FAISS", "Model evaluation"] },
];

export const education = [
  {
    school: "Southern Methodist University",
    location: "Dallas, Texas",
    degree: "Master of Science in Computer Science",
    dates: "August 2024 — May 2026",
    gpa: "3.9 / 4.0",
    coursework: ["Machine Learning", "Neural Networks", "Algorithm Engineering", "Artificial Intelligence / Search", "Databases", "Software Architecture", "Computer Networks"],
  },
  {
    school: "IMS Engineering College",
    location: "Uttar Pradesh, India",
    degree: "Bachelor of Science in Computer Science",
    dates: "August 2019 — June 2023",
    gpa: "8.03 / 10.0",
    coursework: [],
  },
];
