import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    company: "Tenet Healthcare / Conifer Health Solutions",
    role: "Data & Analytics Intern",
    location: "Dallas, Texas",
    dates: "June 2025 — May 2026",
    summary: "Modernized healthcare analytics workflows across DB2, BigQuery, and GCP, with hands-on ownership of migrations, pipelines, reconciliation, and production support.",
    technologies: ["Python", "SQL", "BigQuery", "GCP", "GCS", "Dataflow", "Airflow", "DB2", "Azure DevOps"],
  },
  {
    company: "Southern Methodist University",
    role: "Research Assistant",
    location: "Dallas, Texas",
    dates: "August 2024 — May 2025",
    summary: "Worked with research datasets containing 30,000+ records, using Python, pandas, and SQL to clean, structure, validate, and analyze raw information for reporting and research.",
    areas: [
      {
        title: "Data preparation & analysis",
        text: "Cleaned raw datasets, standardized fields, handled inconsistencies, and transformed information into analysis-ready structures using Python, pandas, and SQL. Analyzed 30,000+ records to identify trends and prepare reliable datasets for downstream reporting.",
      },
      {
        title: "Validation & data quality",
        text: "Reviewed source data for missing, inconsistent, or unexpected values and applied validation logic before analysis. Used SQL and Python-based checks to improve confidence in the datasets used by the research team.",
      },
      {
        title: "Documentation & reproducibility",
        text: "Documented data sources, field definitions, assumptions, transformation logic, and validation rules so analyses could be reproduced and defended rather than existing as one-off results.",
      },
    ],
    impact: [
      { value: "30K+", label: "Records analyzed" },
      { value: "Python + SQL", label: "Data preparation and validation" },
      { value: "Reproducible", label: "Documented analysis workflow" },
    ],
    technologies: ["Python", "pandas", "SQL", "Data Cleaning", "Data Validation", "Data Analysis"],
  },
  {
    company: "Bhartiya Tech IT Solution",
    role: "Software Engineer Intern",
    location: "Noida, India",
    dates: "June 2022 — August 2022",
    summary: "Contributed to Java application development backed by SQL workflows, focusing on reusable backend components, application logic, testing, debugging, and issue resolution.",
    areas: [
      {
        title: "Backend application development",
        text: "Developed and modified Java application features using object-oriented programming principles and built reusable backend components.",
      },
      {
        title: "Database-backed workflows",
        text: "Worked with SQL-backed application flows, connecting application behavior with database operations and validating that data was processed correctly across the application.",
      },
      {
        title: "Testing & debugging",
        text: "Tested application features, investigated defects, traced issues through application logic and database interactions, and contributed to fixes and verification.",
      },
      {
        title: "Working with an existing codebase",
        text: "Worked within an existing application codebase, understood existing behavior, made targeted changes, and validated those changes before completion.",
      },
    ],
    technologies: ["Java", "SQL", "Object-Oriented Programming", "Backend Development", "Testing", "Debugging"],
  },
];
