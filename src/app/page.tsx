import { AboutMetrics } from "@/components/sections/AboutMetrics";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSkills } from "@/components/sections/EducationSkills";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return <><Hero /><AboutMetrics /><ExperienceSection /><ProjectsSection /><EducationSkills /><ContactSection /></>;
}
