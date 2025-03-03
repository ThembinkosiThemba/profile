import type { ReactNode } from "react"

interface SectionContainerProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
  viewAllHref?: string
  viewAllText?: string
}

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function SectionContainer({
  id,
  title,
  children,
  className = "",
  viewAllHref,
  viewAllText,
}: SectionContainerProps) {
  return (
    <section id={id} className={`scroll-mt-16 ${className}`}>
      {title && (
        <h2 className="mb-6 text-xl font-medium text-foreground/90 md:text-2xl">
          <span className="text-primary mr-2">*</span> {title}
        </h2>
      )}

      {children}

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="mt-8 inline-flex items-center gap-1 text-sm text-primary hover:underline group"
        >
          {viewAllText}{" "}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </section>
  )
}

