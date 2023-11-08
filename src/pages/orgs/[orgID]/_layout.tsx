import { useParams } from '@/router';
import {
  Calendar,
  ChevronDown,
  Globe,
  Home,
  Plus,
  Users,
  Volume2,
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';

const HEADERS = [
  {
    id: 1,
    name: 'Events',
    icon: <Calendar />,
  },
  {
    id: 2,
    name: 'Browse Channels',
    icon: <Globe />,
  },
  {
    id: 3,
    name: 'Members',
    icon: <Users />,
  },
];

const CATEGORIES = [
  {
    id: 1,
    name: 'Class',
    channels: [
      {
        id: '1',
        name: 'Class 1',
        logo: <Globe />,
      },
      {
        id: '2',
        name: 'Class 2',
        logo: <Globe />,
      },
    ],
  },
  {
    id: 2,
    name: 'Class Live',
    channels: [
      {
        id: '1',
        name: 'Project 1',
        logo: <Volume2 />,
      },
      {
        id: '2',
        name: 'Project 2',
        logo: <Volume2 />,
      },
    ],
  },
];

export default function Org() {
  const params = useParams('/orgs/:orgID/channels/:channelID');
  const navigate = useNavigate();
  const navigateToChannels = (id: string) => {
    console.log(params);
    navigate(`/orgs/${params.orgID}/channels/${id}`);
  };
  return (
    <div className='flex w-full'>
      <div className='w-1/6 bg-primary-foreground/80'>
        <div className='flex items-center justify-between p-3 border-b cursor-pointer border-background'>
          <div className='flex items-center gap-2 text-3xl'>
            <Home />
            <h1 className='font-bold'>Discord</h1>
          </div>
          <ChevronDown />
        </div>
        <div className='text-xl text-primary/60'>
          {HEADERS.map((header) => (
            <div
              key={header.id}
              className='flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary-foreground/90'
            >
              {header.icon}
              <p>{header.name}</p>
            </div>
          ))}
        </div>
        <div className='px-2 text-primary/60'>
          <hr className='h-2 my-4 border-t border-primary/60' />
          {CATEGORIES.map((category) => (
            <div key={category.id}>
              <div className='flex items-center justify-between w-full'>
                <div className='flex gap-2'>
                  <ChevronDown className='w-4' />
                  <h1 className='uppercase'>{category.name}</h1>
                </div>
                <Plus />
              </div>
              <div className='py-4 space-y-2 '>
                {category.channels.map((channel) => (
                  <div
                    key={channel.id}
                    className='flex gap-2 px-8 py-2 rounded cursor-pointer bg-primary-foreground/90'
                  >
                    <span className='flex w-4'>{channel.logo}</span>
                    <p
                      className='cursor-pointer text-primary'
                      onClick={() => navigateToChannels(channel.id)}
                    >
                      {channel.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-5/6 bg-primary-foreground/90'>
        <Outlet />
      </div>
    </div>
  );
}
