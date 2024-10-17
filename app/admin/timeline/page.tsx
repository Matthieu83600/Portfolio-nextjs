'use client';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fetchTimeline } from '@/services/timeline.services';
import { TimelineItem } from '@/types/timeline.types';
import { Loader2 } from 'lucide-react';
import { Trash, PenTool } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

const TimelineAdmin = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="flex w-full flex-col items-center gap-6">
      <h2 className="text-4xl underline">Ma timeline :</h2>
      <div>
        {isLoading ? (
          <Loader2 size={32} className="animate-spin text-center" />
        ) : (
          <div className="flex flex-wrap gap-3">
            {timelineData.map((item) => {
              return (
                <Card key={item.id} className="mx-auto w-2/3">
                  <CardHeader>{item.time}</CardHeader>
                  <CardContent>{item.text}</CardContent>
                  <CardFooter className="mr-2 flex justify-end gap-2">
                    <PenTool size={24} className="cursor-pointer" />
                    <Trash size={24} className="cursor-pointer" />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <Button>
          <Link href="/admin/timeline/create">Créer une nouvelle timeline</Link>
        </Button>
      </div>
    </div>
  );
};
export default TimelineAdmin;
