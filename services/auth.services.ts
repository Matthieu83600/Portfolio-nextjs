import supabase from '@/lib/supabaseClient';

export const signInAdmin = async ({ email, password }: { email: string, password: string }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};
