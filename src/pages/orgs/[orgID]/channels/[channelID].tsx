import TooltipIcon from '@/components/TooltipIcon';
import { Input } from '@/components/ui/input';
import ChatList from '@/pages/orgs/[orgID]/channels/_components/ChatList';
import MemberList from '@/pages/orgs/[orgID]/channels/_components/MemberList';
import { useParams } from '@/router';
import {
  BellOff,
  Frame,
  HelpCircle,
  MessageCircle,
  Pin,
  Users2,
} from 'lucide-react';
import { useState } from 'react';

export default function Channels() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  const { channelID } = useParams('/orgs/:orgID/channels/:channelID');
  return (
    <div className=''>
      <header className='flex items-center justify-between p-3 text-3xl border-b h-14 border-primary/10 bg-primary/10'>
        <div className='flex items-center gap-2'>
          <Frame />
          {channelID}
        </div>
        <div className='flex items-center gap-4'>
          <MessageCircle className='cursor-pointer' />
          <BellOff className='cursor-pointer' />
          <Pin className='cursor-pointer' />
          <TooltipIcon
            icon={
              <Users2
                className='cursor-pointer'
                onClick={() => setIsHideMemberList(!isHideMemberList)}
              />
            }
            content={isHideMemberList ? 'Show member list' : 'Hide member list'}
          />
          <div className=''>
            <Input placeholder='Search' className='h-6 text-xs rounded' />
          </div>
          <HelpCircle className='cursor-pointer' />
        </div>
      </header>
      <div className='flex h-[calc(100vh-3.5rem)]'>
        <div
          className={`${
            isHideMemberList ? 'w-full' : 'w-3/4'
          } bg-primary/20 px-6`}
        >
          <ChatList />
        </div>
        {isHideMemberList ? null : (
          <div className='w-1/4 p-4 bg-primary/10'>
            <MemberList />
          </div>
        )}
      </div>
    </div>
  );
}
