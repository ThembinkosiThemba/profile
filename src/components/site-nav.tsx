"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Section = {
  id: string
  label: string
}

const sections: Section[] = [
  { id: "featured", label: "what's new" },
  { id: "reflections", label: "reflections" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "resources", label: "resources" },
  { id: "links", label: "links" },
]

export function SiteNav() {
  const [activeSection, setActiveSection] = useState<string>("featured")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Adjusted for better triggering
        threshold: 0.1,
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-24">
      <nav className="rounded-lg border border-border/40 bg-card/30 p-4">
        <p className="mb-4 text-xs font-medium uppercase text-muted-foreground">
          On this page
        </p>
        <ul className="space-y-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id

            return (
              <li key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  className={`block text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
