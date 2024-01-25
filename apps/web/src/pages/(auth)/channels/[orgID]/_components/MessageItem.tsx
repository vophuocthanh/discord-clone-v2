import { Message } from "@/lib/type";
import { Fragment } from "react";
import Linkify from 'react-linkify';
import { Link } from "react-router-dom";


interface Props {
  message: Message
}

export default function MessageItem({ message }: Props ) {
  return (
    <div key={message.id} className="flex gap-5 my-2">
      <img src={message.sender.avatar} alt={message.sender.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p>
          <span className="text-blue-500 font-bold">{message.sender.name} </span>
          <span className="text-primary-foreground/40 text-sm"> {new Date(message.createdAt).toLocaleString()}</span>
        </p>
        <Linkify
          componentDecorator={(decoratedHref: string, decoratedText: string, key: number) => (
            <Fragment key={key}>
              <Link className="text-sky-500 underline" to={decoratedHref} rel="noreferrer" target="_blank">
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
