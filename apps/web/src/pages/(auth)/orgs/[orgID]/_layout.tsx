import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import {
  Calendar,
  ChevronDown,
  Globe,
  Headphones,
  MegaphoneOff,
  Mic,
  MicOff,
  MonitorUp,
  Music4,
  PhoneMissed,
  Plus,
  Rocket,
  Signal,
  Users,
  VibrateOff,
  Video,
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import SettingModal from './_components/SettingModal';
import PopoverSidebar from './channels/_components/PopoverSidebar';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getChannels } from '@/apis/channels';
import { groupBy } from 'lodash-es';
import TooltipIcon from '@/components/TooltipIcon';

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

export default function Org() {
  const [micOn, setMicOn] = useState(false);
  const [headphoneOn, steHeadphoneOn] = useState(true);
  const { channelID, orgID } = useParams('/orgs/:orgID/channels/:channelID');
  const navigate = useNavigate();

  const { data } = useQuery(['channels'], () => getChannels(orgID));
  const navigateToChannel = (id: string) => {
    navigate(`/orgs/${orgID}/channels/${id}`);
  };
  const handleMic = () => {
    setMicOn(!micOn);
  };
  const handleHeadphone = () => {
    steHeadphoneOn(!headphoneOn);
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
            {Object.entries(groupBy(data?.data, 'category.name')).map(
              ([category, channels]) => (
                <div key={category}>
                  <div className='flex justify-between gap-2'>
                    <div className='flex gap-2'>
                      <ChevronDown className='w-4' />
                      <h1 className='uppercase'> {category} </h1>
                    </div>
                    <Plus />
                  </div>
                  <div className='py-4 space-y-2'>
                    {channels.map((channel) => (
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
              )
            )}
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
            <TooltipIcon
              icon={
                micOn ? (
                  <Mic
                    onClick={handleMic}
                    className='text-green-300 cursor-pointer select-none'
                  />
                ) : (
                  <MicOff
                    onClick={handleMic}
                    className='text-red-500 cursor-pointer select-none'
                  />
                )
              }
              content={micOn ? 'Tắt âm' : 'Bỏ tắt ấm'}
            />
            <TooltipIcon
              icon={
                headphoneOn ? (
                  <Headphones
                    onClick={handleHeadphone}
                    className='cursor-pointer'
                  />
                ) : (
                  <MegaphoneOff
                    onClick={handleHeadphone}
                    className='text-red-500 cursor-pointer select-none'
                  />
                )
              }
              content={micOn ? 'Tắt tiếng' : 'Bỏ tắt tiếng'}
            />

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
