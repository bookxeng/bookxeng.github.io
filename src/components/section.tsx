import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, index, title, children }: SectionProps) => {
  return (
    <section id={id} className="w-full scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-12">
        <h2 className="mb-12 flex items-center gap-4 text-3xl font-bold text-gray-50 sm:text-4xl">
          <span className="text-lg font-normal text-brand-sky">{index}.</span>
          {title}
          <span className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent" />
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
