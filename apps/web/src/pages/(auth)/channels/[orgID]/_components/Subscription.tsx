import { ShieldQuestion } from 'lucide-react';

const SUBSCRIPTIONS = [
  {
    id: 1,
    name: 'Your Subscriptions',
    description:
      'These are your current subscriptions. They will be billed on the same billing cycle. You can update any subscription at any time.',
    question: 'You have no active subscriptions',
  },
  {
    id: 2,
    name: 'Subscription Credit',
    description:
      'When you accept a gift while you have a running subscription or accept a gift that differs from your current subscription, it will appear here as credit.',
    question: 'You have no unused credits',
  },
];

export default function Subscription() {
  return (
    <div className='w-[52rem] space-y-4'>
      {SUBSCRIPTIONS.map((subscription) => (
        <section key={subscription.id}>
          <h1 className='text-2xl font-medium'>{subscription.name}</h1>
          <p>{subscription.description}</p>
          <div className='flex p-6 gap-4'>
            <ShieldQuestion size={32} />
            <span>{subscription.question}</span>
          </div>
          <hr className='h-1 w-full bg-primary-foreground/20' />
        </section>
      ))}
    </div>
  );
}
