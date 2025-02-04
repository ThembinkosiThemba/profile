import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Zen",
    description:
      "A lightweight and fast HTTP framework for Go, focusing on simplicity, performance, and enterprise-grade features.",
    role: "creator and maintainer",
    period: "active development",
    achievements: [
      "Developed a security-first HTTP framework for Go",
      "Implemented middleware for authentication, rate limiting, and CORS support",
      "Designed an efficient request handling system with JSON parsing and response management",
    ],
    technologies: ["golang"],
    href: "https://github.com/ThembinkosiThemba/zen",
  },
  {
    title: "Genesis",
    description:
      "A powerful and flexible project starter tool for Go and Rust and React developers, streamlining project setup.",
    role: "creator and maintainer",
    period: "active development",
    achievements: [
      "Built an interactive CLI for quick project initialization",
      "Enabled automatic dependency management for Go and Rust",
      "Made it cross-platform for Windows, macOS, and Linux",
    ],
    technologies: ["golang", "rust", "typescript", "axios"],
    href: "https://github.com/ThembinkosiThemba/genesis",
  },
  {
    title: "Batcave Terminal",
    description:
      "A Rust-based terminal emulator with a Batman-themed experience and essential shell management features.",
    role: "creator and maintainer",
    period: "active development",
    achievements: [
      "Developed a unique terminal emulator with advanced shell management",
      "Implemented customizable configurations through .batcaverc",
      "Added system information display and command logging capabilities",
    ],
    technologies: ["rust", "bash", "sh", "clap"],
    href: "https://github.com/ThembinkosiThemba/batcave",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on and are open sourced
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://thembinkosi.vercel.app/og/home?title=projects",
      },
    ],
  },
}
