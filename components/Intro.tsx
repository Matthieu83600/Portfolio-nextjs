import Link from 'next/link';

const IntroSection = () => {
  return (
    <section id="intro" className="flex flex-col px-4">
      <div className="flex flex-col items-center gap-4 py-5">
        <div className="py-5 md:py-10">
          <h1 className="text-3xl font-bold md:text-5xl xl:text-6xl">
            <p className="text-center leading-[140%]">
              Salut, je suis Matthieu un développeur front-end junior passionné.
            </p>
          </h1>
          <p className="mb-10 mt-3 text-xl text-gray-500">
            Je vous laisse découvrir mon portfolio.
          </p>
          <div className="flex flex-col gap-10 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-md bg-blue-700 p-2 text-slate-50"
              aria-label="Derniers projets"
            >
              Voir mes derniers projets
            </Link>
            <Link
              href="https://cvdesignr.com/p/65770bab74d9f"
              target="_blank"
              className="rounded-md bg-blue-700 p-2 text-slate-50"
              aria-label="Mon CV"
            >
              Regarder mon CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
