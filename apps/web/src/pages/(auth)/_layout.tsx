import OrgSidebar from '@/components/OrgSidebar';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ORGS = [
  {
    id: '1',
    icon: 'https://enouvo.com/wp-content/uploads/2022/07/cropped-logo-vien-trang-file-in-01.png',
    name: 'Enouvo',
  },
  {
    id: '2',
    icon: 'https://static.ybox.vn/2022/11/3/1667994393514-uyen182xp9pj-avatar.png',
    name: 'Axon Active',
  },
];

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (window.location.pathname === '/') {
      navigate('/orgs/1');
    }
  }, [navigate]);
  return (
    <div className='flex w-full h-screen bg-background'>
      <OrgSidebar orgs={ORGS}></OrgSidebar>
      <Outlet></Outlet>
      <div className=''></div>
    </div>
  );
}
