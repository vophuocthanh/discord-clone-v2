import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import {
  Calendar,
  ChevronDown,
  Globe,
  Headphones,
  Mic,
  MonitorUp,
  Music4,
  PhoneMissed,
  Plus,
  Rocket,
  Signal,
  Users,
  VibrateOff,
  Video,
  Volume2,
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import SettingModal from './_components/SettingModal';
import PopoverSidebar from './channels/_components/PopoverSidebar';

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

const OPTIONS = [
  {
    id: 1,
    icon: <Video />,
  },
  {
    id: 2,
    icon: <MonitorUp />,
  },
  {
    id: 3,
    icon: <Rocket />,
  },
  {
    id: 4,
    icon: <Music4 />,
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
        id: '3',
        name: 'Project 1',
        logo: <Volume2 />,
      },
      {
        id: '4',
        name: 'Project 2',
        logo: <Volume2 />,
      },
    ],
  },
  {
    id: 3,
    name: 'Class Audio',
    channels: [
      {
        id: '5',
        name: 'Class Audio 1',
        logo: <Volume2 />,
      },
      {
        id: '6',
        name: 'Class Audio 2',
        logo: <Volume2 />,
      },
    ],
  },
  {
    id: 4,
    name: 'Class Live ',
    channels: [
      {
        id: '7',
        name: 'Class Live Audio 1',
        logo: <Volume2 />,
      },
      {
        id: '8',
        name: 'Class Live Audio 2',
        logo: <Volume2 />,
      },
    ],
  },
];

export default function Org() {
  const { channelID, orgID } = useParams('/orgs/:orgID/channels/:channelID');
  const navigate = useNavigate();

  const navigateToChannel = (id: string) => {
    navigate(`/orgs/${orgID}/channels/${id}`);
  };
  return (
    <div className='flex w-full'>
      <div className='relative bg-primary-foreground/10 text-primary-foreground 0 w-[20rem] flex flex-col'>
        <PopoverSidebar></PopoverSidebar>
        <div className='overflow-scroll h-3/4'>
          <div className='text-xl text-primary-foreground/60'>
            {HEADERS.map((header) => (
              <div
                className='flex gap-2 px-3 py-2 cursor-pointer hover:bg-primary-foreground/20'
                key={header.id}
              >
                {header.icon}
                <p> {header.name} </p>
              </div>
            ))}
          </div>
          <div className='px-2 text-primary-foreground/60'>
            <hr className='h-2 my-4 border-primary-foreground/60' />
            {CATEGORIES.map((category) => (
              <div key={category.id}>
                <div className='flex justify-between gap-2'>
                  <div className='flex gap-2'>
                    <ChevronDown className='w-4' />
                    <h1 className='uppercase'> {category.name} </h1>
                  </div>
                  <Plus />
                </div>
                <div className='py-4 space-y-2'>
                  {category.channels.map((channel) => (
                    <div
                      className={cn('px-6 py-3 cursor-pointer', {
                        'bg-primary-foreground/20 text-primary-foreground/80 rounded':
                          channel.id === channelID,
                      })}
                      key={channel.id}
                      onClick={() => navigateToChannel(channel.id)}
                    >
                      {channel.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 px-3 mb-1'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 font-bold text-green-400'>
              <Signal className='cursor-pointer' />
              <p className='text-sm'>Đã kết nối giọng nói</p>
            </div>
            <p className='text-primary-foreground/60'>Class 1</p>
          </div>
          <div className='flex items-center gap-4'>
            <VibrateOff className='cursor-pointer' />
            <PhoneMissed className='cursor-pointer' />
          </div>
        </div>
        <div className='flex items-center justify-between px-2'>
          {OPTIONS.map((option) => (
            <span
              className='flex px-3 py-1 rounded cursor-pointer bg-primary-foreground/20'
              key={option.id}
            >
              {option.icon}
            </span>
          ))}
        </div>
        <div className='absolute bottom-0 flex items-center justify-between w-full px-3 py-1'>
          <div className='flex items-center gap-4 px-2 rounded cursor-pointer hover:bg-primary-foreground/20'>
            <img
              src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
              alt='avatar'
              width={30}
              height={30}
              className='object-cover w-8 h-8 rounded-full aspect-square'
            />
            <div className='flex flex-col'>
              <p className='text-base font-bold'>Songoku</p>
              <p className='text-sm text-primary-foreground/60'>Online</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Mic className='cursor-pointer' />
            <Headphones className='cursor-pointer' />
            <SettingModal />
          </div>
        </div>
      </div>
      <div className='w-5/6 bg-primary-foreground/50'>
        <Outlet />
      </div>
    </div>
  );
}
