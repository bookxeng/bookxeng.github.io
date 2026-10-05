import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import { programmingLanguages, skillGroups } from "@/data/portfolio";
import Section from "./section";
import { TagList } from "./tag";

const languageIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
};

const Skills = () => {
  return (
    <Section id="skills" index="04" title="Skills">
      <h3 className="mb-6 font-semibold text-gray-50">Programming Languages</h3>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {programmingLanguages.map((lang) => {
          const Icon = languageIcons[lang];
          return (
            <li
              key={lang}
              className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-surface py-6 duration-300 hover:border-brand-blue/60"
            >
              {Icon && <Icon size={36} className="text-brand-sky" />}
              <span className="font-medium text-gray-50">{lang}</span>
            </li>
          );
        })}
      </ul>

      <h3 className="mb-6 mt-14 font-semibold text-gray-50">Technical Skills</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-lg border border-white/10 bg-surface p-6">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {group.category}
            </h4>
            <TagList items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
