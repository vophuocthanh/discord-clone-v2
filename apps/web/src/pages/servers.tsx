import { Link } from 'react-router-dom';
import logo from '@/assets/images/server/logo.svg';
import { Button } from '@/components/ui/button';
import Footer from './_components/Footer';
import bg from '@/assets/images/background.png';
import { Input } from '@/components/ui/input';
import { Minus } from 'lucide-react';
import { useState } from 'react';
import announcement from '@/assets/images/support/announcements.png';
import discordInterface from '@/assets/images/support/discord-interface.png';
import accountSetting from '@/assets/images/support/account-settings.png';
import gettingStarted from '@/assets/images/support/getting-startred.png';
import serverBooster from '@/assets/images/support/server-setup.png';
import communityProgram from '@/assets/images/support/community-programs.png';
import perksSubscription from '@/assets/images/support/perks-subscriptions.png';
import billing from '@/assets/images/support/Billing.png';
import trustSafety from '@/assets/images/support/trust-safety.png';
import FAQs from '@/assets/images/support/FAQs.png';
import developerSupport from '@/assets/images/support/develoepr-support.png';
import twitter from '@/assets/images/support/icon-twitter.png';
import { DropdownServer } from './(auth)/channels/[orgID]/_components/DropdownServer';

const SUPPORTS = [
  {
    id: 1,
    img: announcement,
    name: 'Announcement',
    description:
      'We`ve got our ear to the ground. Here`s what you need to know.',
  },
  {
    id: 2,
    img: discordInterface,
    name: 'Discord`s Interface',
    description: 'WHAT DOES THIS BUTTON DO!?!11',
  },
  {
    id: 3,
    img: accountSetting,
    name: 'Account Settings',
    description: 'You`re a special snowflake and so is your account.',
  },
  {
    id: 4,
    img: gettingStarted,
    name: 'Getting Started',
    description: 'Start off on the right foot! Not the left one!',
  },
  {
    id: 5,
    img: serverBooster,
    name: 'Server Setup',
    description: 'Almost as exciting as interior decorating.',
  },
  {
    id: 6,
    img: communityProgram,
    name: 'Community Programs',
    description:
      'Bringing people together from all around the globe (and occasionally Mars)',
  },
  {
    id: 7,
    img: perksSubscription,
    name: 'Perks and Subscriptions',
    description: `Please don't shop until you drop. Let us help.`,
  },
  {
    id: 8,
    img: billing,
    name: 'Billing',
    description: 'That feel when you look at your bank account.',
  },
  {
    id: 9,
    img: trustSafety,
    name: 'Trust & Safety',
    description: 'Keep things safe & sound for you and your buddies.',
  },
  {
    id: 10,
    img: FAQs,
    name: 'F.A.Q.s',
    description: 'All you can eat self-serve problem solving.',
  },
];

const HELPS = [
  {
    id: 1,
    title: 'Developer Support',
    image: developerSupport,
    desc: 'Your home for support with developing bots, apps, & games using our API and SDK! ',
  },
  {
    id: 2,
    title: 'Twitter',
    image: twitter,
    desc: 'Have a quick question? Hit us up on Twitter!',
  },
];

export default function Component() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='w-full h-full '>
      {open ? (
        <div className='fixed flex flex-col justify-center text-black bottom-8 right-8 w-72'>
          <div className='flex items-center justify-center px-4 py-2 text-center text-white bg-primary'>
            <h1 className='text-center'>Help</h1>
            <Minus
              onClick={handleOpen}
              className='w-8 h-8 ml-auto transition-all cursor-pointer'
            />
          </div>
          <div className='p-4 bg-white'>
            <Input
              placeholder='How can we help'
              className='w-full border rounded'
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleOpen}
          className='fixed w-24 transition-all rounded-full bottom-8 right-8 bg-primary hover:bg-primary'
        >
          Help
        </Button>
      )}
      <header className='flex items-center justify-between w-full max-w-6xl gap-20 py-4 mx-auto text-blue-600'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='flex items-center gap-10 text-lg font-medium'>
          <Link to='/download' className='hover:underline'>
            Feedback
          </Link>
          <DropdownServer></DropdownServer>
          <Link to='/discover' className='hover:underline'>
            Submit a request
          </Link>
          <Link to='/login'>
            <Button className='text-lg text-blue-600 bg-white rounded-full hover:bg-white hover:shadow-xl'>
              Sign in
            </Button>
          </Link>
        </div>
      </header>
      <div
        className='mx-auto bg-[#5865f2] justify-center flex flex-col items-center w-full bg-no-repeat bg-cover h-96'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='flex w-full mx-auto'>
          <div className='flex flex-col max-w-6xl mx-auto space-y-10'>
            <h1 className='text-5xl font-bold text-center'>Help Center</h1>
            <Input
              className='w-[30rem] bg-white text-black pl-6 rounded'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-auto my-20 h-100% text-black max-w-7xl space-y-6'>
        <h1 className='text-2xl font-bold text-center'>
          Need help? We've got your back.
        </h1>
        <p className='font-semibold text-center'>
          From account settings to permissions, find help for everything Discord{' '}
          <br />
          If you're new to Discord and looking for tips, check out our{' '}
          <Link
            to='/nitro'
            className='text-xl font-bold text-primary hover:underline'
          >
            Beginner's Guide
          </Link>
        </p>
      </div>
      <div className='flex flex-wrap justify-center w-full gap-10 px-6 my-20 text-black'>
        {SUPPORTS.map((item) => (
          <div
            className='flex flex-col h-64 p-4 space-y-4 text-center border rounded-md w-72'
            key={item.id}
          >
            <img
              src={item.img}
              alt=''
              className='flex items-center justify-center w-24 h-24 mx-auto rounded-full'
            />
            <h1 className='text-xl font-bold text-primary'>{item.name}</h1>
            <hr className='flex items-center justify-center w-20 mx-auto' />
            <p className='text-center text-sm text-[#8b8d8f]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className='flex flex-col mx-auto my-20 h-100% text-black max-w-7xl space-y-6'>
        <h1 className='text-2xl font-bold text-center'>
          Other ways to find help.
        </h1>
      </div>
      <div className='flex flex-wrap justify-center w-full gap-10 px-6 my-20 text-black'>
        {HELPS.map((item) => (
          <div
            className='flex flex-col h-64 p-4 space-y-4 text-center border rounded-md w-72'
            key={item.id}
          >
            <img
              src={item.image}
              alt=''
              className='flex items-center justify-center w-24 h-24 mx-auto rounded-full'
            />
            <h1 className='text-xl font-bold text-primary'>{item.title}</h1>
            <hr className='flex items-center justify-center w-20 mx-auto' />
            <p className='text-center text-sm text-[#8b8d8f]'>{item.desc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
