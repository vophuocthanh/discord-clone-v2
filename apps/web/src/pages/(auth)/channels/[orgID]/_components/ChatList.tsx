import { Input } from '@/components/ui/input';
import { Gift, PlusCircle, Sticker } from 'lucide-react';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import PopoverEnjoy from './popover/PopoverEnjoy';
import { useQuery } from 'react-query';
import { getMessages } from '@/apis/messages';
import { useParams } from '@/router';
import { Message } from '@/lib/type';
import MessageItem from './MessageItem';
import { SkeletonChatList } from './skeleton/SkeletonChatList';

export default function ChatList() {
  const chatListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const { orgID, channelID } = useParams('/channels/:orgID/:channelID');

  const { data } = useQuery(['messages'], () => getMessages(orgID, channelID));
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current?.value.trim() !== '') {
      flushSync(() => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: {
              id: 1,
              name: 'John Doe',
              avatar:
                'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
              backgroundColor: 'bg-red-500',
              roles: [],
            },
            createdAt: '2022-01-01T00:00:00.000Z',
            message: text,
          },
        ]);
      });
      setText('');
      inputRef.current!.value = '';
      chatListRef.current?.scrollTo({
        top: chatListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };
  const handleAddEnjoy = (emoji: { native: string }) => {
    setText((prevText) => prevText + emoji.native);
  };
  return (
    <div className='relative h-full text-primary-foreground'>
      <div
        className='flex flex-col h-[calc(100vh-9rem)] overflow-y-auto'
        ref={chatListRef}
      >
        {!data ? (
          <div className='flex flex-col mt-4 space-y-10'>
            <SkeletonChatList></SkeletonChatList>
            <SkeletonChatList></SkeletonChatList>
            <SkeletonChatList></SkeletonChatList>
            <SkeletonChatList></SkeletonChatList>
          </div>
        ) : (
          <div className=''>
            {[...(data?.data ?? []), ...messages]?.map((message) => (
              <div key={message.id} className='flex items-center gap-5 my-2'>
                <MessageItem key={message.id} message={message}></MessageItem>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='absolute w-full select-none bottom-6'>
        <PlusCircle className='absolute w-6 h-6 cursor-pointer top-2 left-2' />
        <Input
          placeholder='Send message...'
          type='text'
          className='pl-12 pr-32'
          onKeyUp={handleChange}
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></Input>
        <div className='absolute flex gap-3 top-2 right-4'>
          <Gift className='w-6 h-6 cursor-pointer' />
          <Sticker className='w-6 h-6 cursor-pointer' />
          <PopoverEnjoy onEmojiSelect={handleAddEnjoy}></PopoverEnjoy>
        </div>
      </div>
    </div>
  );
}
