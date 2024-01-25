import { Org } from '@/lib/type';
import { cn } from '@/lib/utils';
import { CreateNewOrgs } from '@/pages/(auth)/channels/[orgID]/_components/CreateNewOrgs';
import { useParams, useNavigate } from '@/router';

interface OrgSidebarProps {
  orgs: Org[];
}

export default function OrgSidebar({ orgs = [] }: OrgSidebarProps) {
  const navigate = useNavigate();
  const { orgID } = useParams('/channels/:orgID/:channelID');
  return (
    <div className='p-4 space-y-4'>
      {orgs?.map((org) => (
        <div key={org.id}>
          <div
            className={cn({
              'fixed left-0 bg-primary-foreground/10 h-14 rounded-r w-1':
                org.id === orgID,
            })}
          />
          <img
            onClick={() =>
              navigate('/channels/:orgID/:channelID', {
                params: { orgID: org.id, channelID: '1' },
              })
            }
            src={org.icon}
            alt={org.name}
            className='cursor-pointer w-14 h-14'
          />
        </div>
      ))}
      <CreateNewOrgs />
    </div>
  );
}
