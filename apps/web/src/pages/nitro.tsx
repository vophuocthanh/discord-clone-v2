import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import nitroVideo from '@/assets/images/video.webm';
import biggeer from '@/assets/images/bigger.svg';
import swet from '@/assets/images/swet.svg';
import emoji from '@/assets/images/emoji.svg';
import unlock from '@/assets/images/unlock.svg';
import Footer from './_components/Footer';
import {
  ArrowUpFromLine,
  BadgePercent,
  PersonStanding,
  ScreenShare,
  Server,
  Smile,
  SmilePlus,
} from 'lucide-react';
export default function Component() {
  return (
    <div className='relative w-full'>
      <div className='h-[20rem]'>
        <video width='100%' height='100%' autoPlay loop muted>
          <source src={nitroVideo} type='video/webm' />
        </video>
      </div>
      <header className='absolute left-0 right-0 top-0 mx-auto justify-center flex'>
        <div className='h-[40rem] mt-12 text-white flex flex-col justify-between items-center'>
          <div className='flex items-center justify-between w-full gap-20 max-w-7xl mx-auto'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <div className='flex items-center gap-10 text-lg font-medium'>
              <Link to='/download' className='hover:underline'>
                Download
              </Link>
              <Link to='/nitro' className='hover:underline'>
                Nitro
              </Link>
              <Link to='/discover' className='hover:underline'>
                Discover
              </Link>
              <Link to='/safety' className='hover:underline'>
                Safety
              </Link>
              <Link to='/servers' className='hover:underline'>
                Support
              </Link>
              <Link to='/blog' className='hover:underline'>
                Blog
              </Link>
              <Link to='/careers' className='hover:underline'>
                Careers
              </Link>
            </div>
            <Link to='/login'>
              <Button className='text-black bg-white rounded-full hover:bg-white hover:shadow-xl'>
                Sign up
              </Button>
            </Link>
          </div>
          <div className='w-96 mb-[18rem] mr-auto px-10 mt-20'>
            <h1 className='text-7xl text-white font-bold'>
              Unleash more fun with Nitro
            </h1>
            <p>
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, share bigger files, and so much more.{' '}
            </p>
          </div>
          <div className='flex justify-between gap-10 mx-auto max-w-6xl'>
            <div className='w-[36rem] flex justify-between flex-col p-6 h-[31rem] bg-white bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 rounded'>
              <div className='flex flex-col space-y-4'>
                <h1 className='text-4xl uppercase font-bold'>Nitro Basic</h1>
                <div className='flex gap-6 items-center'>
                  <ArrowUpFromLine />
                  <span className='text-xl'>50MB uploads</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <Smile />
                  <span className='text-xl'>Custom emoji anywhere</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <SmilePlus />
                  <span className='text-xl'>Unlimited Super Reactions</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <BadgePercent />
                  <span className='text-xl'>
                    Special Nitro badge on your profile
                  </span>
                </div>
              </div>
              <Button className='w-full h-16 rounded-full bg-white text-black hover:bg-white hover:shadow-xl text-xl hover:text-primary'>
                Subscribe
              </Button>
            </div>
            <div className='w-[36rem] p-6 space-y-10 h-[31rem] bg-white rounded bg-gradient-to-tr flex flex-col justify-between from-purple-600 via-pink-600 to-rose-500'>
              <div className='flex flex-col space-y-4'>
                <h1 className='text-4xl uppercase font-bold'>Nitro</h1>
                <div className='flex gap-6 items-center'>
                  <ArrowUpFromLine />
                  <span className='text-xl'>500MB uploads</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <Smile />
                  <span className='text-xl'>Custom emoji anywhere</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <SmilePlus />
                  <span className='text-xl'>Unlimited Super Reactions</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <ScreenShare />
                  <span className='text-xl'>HD video streaming</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <Server />
                  <span className='text-xl'>2 Server Boosts</span>
                </div>
                <div className='flex gap-6 items-center'>
                  <PersonStanding />
                  <span className='text-xl'>Custom profiles and more!</span>
                </div>
              </div>
              <Button className='w-full h-16 rounded-full bg-white text-black hover:bg-white hover:shadow-xl text-xl hover:text-primary'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className='flex mt-[70rem] text-black justify-between items-center max-w-7xl mx-auto gap-10 my-20'>
        <div className='flex flex-col space-y-10'>
          <div className='flex w-[40rem] space-y-10 justify-center overflow-hidden flex-col items-center  rounded-lg h-[24rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl font-bold text-center'>
              From clips to pics, share away with bigger file uploads
            </h1>
            <img src={biggeer} alt='biggeer' className=' top-[21.5rem]' />
          </div>
          <div className='flex w-[40rem] space-y-10 justify-center overflow-hidden flex-col items-center  rounded-lg h-[24rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl font-bold text-center'>
              Hype and meme with custom emoji anywhere
            </h1>
            <img src={emoji} alt='emoji' className=' top-[21.5rem]' />
          </div>
        </div>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col space-y-10'>
            <div className='flex w-[40rem] space-y-10 justify-center overflow-hidden flex-col items-center  rounded-lg h-[24rem] bg-[#f6f6f6]'>
              <h1 className='text-4xl font-bold text-center'>
                Stream apps and games in sweet, sweet HD
              </h1>
              <img src={swet} alt='swet' className=' top-[21.5rem]' />
            </div>
            <div className='flex w-[40rem] space-y-10 justify-center overflow-hidden flex-col items-center  rounded-lg h-[24rem] bg-[#f6f6f6]'>
              <h1 className='text-4xl font-bold text-center'>
                Unlock perks for your communities with 2 Server Boosts
              </h1>
              <img src={unlock} alt='unlock' className=' top-[21.5rem]' />
            </div>
          </div>
        </div>
      </div>
      <Button className='mx-auto flex bg-black w-56 rounded-full my-20 hover:bg-black hover:shadow-md h-16 text-xl'>
        Show all perks
      </Button>
      <Footer />
    </div>
  );
}
