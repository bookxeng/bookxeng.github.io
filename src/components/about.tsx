import { HiAcademicCap } from "react-icons/hi";
import { education, profile } from "@/data/portfolio";
import Section from "./section";

const About = () => {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed md:col-span-3">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="pt-4">
            <h3 className="mb-3 font-semibold text-gray-50">Languages</h3>
            <ul className="space-y-1">
              {profile.spokenLanguages.map((lang) => (
                <li key={lang.name}>
                  <span className="text-brand-sky">▹</span> {lang.name}{" "}
                  <span className="text-gray-500">— {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-surface p-6 md:col-span-2">
          <div className="mb-4 flex items-center gap-3 text-gray-50">
            <HiAcademicCap size={28} className="shrink-0 text-brand-sky" />
            <h3 className="font-semibold">Education</h3>
          </div>
          <p className="font-medium text-gray-50">{education.school}</p>
          <p className="mt-1 text-sm text-gray-500">
            {education.period} · GPA {education.gpa}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {education.degrees.map((degree) => (
              <li key={degree}>
                <span className="text-brand-sky">▹</span> {degree}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 mb-2 text-sm font-semibold text-gray-50">Relevant Coursework</h4>
          <ul className="space-y-2 text-sm">
            {education.coursework.map((course) => (
              <li key={course.name}>
                <span className="text-gray-300">{course.name}</span>
                <span className="block text-xs text-gray-500">{course.topics}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
