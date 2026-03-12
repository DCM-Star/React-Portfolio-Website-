import { useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string;
  demo?: string;
  github?: string;
  preview: string;
  gif?: string;
}

const projects: Project[] = [
  {
    title: "Workflow Automation Builder",
    description:
      "A full-stack automation platform where users can visually design workflows using a drag-and-drop node editor and persist them through a REST API.",
    tech: "React, React Flow, JavaScript, Python/Flask, REST APIs",
    demo: "https://workflow-automation-builder-lake.vercel.app/",
    github: "https://github.com/DCM-Star/Workflow-Automation-Builder",
    preview: "/workflow-preview.png",
    gif: "/WorkFlow.gif",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built to showcase projects that you are currently using.",
    tech: "React, Tailwind, TypeScript",
    demo: "https://dcm-star-portfolio.vercel.app",
    github: "https://github.com/DCM-Star/React-Portfolio-Website-",
    preview: "/portfolio-preview.png",
    gif: "/portfolio.gif",
  },
  {
    title: "Future project in the works!",
    description: "Coming Soon!",
    tech: "Coming Soon!",
    demo: "#",
    github: "https://github.com/DCM-Star",
    preview: "/comingsoon.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const imageSrc = hovered && project.gif ? project.gif : project.preview;

  return (
    <div
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageSrc}
        alt={project.title}
        className="w-full h-64 object-contain bg-slate-900"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>

        <p className="text-gray-300 mb-3">{project.description}</p>

        <p className="text-green-400 font-mono mb-4">{project.tech}</p>

        <div className="flex gap-4">

          {/* Live Demo Button */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              View Demo
            </a>
          )}

          {/* GitHub Button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen p-8 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}