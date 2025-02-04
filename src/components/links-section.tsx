import Link from "next/link"

interface Props {
  title: string
}

const links = [
  { title: "email", href: "mailto:thembinkosimkhonta01@gmail.com" },
  { title: "x.com", href: "https://x.com/thembinkosi_rs" },
  { title: "github", href: "https://github.com/ThembinkosiThemba" },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/thembinkosi-mkhonta",
  },
]

export function LinksSection({ title }: Props) {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> {title}
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            target="_blank"
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
