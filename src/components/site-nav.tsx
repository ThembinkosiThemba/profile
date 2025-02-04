"use client"

import { useEffect, useState } from "react"

type Section = {
  id: string
  label: string
}

const sections: Section[] = [
  { id: "achievements", label: "achievements" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "blog", label: "blogs" },
  { id: "links", label: "links" },
]

export function SiteNav() {
  const [activeSection, setActiveSection] = useState<string>("achievements")

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
        rootMargin: "-50% 0px -50% 0px", // Triggers when section is in middle of viewport
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block">
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center group">
            <a
              href={`#${section.id}`}
              className={`relative text-sm transition-colors duration-200 group-hover:text-accent ${
                activeSection === section.id ? "text-accent" : "text-gray-500"
              }`}
            >
              {section.label}
            </a>
            <div className="ml-2 w-8">
              <div
                className={`h-[2px] bg-gray-800 transform origin-left transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-accent w-full"
                    : "w-4 group-hover:bg-accent"
                }`}
              />
            </div>
          </div>
        ))}
        <div className="absolute top-0 bottom-0 right-[34px] w-[2px] bg-gray-800" />
      </div>
    </nav>
  )
}
