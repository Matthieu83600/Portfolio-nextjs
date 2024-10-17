'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';
import {
  fetchTimeline,
  deleteTimelineItem,
} from '@/services/timeline.services';
import { TimelineItem } from '@/types/timeline.types';

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Trash, PenTool } from 'lucide-react';

const TimelineAdmin = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

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

  const handleEditClick = (id: number | undefined) => {
    if (id !== undefined) {
      router.push(`/admin/timeline/${id}/edit`);
    } else {
      console.error("L'ID de la timeline est indéfini");
      toast.error("Impossible d'accéder à la page d'édition");
    }
  };

  const handleDeleteClick = async (id: number | undefined) => {
    const confirmDelete = confirm(
      'Êtes-vous sûr de vouloir supprimer cet élément ?'
    );
    if (!confirmDelete) return;
    try {
      setIsDeleting(true);
      await deleteTimelineItem(id ?? 0);
      setTimelineData(timelineData.filter((item) => item.id !== id));
      toast.success('Élément supprimé avec succès !');
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression de l'élément");
    } finally {
      setIsDeleting(false);
    }
  };

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
                    <Button
                      onClick={() => handleEditClick(item.id)}
                      className="cursor-pointer"
                    >
                      <PenTool size={24} />
                    </Button>
                    <Button
                      className="cursor-pointer"
                      disabled={isDeleting}
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      <Trash size={24} />
                    </Button>
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
