import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "@/data/portfolio";

const socials: { label: string; href: string; icon: ReactNode }[] = [
  { label: "GitHub", href: profile.github, icon: <FaGithub size={30} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <FaLinkedin size={30} /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <MdEmail size={30} /> },
];

const SocialRail = () => {
  return (
    <ul className="fixed right-0 top-[35%] z-10 hidden flex-col gap-2 lg:flex">
      {socials.map((s) => (
        <li
          key={s.label}
          className="mr-[-110px] flex h-[56px] w-[170px] items-center rounded-l-lg bg-brand-blue/80 px-4 text-gray-50 duration-500 hover:mr-0"
        >
          <a
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex w-full items-center gap-4 font-semibold"
          >
            {s.icon}
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialRail;
