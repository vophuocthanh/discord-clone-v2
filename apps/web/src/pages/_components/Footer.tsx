import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SOCIAL = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Instagram />,
  },
  {
    id: 3,
    icon: <Twitter />,
  },
  {
    id: 4,
    icon: <Youtube />,
  },
];
export default function Footer() {
  return (
    <footer className='w-full text-white bg-black h-[44rem]'>
      <div className='flex items-start max-w-5xl gap-20 pt-20 mx-auto'>
        <div className='flex flex-col max-w-[200px] space-y-4 p-4'>
          <h1 className='text-3xl font-bold uppercase text-primary'>
            Imagine a place
          </h1>
          <div className='flex items-center gap-2'>
            🎆 English, USA{' '}
            <span>
              <ChevronDown />
            </span>
          </div>
          <div className='flex items-center gap-4'>
            {SOCIAL.map((social) => (
              <span key={social.id}>
                <span>{social.icon}</span>
              </span>
            ))}
          </div>
        </div>
        <div className='grid w-full grid-cols-4 gap-4'>
          <div className='p-4 space-y-2'>
            <p className='cursor-pointer text-primary'>Products</p>
            <p className='cursor-pointer '>Download</p>
            <p className='cursor-pointer '>Nitro</p>
            <p className='cursor-pointer '>Status</p>
          </div>
          <div className='p-4 space-y-2'>
            <p className='cursor-pointer text-primary'>Company</p>
            <p className='cursor-pointer '>About</p>
            <p className='cursor-pointer '>Branding</p>
            <p className='cursor-pointer '>Newsroom</p>
          </div>
          <div className='p-4 space-y-2'>
            <p className='cursor-pointer text-primary'>Resources</p>
            <p className='cursor-pointer '>College</p>
            <p className='cursor-pointer '>Support</p>
            <p className='cursor-pointer '>Safety</p>
            <p className='cursor-pointer '>Blog</p>
            <p className='cursor-pointer '>Feedback</p>
            <p className='cursor-pointer '>Build</p>
            <p className='cursor-pointer '>StreamKit</p>
            <p className='cursor-pointer '>Creators</p>
            <p className='cursor-pointer '>Community</p>
          </div>
          <div className='p-4 space-y-2'>
            <p className='cursor-pointer text-primary'>Policies</p>
            <p className='cursor-pointer '>Terms</p>
            <p className='cursor-pointer '>Privacy</p>
            <p className='cursor-pointer '>Status</p>
            <p className='cursor-pointer '>Cookie Settings</p>
            <p className='cursor-pointer '>Acknowledgements</p>
            <p className='cursor-pointer '>Licenses</p>
            <p className='cursor-pointer '>Moderation</p>
          </div>
        </div>
      </div>
      <hr className='max-w-[1000px] flex mx-auto border border-primary mt-10' />
      <div className='flex justify-between mx-auto max-w-[1000px] mt-20'>
        <img src={logo} alt='logo' />
        <Link to='/register'>
          <Button className='flex px-6 rounded-full'>Sign up</Button>
        </Link>
      </div>
    </footer>
  );
}
