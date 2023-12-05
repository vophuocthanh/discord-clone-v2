import { Link } from 'react-router-dom';
import logo from '@/assets/images/bg-blog.svg';
import { Button } from '@/components/ui/button';
import Footer from './_components/Footer';
import bannerBlog from '@/assets/images/banner-blog.png';
import engineeringDeveloper from '@/assets/images/engineering-developer.png';
import discordUplevel from '@/assets/images/dicord-uplevel.png';
import nitroMember from '@/assets/images/nitro-member.jpg';
import congratsDiscord from '@/assets/images/congrats-discord.png';
import hangingDiscord from '@/assets/images/hanging-discord.png';
import gamePlay from '@/assets/images/game-discord.png';
import pushingDiscord from '@/assets/images/pushing-discord.png';
import enjoyDiscord from '@/assets/images/enjoy-premium.png';

const BLOGS = [
  {
    id: 1,
    img: congratsDiscord,
    name: 'Engineering & Developer',
    title: 'How to upgrade your Discord Nitro',
  },
  {
    id: 2,
    img: nitroMember,
    name: 'Discord HQ',
    title: '@Everyone`s a Member: Get Two Weeks of Nitro. on Us',
  },
  {
    id: 3,
    img: hangingDiscord,
    name: 'How To Discord',
    title: '9 Tips for Hanging Out on Discord',
  },
  {
    id: 4,
    img: gamePlay,
    name: 'How To Discord',
    title: 'Scariest Games to Paly and Stream width Your Friends on Discord',
  },
  {
    id: 5,
    img: pushingDiscord,
    name: 'Engineering & Developer',
    title:
      'Maxjourney: Pushing Discord’s Limits with a Million+ Online Users in a Single Server',
  },
  {
    id: 6,
    img: enjoyDiscord,
    name: 'Engineering & Developer',
    title: 'Developers on Discord: Enjoy Premium App Subscriptions and more!',
  },
];
export default function Component() {
  return (
    <div className='w-full h-full '>
      <header className='mx-auto bg-[#404eed] justify-center flex'>
        <div className='h-[calc(100vh-20rem)] w-full px-10 mt-12 text-white flex flex-col items-center'>
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
          <img
            src={bannerBlog}
            alt='banner-blog'
            className='w-[82rem] h-[26rem] absolute bottom-28 rounded-md'
          />
        </div>
      </header>
      <div className='text-black flex flex-col justify-between bg-[#f6f6f6] w-full gap-10 py-20 h-100%'>
        <div className='flex uppercase flex-col mx-auto mt-28 max-w-[90rem]'>
          <span className='text-xl font-bold text-primary'>How to Discord</span>
          <p className='text-6xl font-extrabold hover:text-primary hover:transition-all'>
            Complete Your Look In The Shop, Now Open To All
          </p>
        </div>
        <div className='w-full flex gap-6 max-w-[90rem]  mx-auto'>
          <div className='flex flex-col space-y-2'>
            <img
              src={engineeringDeveloper}
              alt='engineering-developer'
              className='w-[46rem] h-[20rem] rounded-md'
            />
            <span className='font-bold uppercase text-primary'>
              Engineering & Developer
            </span>
            <p className='text-xl font-bold hover:text-primary'>
              The DDevs Server Celebrates 250k Members!
            </p>
          </div>
          <div className='flex flex-col space-y-2'>
            <img
              src={discordUplevel}
              alt='engineering-developer'
              className='w-[46rem] h-[20rem] rounded-md'
            />
            <span className='font-bold uppercase text-primary'>
              Engineering & Developer
            </span>
            <p className='text-xl font-bold hover:text-primary'>
              The DDevs Server Celebrates 250k Members!
            </p>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-6 max-w-[90rem] mx-auto'>
          {BLOGS.map((blog) => (
            <div className='flex flex-col space-y-2' key={blog.id}>
              <img
                src={blog.img}
                alt='engineering-developer'
                className='w-[32rem] h-[16rem] rounded-md'
              />
              <span className='font-bold uppercase text-primary'>
                {blog.name}
              </span>
              <p className='text-2xl font-bold hover:text-primary'>
                {blog.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
