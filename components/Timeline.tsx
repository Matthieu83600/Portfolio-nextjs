'use client';
import { useRef } from 'react';

const handleExternalLinkClick = (url: string | URL | undefined) => {
  window.open(url, '_blank');
};

const TimeLineData = [
  {
    year: 2024,
    text: 'Préparateur de commandes chez Floral Concept',
  },
  {
    year: 2024,
    text: (
      <>
        Intégration du projet communautaire{' '}
        <span
          onClick={() => handleExternalLinkClick('https://eternaltwin.org/')}
          className="cursor-pointer text-blue-700 underline hover:text-blue-500 dark:text-blue-300"
        >
          Eternal-Twin
        </span>
      </>
    ),
  },
  {
    year: 2024,
    text: 'Obtention de ma certification professionnelle avec OpenClassrooms',
  },
  {
    year: 2023,
    text: 'Formation développeur intégrateur web avec OpenClassrooms',
  },
  { year: 2019, text: 'Vendeur confirmé multimédia TV chez Darty' },
  { year: 2014, text: 'Vendeur / Acheteur chez Cash Express' },
];

const TimeLine = () => {
  const carouselRef = useRef(null);

  return (
    <ul
      ref={carouselRef}
      className="hide-scroll-bar flex cursor-pointer snap-x flex-row flex-nowrap justify-between gap-5 overflow-x-auto py-5"
    >
      <>
        {TimeLineData.map((item, index) => {
          return (
            <li
              id={`carousel__item-${index}`}
              key={index}
              className="flex w-[calc((100%/2)-30px)] snap-start flex-col gap-3 hover:cursor-default sm:w-1/3 md:w-1/6"
            >
              <h3
                aria-label={"Ce que j'ai fait en " + item.year}
                className="flex items-center gap-4 text-2xl font-bold"
              >
                {`${item.year}`}
                <hr className="w-[58%] border-2 border-blue-700 dark:border-slate-50" />
              </h3>
              <p className="tracking-wide">{item.text}</p>
            </li>
          );
        })}
      </>
    </ul>
  );
};

export default TimeLine;
