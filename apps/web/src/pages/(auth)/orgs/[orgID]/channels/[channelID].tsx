import TooltipIcon from '@/components/TooltipIcon';
import { useParams } from '@/router';
import { Frame, HelpCircle, Users2 } from 'lucide-react';
import MemberList from './_components/MemberList';
import ChatList from './_components/ChatList';
import { useState } from 'react';

export default function Channel() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  const { channelID } = useParams('/orgs/:orgID/channels/:channelID');
  return (
    <div>
      <header className='flex items-center justify-between p-3 text-2xl border-b h-14 bg-primary-foreground/20'>
        <div className='flex items-center gap-4'>
          <Frame />
          {channelID}
        </div>
        <div className='flex items-center gap-4'>
          <TooltipIcon
            icon={
              <Users2 onClick={() => setIsHideMemberList(!isHideMemberList)} />
            }
            content={isHideMemberList ? 'Show member list' : 'Hide member list'}
          />
          <HelpCircle className='cursor-pointer' />
        </div>
      </header>
      <div className='flex h-[calc(100vh-3.5rem)]'>
        <div
          className={`${
            isHideMemberList ? 'w-full' : 'w-[calc(100%-20rem)]'
          } bg-primary-foreground/20 px-6`}
        >
          <ChatList />
        </div>
        {isHideMemberList ? null : (
          <div className='w-[20rem] bg-primary-foreground/10 p-4'>
            <MemberList />
          </div>
        )}
      </div>
    </div>
  );
}
