import { Link } from 'react-router-dom';
import logo from '@/assets/images/server/logo.svg';
import { Button } from '@/components/ui/button';
import Footer from './_components/Footer';
import { DropdownServer } from './(auth)/channels/[orgID]/_components/DropdownServer';
import bg from '@/assets/images/background.png';
import { Input } from '@/components/ui/input';
import { Minus } from 'lucide-react';
import { useState } from 'react';
export default function Component() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='w-full h-full '>
      {open ? (
        <div className='fixed bottom-8 right-8 flex flex-col justify-center text-black w-72'>
          <div className='flex items-center bg-primary text-white px-4 justify-center text-center  py-2'>
            <h1 className='text-center'>Help</h1>
            <Minus
              onClick={handleOpen}
              className='w-8 h-8 ml-auto transition-all cursor-pointer'
            />
          </div>
          <div className='p-4 bg-white'>
            <Input
              placeholder='How can we help'
              className='w-full rounded border'
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleOpen}
          className='fixed bottom-8 right-8 bg-primary rounded-full hover:bg-primary w-24 transition-all'
        >
          Help
        </Button>
      )}
      <header className='flex items-center justify-between w-full gap-20 text-blue-600 max-w-6xl mx-auto py-4'>
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
            <Button className='text-blue-600 text-lg bg-white rounded-full hover:bg-white hover:shadow-xl'>
              Sign in
            </Button>
          </Link>
        </div>
      </header>
      <div
        className='mx-auto bg-[#5865f2] justify-center flex flex-col items-center w-full bg-no-repeat bg-cover h-96'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='w-full mx-auto flex'>
          <div className='max-w-6xl mx-auto flex flex-col space-y-10'>
            <h1 className='text-5xl font-bold text-center'>Help Center</h1>
            <Input
              className='w-[30rem] bg-white text-black pl-6 rounded'
              placeholder='Search'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-auto my-20 h-100% text-black max-w-7xl space-y-6'>
        <h1 className='text-2xl text-center font-bold'>
          Need help? We've got your back.
        </h1>
        <p className='text-center font-semibold'>
          From account settings to permissions, find help for everything Discord{' '}
          <br />
          If you're new to Discord and looking for tips, check out our{' '}
          <Link
            to='/nitro'
            className='text-xl text-primary font-bold hover:underline'
          >
            Beginner's Guide
          </Link>
        </p>
      </div>
      <div className=''></div>
      <Footer />
    </div>
  );
}
