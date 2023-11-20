import Avatar from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Gift, PlusCircle, Sticker } from 'lucide-react';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import PopoverEnjoy from './PopoverEnjoy';

const MESSAGES = [
  {
    id: 1,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'Hello, how are you?',
  },
  {
    id: 2,
    sender: {
      name: 'Jane Smith',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'I am good, thanks for asking.',
  },
  {
    id: 3,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 4,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 5,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 6,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 7,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 8,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 9,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 10,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 11,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 12,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 13,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
  {
    id: 14,
    sender: {
      name: 'John Doe',
      avatar:
        'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    },
    createAt: '2022-01-01T00:00:00.000Z',
    message: 'What about you?',
  },
];

export default function ChatList() {
  const chatListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState(MESSAGES);
  const [text, setText] = useState('');
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current?.value.trim() !== '') {
      flushSync(() => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: {
              name: 'John Doe',
              avatar:
                'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
            },
            createAt: '2022-01-01T00:00:00.000Z',
            message: inputRef.current!.value,
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
        {messages.map((message) => (
          <div key={message.id} className='flex items-center gap-5 my-2'>
            <Avatar src={message.sender.avatar} alt={message.sender.name} />
            <div className='flex flex-col'>
              <p className='flex items-center gap-2'>
                <span className='font-bold text-blue-500'>
                  {message.sender.name}
                </span>
                <span className='text-sm text-primary-foreground/60'>
                  {new Date(message.createAt).toLocaleString()}
                </span>
              </p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
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