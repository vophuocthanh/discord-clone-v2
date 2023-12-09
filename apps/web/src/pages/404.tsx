import { Link } from 'react-router-dom';
import logo from '@/assets/images/background-black.png';
import { Button } from '@/components/ui/button';
import notFound from '@/assets/images/404.gif';
import Footer from './_components/Footer';

export default function Component() {
  return (
    <div className='w-full h-full'>
      <header className='mx-auto justify-center flex'>
        <div className='flex flex-col h-[calc(100vh-10rem)] items-center max-w-6xl mt-12 text-white'>
          <div className='flex items-center justify-between w-full text-black gap-20 mb-40'>
            <Link to='/'>
              <img src={logo} alt='logo' className='text-black' />
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
              <Button className='text-white  rounded-full hover:shadow-xl'>
                Open Discord
              </Button>
            </Link>
          </div>
          <div className='flex items-center justify-between max-w-6xl text-black gap-10'>
            <div className='w-1/2 flex-col flex space-y-4'>
              <h1 className='text-6xl font-black text-primary'>WRONG TURN?</h1>
              <p className='mt-10'>
                You look lost, stranger. You know what helps when you’re lost? A
                piping hot bowl of noodles. Take a seat, we’re frantically at
                work here cooking up something good. Oh, you need something to
                read? These might help you:
              </p>
              <div className='flex flex-col'>
                <Link
                  to='https://discordstatus.com/'
                  className='text-blue-400 text-xl hover:text-blue-600'
                >
                  Status Page
                </Link>
                <Link
                  to='/'
                  className='text-blue-400 text-xl hover:text-blue-600'
                >
                  @Discord
                </Link>
                <Link
                  to='/servers'
                  className='text-blue-400 text-xl hover:text-blue-600'
                >
                  Discord Support
                </Link>
              </div>
            </div>
            <img src={notFound} alt='404' className='ml-6 h-72 w-72' />
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}
