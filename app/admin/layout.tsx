import { ReactNode } from 'react';
import type { Metadata } from 'next';
import AdminMenu from './_components/AdminMenu';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
};

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <main className="flex w-full justify-around">
      <div className="w-[12%]">
        <AdminMenu />
      </div>
      <div className="w-[88%]">{children}</div>
    </main>
  );
};

export default AdminLayout;
