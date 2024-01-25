import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bg from '@/assets/images/bg-discover.png';
import { Search } from 'lucide-react';
import SectionInView from '@/components/SectionInView';
import Footer from './_components/Footer';
import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import Gaming from './_components/Gaming';
import Entertainment from './_components/Entertainment';
import Education from './_components/Education';
import bgGroup from '@/assets/images/bg-group.png';
import ScienceTech from './_components/ScienceTech';
import Music from './_components/Music';
import ProjectAll from './_components/ProjectAll';

export default function Component() {
  const [tab, setTab] = useState('all/All');
  const SETTINGS: {
    key: string;
    name?: string;
    icon?: React.ReactNode;
    children?: {
      name: string;
      icon?: React.ReactNode;
      onClick?: () => void;
    }[];
  }[] = useMemo(
    () => [
      {
        key: 'all',
        children: [
          {
            name: 'All',
          },
          {
            name: 'Gaming',
          },
          {
            name: 'Entertainment',
          },
          {
            name: 'Education',
          },
          {
            name: 'Science & Tech',
          },
          {
            name: 'Music',
          },
        ],
      },
    ],
    []
  );
  return (
    <div className='w-full h-full text-white bg-white'>
      <div
        className='flex flex-col mx-auto items-center w-full bg-no-repeat bg-cover h-[28rem]'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <header className='flex items-center justify-between w-full h-20 mt-7'>
          <div className='flex items-center justify-between w-full gap-20 mx-auto max-w-7xl'>
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
      <div className='w-full my-20 text-black bg-white'>
        <div className='flex items-center gap-10 mx-auto max-w-7xl '>
          <div className='w-[100rem] bg-gray-100 h-14 flex items-center rounded'>
            <Input
              className='w-[73rem] rounded bg-gray-300 text-lg'
              placeholder='Explore communities'
              type='text'
            ></Input>
          </div>
          <Button className='w-14 h-14'>
            <Search />
          </Button>
        </div>
        <div className='flex h-full gap-0 p-0 mx-auto text-black max-w-7xl'>
          <div className='w-64 p-2'>
            <div>
              {SETTINGS.map((setting) => (
                <div key={setting.key} className='py-3'>
                  {setting.children?.map((child) => (
                    <div key={child.name}>
                      <div
                        className={cn(
                          'flex justify-between p-2 cursor-pointer',
                          {
                            'bg-gray-300 rounded':
                              tab === setting.key + '/' + child.name,
                          }
                        )}
                        onClick={
                          child.onClick
                            ? child.onClick
                            : () => setTab(setting.key + '/' + child.name)
                        }
                      >
                        {child.name}
                        {child.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-full p-6 text-black'>
            {(() => {
              switch (tab) {
                case 'all/All':
                  return <ProjectAll />;
                case 'all/Gaming':
                  return <Gaming />;
                case 'all/Entertainment':
                  return <Entertainment />;
                case 'all/Education':
                  return <Education />;
                case 'all/Science & Tech':
                  return <ScienceTech />;
                case 'all/Music':
                  return <Music />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
      <SectionInView className='text-black flex-col justify-center flex bg-[#5865f2] w-full h-[23rem]'>
        <div className='flex items-center justify-center max-w-5xl gap-10 mx-auto'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-white'>
              Have a server you want to add to Discovery?
            </h1>
            <Button className='h-16 mx-auto mt-10 text-xl bg-black rounded-full w-96 hover:bg-black'>
              Make Your Community Public
            </Button>
          </div>
        </div>
      </SectionInView>
      <SectionInView className='w-full h-[500px] text-black bg-white'>
        <div className='flex items-center max-w-5xl gap-10 mx-auto '>
          <div className='flex flex-col max-w-[300px]'>
            <p className='text-4xl font-bold'>Find a place where you belong</p>
            <p className='mt-4 leading-8'>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
            <Button className='bg-black rounded-full'>Join Discord</Button>
          </div>
          <img src={bgGroup} alt='bg-group' className='object-cover' />
        </div>
      </SectionInView>
      <Footer />
    </div>
  );
}
