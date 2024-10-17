'use client';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { logOutAdmin } from '@/services/auth.services';
import { toast } from 'sonner';
import { GrLogin } from 'react-icons/gr';

const AdminMenu = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOutAdmin();
      toast.success('Vous êtes déconnecté avec succès');
      router.push('/');
    } catch (error) {
      toast.error('Erreur lors de la déconnexion');
      console.error(error);
    }
  };
  return (
    <div className="h-screen border-2 p-4">
      <nav className="flex">
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/admin/technologies">Technologies</Link>
          </li>
          <li>
            <Link href="/admin/projets">Projets</Link>
          </li>
          <li
            className="inline-flex cursor-pointer items-center gap-1"
            onClick={handleLogout}
          >
            <GrLogin size={20} />
            Se déconnecter
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminMenu;
