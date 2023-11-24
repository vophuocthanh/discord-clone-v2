import { getOrgs } from '@/apis/orgs';
import OrgSidebar from '@/components/OrgSidebar';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (window.location.pathname === '/') {
      navigate('/orgs/1');
    }
  }, [navigate]);
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { data } = useQuery(['orgs'], () => getOrgs());
  return (
    <div className='flex w-full h-screen bg-background'>
      <OrgSidebar orgs={data?.data ?? []}></OrgSidebar>
      <Outlet></Outlet>
      <div className=''></div>
    </div>
  );
}
