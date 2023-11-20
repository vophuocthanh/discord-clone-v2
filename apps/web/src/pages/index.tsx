import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bg from '@/assets/images/background.png';
import bgGroup from '@/assets/images/bg-group.png';
import bgGroupRight from '@/assets/images/bg-group-right.png';
import bgGroupLeft from '@/assets/images/bg-group-left.png';
import bgCall from '@/assets/images/bg-call.png';
import bgStars from '@/assets/images/stars.png';
import {
  ChevronDown,
  Download,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { useEffect } from 'react';
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

export default function Component() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-from-sides');
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
        className='flex flex-col mx-auto items-center w-full bg-no-repeat bg-cover h-[38rem]'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <header className='flex items-center justify-between h-20 max-w-6xl'>
          <div className='flex items-center justify-between w-full gap-20'>
            <img src={logo} alt='logo' />
            <div className='flex items-center gap-10'>
              <Link to='/'>Download</Link>
              <Link to='/'>Nitro</Link>
              <Link to='/'>Discover</Link>
              <Link to='/'>Safety</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Blog</Link>
              <Link to='/'>Careers</Link>
            </div>
            <Link to='/login'>
              <Button className='text-black bg-white hover:bg-white hover:shadow-xl'>
                Login
              </Button>
            </Link>
          </div>
        </header>
        <div className='flex flex-col items-center justify-center max-w-[800px] mt-20'>
          <h1 className='text-6xl font-bold'>IMAGINE A PLACE...</h1>
          <p className='mt-10 text-xl text-center'>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className='flex gap-6 mt-20'>
          <Button className='flex h-16 gap-4 px-6 text-xl text-black bg-white rounded-full hover:bg-white hover:text-primary hover:shadow-xl'>
            <span>
              <Download />
            </span>
            Download for Windows
          </Button>
          <Button className='h-16 px-6 text-xl bg-black rounded-full hover:bg-black hover:shadow-xl'>
            Open Discord in your browser
          </Button>
        </div>
      </div>
      <div className='w-full h-[500px] text-black bg-white'>
        <div className='flex items-center max-w-5xl gap-10 mx-auto '>
          <img
            src={bgGroup}
            alt='bg-group'
            className='object-cover fade-in-from-sides'
          />
          <div className='flex flex-col max-w-[300px] fade-in-from-sides'>
            <p className='text-4xl font-bold'>
              Create an invite-only place where you belong
            </p>
            <p className='mt-4 leading-8'>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
      <div className='text-black bg-[#F6F6F6] w-full h-[34rem]'>
        <div className='flex items-center max-w-5xl gap-10 pt-20 mx-auto'>
          <div className='flex flex-col max-w-[300px] fade-in-from-sides'>
            <p className='text-4xl font-bold'>Where hanging out is easy</p>
            <p className='mt-4 leading-8'>
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <img
            src={bgGroupRight}
            alt='bg-group-right'
            className='object-cover fade-in-from-sides'
          />
        </div>
      </div>
      <div className='text-black w-full h-[34rem] bg-white'>
        <div className='flex items-center max-w-5xl gap-10 pt-20 mx-auto fade-in-from-sides'>
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
      </div>
      <div className='text-black bg-[#F6F6F6] w-full h-[74rem]'>
        <div className='flex flex-col items-center max-w-5xl pt-20 mx-auto fade-in-from-sides'>
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
      </div>
      <footer className='w-full bg-black h-[44rem]'>
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
          <div className='grid w-full grid-cols-4 gap-4 '>
            <div className='p-4 space-y-2'>
              <p className='text-primary'>Products</p>
              <p className=''>Download</p>
              <p className=''>Nitro</p>
              <p className=''>Status</p>
            </div>
            <div className='p-4 space-y-2'>
              <p className='text-primary'>Company</p>
              <p className=''>About</p>
              <p className=''>Branding</p>
              <p className=''>Newsroom</p>
            </div>
            <div className='p-4 space-y-2'>
              <p className='text-primary'>Resources</p>
              <p className=''>College</p>
              <p className=''>Support</p>
              <p className=''>Safety</p>
              <p className=''>Blog</p>
              <p className=''>Feedback</p>
              <p className=''>Build</p>
              <p className=''>StreamKit</p>
              <p className=''>Creators</p>
              <p className=''>Community</p>
            </div>
            <div className='p-4 space-y-2'>
              <p className='text-primary'>Policies</p>
              <p className=''>Terms</p>
              <p className=''>Privacy</p>
              <p className=''>Status</p>
              <p className=''>Cookie Settings</p>
              <p className=''>Acknowledgements</p>
              <p className=''>Licenses</p>
              <p className=''>Moderation</p>
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
    </div>
  );
}
