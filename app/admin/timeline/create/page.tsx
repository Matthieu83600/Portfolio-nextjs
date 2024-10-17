'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';
import { createTimelineItem } from '@/services/timeline.services';
import { TimelineItem } from '@/types/timeline.types';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const CreateTimelineSchema = z.object({
  time: z
    .string()
    .min(4, "L'année doit contenir au moins 4 chiffres.")
    .regex(/^\d+$/, "L'année doit être un nombre valide."),
  text: z.string().min(1, 'Le texte est obligatoire.'),
});

type CreateTimelineFormValues = z.infer<typeof CreateTimelineSchema>;

const CreateTimeline = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<CreateTimelineFormValues>({
    resolver: zodResolver(CreateTimelineSchema),
    defaultValues: {
      time: '',
      text: '',
    },
  });

  const handleCreateSubmit = async (values: CreateTimelineFormValues) => {
    try {
      setIsLoading(true);
      const newTimelineItem: TimelineItem = {
        time: parseInt(values.time),
        text: values.text,
      };
      await createTimelineItem(newTimelineItem);
      toast.success('Nouvel élément ajouté avec succès !');
      router.push('/admin/timeline'); // Redirige vers la page d'admin
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la création de la timeline.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateSubmit)}
        className="flex h-screen w-screen items-center justify-center"
      >
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Créer une nouvelle timeline</CardTitle>
            <CardDescription>
              Ajoutez une nouvelle entrée à la timeline.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Champ de saisie pour l'année */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Année</FormLabel>
                  <FormControl>
                    <Input placeholder="2024" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Champ de saisie pour le texte */}
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
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
          </CardContent>
          <CardFooter className="justify-center">
            <Button className="gap-2" disabled={isLoading} type="submit">
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                'Créer'
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default CreateTimeline;
