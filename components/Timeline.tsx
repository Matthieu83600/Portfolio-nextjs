'use client';
import { useState, useEffect, useRef } from 'react';
import { fetchTimeline } from '@/services/timeline.services';
import { TimelineItem } from '@/types/timeline.types';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const TimeLine = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const loadTimeline = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTimeline();
        setTimelineData(data);
      } catch (error) {
        console.error(error);
        toast.error('Erreur lors de la récupération des données');
      } finally {
        setIsLoading(false);
      }
    };

    loadTimeline();
  }, []);

  return (
    <ul
      ref={carouselRef}
      className="flex cursor-pointer snap-x flex-row flex-nowrap items-start justify-center gap-5 overflow-x-auto py-5"
    >
      {isLoading ? (
        <Loader2 size={32} className="animate-spin text-center" />
      ) : (
        <>
          {timelineData.map((item) => {
            return (
              <li
                id={`carousel__item-${item.id}`}
                key={item.id}
                className="flex w-[calc((100%/2)-30px)] snap-start flex-col gap-3 hover:cursor-default sm:w-1/3 md:w-1/6"
              >
                <h3
                  aria-label={"Ce que j'ai fait en " + item.time}
                  className="flex items-center gap-4 text-2xl font-bold"
                >
                  {`${item.time}`}
                  <hr className="w-[58%] border-2 border-blue-700 dark:border-slate-50" />
                </h3>
                <p className="tracking-wide">{item.text}</p>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default TimeLine;
