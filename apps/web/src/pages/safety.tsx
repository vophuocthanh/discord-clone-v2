import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import bannerSafety from '@/assets/images/bg-safety.svg';
import safetyLibrary from '@/assets/images/safety-library.svg';
import privacyHub from '@/assets/images/safety-privacy.svg';
import parentHub from '@/assets/images/safety-parent.svg';
import transparencyHub from '@/assets/images/safety-transparent.svg';
import safetyNewHub from '@/assets/images/safety-new.svg';
import policyHub from '@/assets/images/safety-privacy.svg';
import Footer from './_components/Footer';
import SectionInView from '@/components/SectionInView';
import { ArrowRight } from 'lucide-react';
export default function Component() {
  return (
    <div className='w-full h-full '>
      <header className='mx-auto bg-[#5865f2] justify-center flex'>
        <div className='h-[calc(100vh-4.5rem)] max-w-6xl mt-12 text-white flex flex-col items-center'>
          <div className='flex items-center justify-between w-full gap-20'>
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
          <SectionInView className='flex items-center justify-between max-w-6xl gap-10'>
            <div className=''>
              <h1 className='text-6xl font-bold'>DISCORD SAFETY CENTER</h1>
              <p className='mt-10'>
                Discord is the place to hang out with your friends and build
                community around shared interests. We’re committed to creating a
                safe, inclusive and welcoming place.
              </p>
              <p className='mt-10'>
                That’s why we’re working to make Discord private and safe, by
                design. Learn how to shape the best experience for yourself and
                find the resources you need, whether you’re a teen, parent,
                educator, or long-time Discord user.
              </p>
            </div>
            <img
              src={bannerSafety}
              alt='banner'
              className='ml-6 h-[36rem] w-[36rem]'
            />
          </SectionInView>
        </div>
      </header>
      <div className='flex flex-col mx-auto mt-10 h-100% text-black max-w-7xl'>
        <h1 className='text-5xl font-bold text-center'>
          Building Safer Spaces
        </h1>
        <div className='flex justify-center w-full aspect-video h-[30rem]'>
          <iframe
            width='840'
            height='396'
            src='https://www.youtube.com/embed/LvtpbOarcWE'
            title='Discord: A Safer Place for Teens to Hang Out Online'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mt-10 rounded-md'
          ></iframe>
        </div>
      </div>
      <div className='text-black flex justify-between bg-[#f6f6f6] w-full gap-10 py-20 h-100%'>
        <div className='flex flex-col mx-auto mt-20 space-y-20 max-w-7xl'>
          <div className='flex items-center justify-between gap-20'>
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Safety Library</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-library' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
            <img
              src={safetyLibrary}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
          </div>
          <div className='flex items-center justify-between gap-20'>
            <img
              src={privacyHub}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Privacy Hub</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-privacy' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between gap-20'>
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Parent Hub</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-parents' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
            <img
              src={parentHub}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
          </div>
          <div className='flex items-center justify-between gap-20'>
            <img
              src={transparencyHub}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Transparency Hub</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-transparency' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between gap-20'>
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Safety News Hub</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-news' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
            <img
              src={safetyNewHub}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
          </div>
          <div className='flex items-center justify-between gap-20'>
            <img
              src={policyHub}
              alt='safety'
              className='w-[30rem] h-[20rem] rounded-md'
            />
            <div className='flex flex-col mr-auto space-y-4'>
              <h1 className='text-5xl font-bold'>Policy Hub</h1>
              <p className='w-[30rem] font-light'>
                Everything you could ever want to know about safety on Discord.
                <br />
                Whether you’re a user, a moderator, or a parent, discover all of
                our <br /> tools and resources and how to use them.
              </p>
              <div className='flex items-center gap-4 hover:scale-x-95 hover:transition-all'>
                <Link to='/safety-policies' className='text-semibold'>
                  Explore more
                </Link>
                <ArrowRight className='text-white rounded-full bg-primary' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
