import { useParams } from '@/router';
import {
  Calendar,
  ChevronDown,
  Globe,
  Headphones,
  Home,
  Mic,
  MonitorUp,
  Music4,
  PhoneMissed,
  Plus,
  Rocket,
  Settings,
  Signal,
  Users,
  VibrateOff,
  Video,
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
  const params = useParams('/orgs/:orgID/channels/:channelID');
  const navigate = useNavigate();
  const navigateToChannels = (id: string) => {
    console.log(params);
    navigate(`/orgs/${params.orgID}/channels/${id}`);
  };
  return (
    <div className='flex w-full'>
      <div className='relative flex flex-col w-1/5 bg-primary/10'>
        <div className='flex items-center justify-between p-3 border-b cursor-pointer h-14 border-background'>
          <div className='flex items-center gap-2 text-3xl'>
            <Home />
            <h1 className='font-bold'>Discord</h1>
          </div>
          <ChevronDown />
        </div>
        <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 h-3/4'>
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
        <div className='flex items-center justify-between gap-4 p-3'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2 font-bold text-green-400'>
              <Signal className='cursor-pointer' />
              <p className='text-xl'>Đã kết nối giọng nói</p>
            </div>
            <p className='text-primary/60'>Class 1</p>
          </div>
          <div className='flex items-center gap-4'>
            <VibrateOff className='cursor-pointer' />
            <PhoneMissed className='cursor-pointer' />
          </div>
        </div>
        <div className='flex items-center justify-between px-3 '>
          {OPTIONS.map((option) => (
            <span
              className='flex px-5 py-1 rounded cursor-pointer bg-primary/20'
              key={option.id}
            >
              {option.icon}
            </span>
          ))}
        </div>
        <div className='absolute bottom-0 flex items-center justify-between w-full p-3'>
          <div className='flex items-center gap-4'>
            <img
              src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
              alt='avatar'
              width={40}
              height={40}
              className='object-cover w-10 h-10 rounded-full aspect-square'
            />
            <div className='flex flex-col'>
              <p className='text-base font-bold'>Songoku</p>
              <p className='text-sm text-primary/60'>Online</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Mic className='cursor-pointer' />
            <Headphones className='cursor-pointer' />
            <Settings className='cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='w-5/6 bg-primary-foreground/50'>
        <Outlet />
      </div>
    </div>
  );
}
