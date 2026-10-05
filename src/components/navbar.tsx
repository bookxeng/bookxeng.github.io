"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full border-b border-white/5 bg-black/80 backdrop-blur">
      <nav className="flex h-[80px] items-center justify-between px-6 text-gray-300">
        <a href="#home" className="text-gradient-hover whitespace-nowrap font-semibold">
          {profile.shortName}
        </a>

        <ul className="hidden space-x-8 font-semibold lg:flex">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-gradient-hover">
                <span className="mr-1 font-normal text-brand-sky">0{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-gray-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col items-center gap-8 border-t border-white/5 bg-black py-10 text-xl font-semibold lg:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="text-gradient-hover">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
