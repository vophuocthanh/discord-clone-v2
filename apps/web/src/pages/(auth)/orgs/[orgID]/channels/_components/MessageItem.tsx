import { Message } from '@/lib/type';

interface Props {
  message: Message;
}

export default function MessageItem({ message }: Props) {
  return (
    <div key={message.id} className='flex gap-5 my-2'>
      <img
        src={message.sender.avatar}
        alt={message.sender.name}
        className='object-cover w-12 h-12 rounded-full'
      />
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <span className='font-bold text-blue-500'>{message.sender.name}</span>
          <span className='text-sm text-primary-foreground/40'>
            {new Date(message.createdAt).toLocaleString()}
          </span>
        </div>
        <div className=''>{message.message}</div>
      </div>
    </div>
  );
}
