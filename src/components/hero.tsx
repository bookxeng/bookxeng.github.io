import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="h-screen min-h-[600px] w-full">
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center space-y-5 px-6 sm:px-12">
        <p className="font-semibold text-brand-sky">Hi, my name is</p>
        <h1 className="text-gradient text-4xl font-extrabold leading-tight sm:text-6xl sm:leading-tight">
          {profile.name}
        </h1>
        <p className="text-2xl font-semibold text-gray-400 sm:text-4xl">{profile.title}</p>
        <p className="max-w-[600px] leading-relaxed text-gray-400">{profile.tagline}</p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="rounded border border-brand-sky px-6 py-3 font-semibold text-brand-sky duration-300 hover:bg-brand-sky/10"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded bg-gradient-to-r from-brand-blue to-brand-sky px-6 py-3 font-semibold text-gray-50 duration-300 hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
