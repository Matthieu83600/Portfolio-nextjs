'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next-nprogress-bar';
import { signInAdmin } from '@/services/auth.services';

import { Button } from '@/components/ui/button';
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
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, LogIn } from 'lucide-react';



const LoginFormSchema = z.object({
  email: z.string().email('Adresse email invalide.'),
  password: z.string().min(8, 'Mot de passe invalide (8 caractères minimum).'),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });
  const handleLoginSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      await signInAdmin(values);
      router.push('admin/dashboard');
    } catch (error: unknown) {
      console.error(error);
      toast.error('Identifiants de connexion invalides');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLoginSubmit)}
        className="flex h-screen w-screen items-center justify-center"
      >
        <Card>
          <CardHeader>
            <CardTitle>Login :</CardTitle>
            <CardDescription>Accès au dashboard administrateur</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormDescription>Votre adresse email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input placeholder="*********" {...field} type="password" />
                  </FormControl>
                  <FormDescription>Votre mot de passe.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-center">
            <Button className="gap-2" disabled={isLoading}>
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <LogIn size={16} />
              )}
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default LoginPage;
