import type { LinkConfig } from "@/types/content";

export const profileLinks: LinkConfig = {
  github: "https://github.com/aakhya2511",
  linkedin: "https://www.linkedin.com/in/aakhya-chaudhary",
  email: "mailto:aakhyac@smu.edu",
  phone: "tel:+19453355666",
};

export const metrics = [
  { value: "60+", label: "Enterprise analytics workloads migrated" },
  { value: "40+", label: "Stored procedures converted" },
  { value: "500M+", label: "Records processed / validated" },
  { value: "30K+", label: "Research records analyzed" },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "C++", "Java"] },
  { title: "Backend & Systems", items: ["Distributed systems", "Caching", "Concurrency", "API / backend design"] },
  { title: "Data", items: ["BigQuery", "PostgreSQL", "DB2", "pandas", "Apache Iceberg"] },
  { title: "Cloud & Infrastructure", items: ["GCP", "Airflow", "Azure DevOps", "AWS"] },
  { title: "AI / ML", items: ["PyTorch", "Hugging Face", "LLMs", "RAG", "Embeddings", "FAISS", "Model evaluation"] },
];

export const education = [
  {
    school: "Southern Methodist University",
    location: "Dallas, Texas",
    degree: "Master of Science in Computer Science",
    dates: "August 2024 — May 2026",
    gpa: "3.9 / 4.0",
    coursework: ["Machine Learning", "Neural Networks", "Algorithm Engineering", "Data Mining", "C++", "Artificial Intelligence / Search", "Databases", "Software Architecture", "Computer Networks"],
    research: "Analyzed and structured 30K+ records using Python, pandas, and SQL with emphasis on validation and reproducibility.",
  },
  {
    school: "IMS Engineering College",
    location: "Uttar Pradesh, India",
    degree: "Bachelor of Science in Computer Science",
    dates: "August 2019 — June 2023",
    gpa: "8.03 / 10.0",
    coursework: [],
    research: null,
  },
];
