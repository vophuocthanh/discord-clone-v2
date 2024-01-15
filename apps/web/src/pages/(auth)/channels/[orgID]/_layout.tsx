import { getChannels } from '@/apis/channels';
import { cn } from '@/lib/utils';
import { Link, useParams } from '@/router';
import { ChevronDown, Grip, Headphones, Mic, Users } from 'lucide-react';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import SettingModal from './_components/SettingModal';
import EventsModal from './_components/EventsModal';
import { getOrg } from '@/apis/orgs';
import AddChannelModal from './_components/AddChannelModal';
import OrgMenuDropDown from './_components/OrgMenuDropDown';

export default function Component() {
  const { channelID, orgID } = useParams('/channels/:orgID/:channelID');
  const navigate = useNavigate();

  const navigateToChannel = (id: string) => {
    navigate(`/channels/${orgID}/${id}`);
  };

  const { data: channels } = useQuery(['channels', orgID], () =>
    getChannels(orgID)
  );

  const { data: org } = useQuery(['orgs', orgID], () => getOrg(orgID));

  return (
    <div className='flex w-full'>
      <div className='relative bg-primary-foreground/10 text-primary-foreground 0 w-[16rem] flex flex-col'>
        <OrgMenuDropDown org={org} />
        <div className='overflow-scroll h-3/4'>
          <div className='pt-2 pl-2 text-xl text-primary-foreground/60'>
            <EventsModal />
            <Link
              to='/channels/:orgID/channel-browser'
              params={{ orgID }}
              className='flex w-full gap-2 px-3 py-2 hover:bg-primary-foreground/20'
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
              className='flex w-full gap-2 px-3 py-2 hover:bg-primary-foreground/20'
            >
              <Users />
              <p> Members </p>
            </Link>
          </div>
          <div className='px-2 text-primary-foreground/60'>
            <hr className='h-2 my-4 border-primary-foreground/60' />
            {org?.categories.map((category) => (
              <div key={category.id}>
                <div className='flex justify-between gap-2'>
                  <div className='flex gap-2'>
                    <ChevronDown className='w-4' />
                    <h1 className='uppercase'> {category.name} </h1>
                  </div>
                  <AddChannelModal />
                </div>
                <div className='py-4 space-y-2'>
                  {category.channels?.map((channel) => (
                    <div
                      className={cn('px-6 py-3 cursor-pointer', {
                        'bg-primary-foreground/20 text-primary-foreground/80':
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
        <div className='absolute bottom-0 flex items-center justify-between w-full p-3'>
          <div className='flex gap-2'>
            <img
              src='https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg'
              width={40}
              className='object-cover rounded-full aspect-square'
            />
            <div>
              <p className='text-base font-bold'>Son Tran</p>
              <p className='text-sm'>sontran1711</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <Mic className='cursor-pointer' />
            <Headphones className='cursor-pointer' />
            <SettingModal />
          </div>
        </div>
      </div>
      <div className='w-[calc(100%-16rem)]'>
        <Outlet />
      </div>
    </div>
  );
}
