'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';
import { updateTimelineItem } from '@/services/timeline.services';
import { TimelineItem } from '@/types/timeline.types';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const UpdateTimelineSchema = z.object({
  time: z.string().min(4, 'Indiquer une année.'),
  text: z.string().min(1, 'Le texte ne peut pas être vide.'),
});

type UpdateTimelineValues = z.infer<typeof UpdateTimelineSchema>;

const UpdateTimeline = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  console.log(params.id);

  const form = useForm<UpdateTimelineValues>({
    resolver: zodResolver(UpdateTimelineSchema),
    defaultValues: {
      time: '',
      text: '',
    },
  });

  const handleUpdateSubmit = async (values: UpdateTimelineValues) => {
    const updatePartialTimelineItem: TimelineItem = {
      time: parseInt(values.time),
      text: values.text,
    };
    try {
      setIsLoading(true);
      await updateTimelineItem(params.id ?? 0, updatePartialTimelineItem);
      toast.success('Élément mis à jour avec succès.');
      router.push('/admin/timeline');
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour de l'élément.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUpdateSubmit)}
        className="flex h-screen w-screen items-center justify-center"
      >
        <Card className="w-1/2">
          <CardHeader>
            <h2>Mise à jour de la timeline :</h2>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Année</FormLabel>
                  <FormControl>
                    <Input placeholder="Année" type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Texte</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez le texte"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Chargement...' : 'Mettre à jour'}
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default UpdateTimeline;
