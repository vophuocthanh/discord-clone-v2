import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bg from '@/assets/images/bg-discover.png';
import bgGroup from '@/assets/images/bg-group.png';
import bgGroupRight from '@/assets/images/bg-group-right.png';
import bgGroupLeft from '@/assets/images/bg-group-left.png';
import bgCall from '@/assets/images/bg-call.png';
import bgStars from '@/assets/images/stars.png';
import { Download, Search } from 'lucide-react';
import { useEffect } from 'react';
import SectionInView from '@/components/SectionInView';
import Footer from './_components/Footer';
import { Input } from '@/components/ui/input';

export default function Component() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('');
      elements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        if (elementRect.top <= window.innerHeight / 2) {
          element.classList.add('animated', 'fadeInFromSides');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='w-full bg-white'>
      <div
        className='flex flex-col mx-auto items-center w-full bg-no-repeat bg-cover h-[28rem]'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <header className='flex items-center justify-between mt-7 h-20 max-w-6xl'>
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
                Login
              </Button>
            </Link>
          </div>
        </header>
        <div className='flex flex-col items-center justify-center max-w-6xl mt-20'>
          <h1 className='text-5xl font-bold'>
            FIND YOUR COMMUNITY ON DISCORD.
          </h1>
          <p className='mt-10 text-xl text-center'>
            From gaming, to music, to learning, there's a place for you.
          </p>
        </div>
      </div>
      <div className='w-full h-[500px] text-black bg-white mt-20'>
        <div className='flex items-center max-w-5xl gap-10 mx-auto '>
          <div className='w-[55rem] bg-gray-100 h-14 flex items-center rounded'>
            <Input
              className='w-[54rem] rounded bg-gray-300 text-lg'
              placeholder='Explore communities'
              type='text'
            ></Input>
          </div>
          <Button className='w-14 h-14'>
            <Search />
          </Button>
        </div>
      </div>
      <SectionInView className='text-black flex-col justify-center flex bg-[#5865f2] w-full h-[23rem]'>
        <div className='flex items-center justify-center max-w-5xl gap-10  mx-auto'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-white'>
              Have a server you want to add to Discovery?
            </h1>
            <Button className='mt-10 w-96 mx-auto rounded-full bg-black hover:bg-black text-xl h-16'>
              Make Your Community Public
            </Button>
          </div>
        </div>
      </SectionInView>
      <SectionInView className='text-black w-full h-[34rem] bg-white'>
        <div className='flex items-center max-w-5xl gap-10 pt-20 mx-auto'>
          <img src={bgGroupLeft} alt='bg-group-left' className='object-cover' />
          <div className='flex flex-col max-w-[300px]'>
            <p className='text-4xl font-bold'>From few to a fandom</p>
            <p className='mt-4 leading-8'>
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </SectionInView>
      <SectionInView className=' bg-[#F6F6F6] w-full h-[74rem] text-black'>
        <div className='flex flex-col items-center max-w-5xl pt-20 mx-auto'>
          <div className='flex text-center flex-col max-w-[1000px]'>
            <h1 className='text-6xl font-bold'>
              Reliable tech for staying close
            </h1>
            <p className='mt-4 leading-8'>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src={bgCall} alt='bg-call' className='object-cover' />
          <img src={bgStars} alt='bg-stars' className='object-cover mt-10' />
          <h1 className='text-3xl font-bold'>Ready to start your journey?</h1>
          <Button className='flex h-16 gap-4 px-6 mt-10 text-xl rounded-full hover:shadow-xl'>
            <span>
              <Download />
            </span>
            Download for Windows
          </Button>
        </div>
      </SectionInView>
      <Footer />
    </div>
  );
}
