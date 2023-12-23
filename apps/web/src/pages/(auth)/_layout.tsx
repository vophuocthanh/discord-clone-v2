import { getOrgs } from '@/apis/orgs';
import OrgSidebar from '@/components/OrgSidebar';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import { SkeletonOrg } from './channels/[orgID]/_components/skeleton/SkeletonOrg';

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (window.location.pathname === '/') {
      navigate('/channels/1');
    }
  }, [navigate]);
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { data: org } = useQuery(['orgs'], () => getOrgs());

  return (
    <div className='flex w-full h-full overflow-y-scroll bg-background'>
      {!org ? (
        <div className='p-3 space-y-4'>
          <SkeletonOrg />
          <SkeletonOrg />
          <SkeletonOrg />
          <SkeletonOrg />
        </div>
      ) : (
        <OrgSidebar orgs={org ?? []}></OrgSidebar>
      )}
      <Outlet></Outlet>
    </div>
  );
}
