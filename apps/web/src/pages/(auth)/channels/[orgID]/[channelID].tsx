import TooltipIcon from '@/components/TooltipIcon';
import { cn } from '@/lib/utils';
import { useParams } from '@/router';
import { Frame, HelpCircle, Users2 } from 'lucide-react';
import { useState } from 'react';
import ChatList from './_components/ChatList';
import MemberList from './_components/MemberList';
import PopoverInbox from './_components/PopoverInbox';
import PopoverMessages from './_components/popover/PopoverMessages';
import PopoverNotification from './_components/popover/PopoverNotification';
import PopoverGim from './_components/popover/PopoverGim';
import { Input } from '@/components/ui/input';

export default function Channel() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  const { channelID } = useParams('/channels/:orgID/:channelID');
  return (
    <div>
      <header className='flex items-center justify-between p-3 text-2xl border-b h-14 bg-primary-foreground/20'>
        <div className='flex items-center gap-4'>
          <Frame />
          {channelID}
        </div>
        <div className='flex items-center gap-4'>
          <PopoverMessages></PopoverMessages>
          <PopoverNotification></PopoverNotification>
          <PopoverGim></PopoverGim>
          <TooltipIcon
            icon={
              <Users2
                className={cn('cursor-pointer text-gray-400 hover:text-white', {
                  'text-white': !isHideMemberList,
                })}
                onClick={() => setIsHideMemberList(!isHideMemberList)}
              />
            }
            content={isHideMemberList ? 'Show member list' : 'Hide member list'}
          />
          <div className=''>
            <Input
              placeholder='Search'
              className='h-6 text-xs text-white rounded w-48 bg-[#1d202a]'
            />
          </div>
          <PopoverInbox />
          <HelpCircle className='text-gray-400 cursor-pointer hover:text-white' />
        </div>
      </header>
      <div className='flex h-[calc(100vh-3.5rem)]'>
        <div
          className={`${
            isHideMemberList ? 'w-full' : 'w-[calc(100%-16rem)]'
          } bg-primary-foreground/20 px-6`}
        >
          <ChatList />
        </div>
        {isHideMemberList ? null : (
          <div className='w-[16rem] bg-primary-foreground/10 p-4'>
            <MemberList />
          </div>
        )}
      </div>
    </div>
  );
}
