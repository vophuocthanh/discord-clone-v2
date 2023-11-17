import { Message } from '@/lib/type';
import { Fragment } from 'react';
import Linkify from 'react-linkify';
import { Link } from 'react-router-dom';

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
      <div>
        <p>
          <span className='font-bold text-blue-500'>
            {message.sender.name}{' '}
          </span>
          <span className='text-sm text-primary-foreground/40'>
            {' '}
            {new Date(message.createdAt).toLocaleString()}
          </span>
        </p>
        <Linkify
          componentDecorator={(
            decoratedHref: string,
            decoratedText: string,
            key: number
          ) => (
            <Fragment key={key}>
              <Link
                className='underline text-sky-500'
                to={decoratedHref}
                rel='noreferrer'
                target='_blank'
              >
                {decoratedText}
              </Link>
            </Fragment>
          )}
        >
          {message.message}
        </Linkify>
      </div>
    </div>
  );
}
