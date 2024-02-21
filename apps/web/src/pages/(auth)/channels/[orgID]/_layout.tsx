import { getChannels } from '@/apis/channels';
import { Link, useParams } from '@/router';
import {
  Grip,
  Headphones,
  MegaphoneOff,
  Mic,
  MicOff,
  MonitorUp,
  Music4,
  PhoneMissed,
  Rocket,
  Signal,
  Users,
  VibrateOff,
  Video,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import SettingModal from './_components/SettingModal';
import EventsModal from './_components/EventsModal';
import { getOrg } from '@/apis/orgs';
import OrgMenuDropDown from './_components/OrgMenuDropDown';
import CategorySection from './_components/CategorySection';
import TooltipIcon from '@/components/TooltipIcon';
import PopoverUser from './_components/popover/PopoverUser';
import { useState } from 'react';
import { cn } from '@/lib/utils';
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

export default function Component() {
  const [micOn, setMicOn] = useState(false);
  const [headphoneOn, steHeadphoneOn] = useState(true);
  const { channelID, orgID } = useParams('/channels/:orgID/:channelID');
  const location = useLocation();

  const { data: channels } = useQuery({
    queryKey: ['channels', orgID],
    queryFn: () => getChannels(orgID),
  });

  const { data: org } = useQuery({
    queryKey: ['orgs', orgID],
    queryFn: () => getOrg(orgID),
  });

  const handleMic = () => {
    setMicOn(!micOn);
  };
  const handleHeadphone = () => {
    steHeadphoneOn(!headphoneOn);
  };

  return (
    <div className='flex w-full'>
      <div className='relative bg-primary-foreground/10 text-primary-foreground 0 w-[16rem] flex flex-col'>
        <OrgMenuDropDown org={org} />
        <div className='overflow-scroll h-3/4'>
          <div className='pt-2 pl-2 space-y-2 text-xl text-primary-foreground/60'>
            <EventsModal />
            <Link
              to='/channels/:orgID/channel-browser'
              params={{ orgID }}
              className={cn(
                'px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20',
                {
                  'bg-primary-foreground/20':
                    location.pathname.split('/').pop() === 'channel-browser',
                }
              )}
            >
              <Grip />
              <p> Browse Channels </p>
            </Link>
            <Link
              to='/channels/:orgID/member-safety'
              params={{ orgID }}
              state={{
                channel: channels?.find((channel) => channel.id === channelID),
              }}
              className={cn(
                'px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20',
                {
                  'bg-primary-foreground/20':
                    location.pathname.split('/').pop() === 'member-safety',
                }
              )}
            >
              <Users />
              <p> Members </p>
            </Link>
          </div>
          <div className='px-2 text-primary-foreground/60'>
            <hr className='h-2 my-4 border-primary-foreground/60' />
            {org?.categories.map((category) => (
              <CategorySection category={category} key={category.id} />
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
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
          <div className='bottom-0 flex items-center justify-between w-full px-3 py-1'>
            <PopoverUser></PopoverUser>
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
      </div>
      <div className='w-[calc(100%-16rem)]'>
        <Outlet />
      </div>
    </div>
  );
}
