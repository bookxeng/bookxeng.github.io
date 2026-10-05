import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects, type Project } from "@/data/portfolio";
import Section from "./section";
import { TagList } from "./tag";

const ProjectLinks = ({ links }: { links: Project["links"] }) => {
  if (!links?.length) return null;
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 duration-300 hover:text-brand-sky"
        >
          {link.label === "GitHub" ? <FaGithub size={22} /> : <FiExternalLink size={22} />}
        </a>
      ))}
    </div>
  );
};

const FeaturedProject = ({ project }: { project: Project }) => {
  return (
    <article className="rounded-lg border border-brand-blue/40 bg-gradient-to-br from-brand-blue/15 via-surface to-surface p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-brand-sky">Featured Project · {project.year}</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-50">{project.title}</h3>
        </div>
        <ProjectLinks links={project.links} />
      </div>
      <p className="mt-4 leading-relaxed text-gray-400">{project.summary}</p>

      {project.stats && (
        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded border border-white/10 bg-black/40 p-4 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-gradient text-2xl font-bold">{stat.value}</dd>
              <dd className="mt-1 text-xs text-gray-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-6 space-y-3 leading-relaxed">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="text-brand-sky">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <TagList items={project.tech} />
      </div>
    </article>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="flex flex-col rounded-lg border border-white/10 bg-surface p-6 duration-300 hover:-translate-y-1 hover:border-brand-blue/60">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-brand-sky">{project.year}</p>
        <ProjectLinks links={project.links} />
      </div>
      <h3 className="mt-2 text-xl font-semibold text-gray-50">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.summary}</p>
      <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="text-brand-sky">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <TagList items={project.tech} />
      </div>
    </article>
  );
};

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Projects">
      <div className="space-y-8">
        {featured.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
        <div className="grid gap-8 md:grid-cols-2">
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
