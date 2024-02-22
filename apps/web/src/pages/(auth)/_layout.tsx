import { getOrgs } from '@/apis/orgs';
import OrgSidebar from '@/pages/(auth)/_components/OrgSidebar';
import { getToken } from '@/lib/storage';
import { redirect } from '@/router';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect('/login');
  }
  return null;
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { data: orgs } = useQuery({
    queryKey: ['orgs'],
    queryFn: () => getOrgs(),
  });

  return (
    <div className='flex w-full h-screen bg-background text-primary-foreground'>
      <OrgSidebar orgs={orgs ?? []} />
      <Outlet />
    </div>
  );
}
