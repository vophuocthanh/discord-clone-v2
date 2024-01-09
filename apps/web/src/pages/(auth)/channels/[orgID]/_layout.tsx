import { cn } from '@/lib/utils';
import { Link, useParams } from '@/router';
import {
  ChevronDown,
  Globe,
  Headphones,
  MegaphoneOff,
  Mic,
  MicOff,
  MonitorUp,
  Music4,
  PhoneMissed,
  Rocket,
  Signal,
  VibrateOff,
  Video,
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import PopoverSidebar from './_components/popover/PopoverSidebar';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getChannels } from '@/apis/channels';
import { groupBy } from 'lodash-es';
import TooltipIcon from '@/components/TooltipIcon';
import { SkeletonChannel } from './_components/skeleton/SkeletonChannel';
import EventsModal from './_components/EventsModal';
import SettingModal from './_components/SettingModal';
import PopoverUser from './_components/popover/PopoverUser';
import { CreateChannel } from './_components/CreateChannel';

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
  const navigate = useNavigate();

  const { data } = useQuery(['channels'], () => getChannels(orgID));
  const channels = data?.data;
  const navigateToChannel = (id: string) => {
    navigate(`/channels/${orgID}/${id}`);
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
          <div className='pt-2 pl-2 text-xl text-primary-foreground/60'>
            <EventsModal />
            <Link
              to='/channels/:orgID/channel-browser'
              params={{ orgID }}
              className='flex w-full gap-2 px-3 py-2 hover:bg-primary-foreground/20'
            >
              <Globe />
              <p>Browse Channels</p>
            </Link>
            {/* <Link
              to='/channels/:orgID/member-safety'
              params={{ orgID }}
              state={{
                channel: channels?.find((channel) => channel.id === channelID),
              }}
              className='flex w-full gap-2 px-3 py-2 hover:bg-primary-foreground/20'
            >
              <Users />
              <p>Member</p>
            </Link> */}
          </div>
          <div className='px-2 text-primary-foreground/60'>
            <hr className='h-2 my-4 border-primary-foreground/60' />
            {!data ? (
              <div className='flex flex-col space-y-10'>
                <SkeletonChannel />
                <SkeletonChannel />
                <SkeletonChannel />
                <SkeletonChannel />
              </div>
            ) : (
              <div className=''>
                {Object.entries(groupBy(channels, 'category.name')).map(
                  ([category, channels]) => (
                    <div key={category}>
                      <div className='flex justify-between gap-2'>
                        <div className='flex gap-2'>
                          <ChevronDown className='w-4' />
                          <h1 className='uppercase'> {category} </h1>
                        </div>
                        <CreateChannel></CreateChannel>
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
            )}
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
      <div className='w-5/6 bg-primary-foreground/50'>
        <Outlet />
      </div>
    </div>
  );
}
