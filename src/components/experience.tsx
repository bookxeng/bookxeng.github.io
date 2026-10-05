import { experiences } from "@/data/portfolio";
import Section from "./section";
import { TagList } from "./tag";

const Experience = () => {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-12 border-l border-white/10 pl-8">
        {experiences.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cream" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-semibold text-gray-50">
                {job.role} <span className="text-brand-sky">@ {job.company}</span>
              </h3>
              <p className="shrink-0 text-sm text-gray-500">{job.period}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{job.location}</p>
            <ul className="mt-4 space-y-3 leading-relaxed">
              {job.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-brand-sky">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <TagList items={job.tech} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
