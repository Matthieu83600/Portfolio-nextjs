import { ReactNode } from 'react';
import type { Metadata } from 'next';
import AdminMenu from './_components/AdminMenu';

export const metadata: Metadata = {
  title: 'Admin Dashboard'
};

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main className="flex w-screen h-screen">
      <div className='w-1/5'>
        <AdminMenu />
      </div>
      <div className='w-4/5'>{children}</div>
    </main>
  );
};

export default AdminLayout;
