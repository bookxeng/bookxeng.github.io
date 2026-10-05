import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "@/data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="w-full scroll-mt-20 py-24">
      <div className="mx-auto flex max-w-[600px] flex-col items-center px-6 text-center">
        <p className="text-brand-sky">05. What&apos;s next?</p>
        <h2 className="text-gradient mt-4 text-4xl font-extrabold sm:text-5xl">Get In Touch</h2>
        <p className="mt-6 leading-relaxed text-gray-400">
          I&apos;m open to software engineering and machine learning opportunities. Whether you have
          a role, a project, or just want to say hi, my inbox is open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 rounded border border-brand-sky px-8 py-4 font-semibold text-brand-sky duration-300 hover:bg-brand-sky/10"
        >
          Say Hello
        </a>

        <ul className="mt-16 flex gap-8 text-gray-400">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-sky">
              <FaGithub size={26} />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-sky">
              <FaLinkedin size={26} />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-brand-sky">
              <MdEmail size={26} />
            </a>
          </li>
        </ul>
        <p className="mt-8 text-xs text-gray-600">
          Built with Next.js, TypeScript &amp; Tailwind CSS · {profile.handle}
        </p>
      </div>
    </section>
  );
};

export default Contact;
