import type { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <li className="rounded-full border border-brand-blue/60 bg-brand-blue/10 px-3 py-1 text-xs font-normal text-brand-sky">
      {children}
    </li>
  );
};

export const TagList = ({ items }: { items: readonly string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
};

export default Tag;
