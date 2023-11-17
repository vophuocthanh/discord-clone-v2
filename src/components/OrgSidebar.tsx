import { Orgs } from '@/lib/type';
import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OrgSidebarProps {
  orgs: Orgs[];
}

export default function OrgSidebar({ orgs }: OrgSidebarProps) {
  const navigate = useNavigate();
  const { orgID } = useParams('/orgs/:orgID/channels/:channelID');
  return (
    <div className='p-6 space-y-5'>
      {orgs.map((org) => (
        <div key={org.id}>
          <div
            className={cn({
              'fixed left-0 h-14 w-1 border-l-4 rounded-r border-primary-foreground':
                org.id === orgID,
            })}
          ></div>
          <img
            src={org.icon}
            alt={org.name}
            className='cursor-pointer w-14 h-14'
            onClick={() => {
              navigate(`/orgs/${org.id}`);
            }}
          />
        </div>
      ))}
      <div className='flex items-center justify-center text-green-500 bg-gray-700 rounded-full cursor-pointer h-14 w-14'>
        <Plus />
      </div>
    </div>
  );
}
