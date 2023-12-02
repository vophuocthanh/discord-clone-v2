import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import bannerSafety from '@/assets/images/bg-safety.svg';
import ios from '@/assets/images/ios.svg';
import linux from '@/assets/images/linux.svg';
import android from '@/assets/images/android.svg';
import mac from '@/assets/images/mac.svg';
import { DropdownButton } from './_components/dropdown/DropdownButton';
import { DropdownDownloadPublic } from './_components/dropdown/DropdownDownloadPublic';
import Footer from './_components/Footer';
import SectionInView from '@/components/SectionInView';
export default function Component() {
  return (
    <div className=' w-full h-full'>
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
          <SectionInView className='flex justify-between items-center max-w-6xl gap-10 mt-10'>
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
              className='ml-6 h-[30rem] w-[30rem]'
            />
          </SectionInView>
        </div>
      </header>
      <div className='flex text-black justify-between items-center max-w-6xl mx-auto gap-10 my-20'>
        <div className='flex flex-col space-y-10'>
          <div className='relative flex w-[36rem] overflow-hidden flex-col items-center space-y-6  rounded-lg h-[46rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl mt-28 font-bold'>iOS</h1>
            <Button className='bg-black text-white rounded-full text-xl p-8 hover:bg-black hover:shadow-md hover:scale-110'>
              Download
            </Button>
            <img src={ios} alt='ios' className='absolute top-[21.5rem]' />
          </div>
          <div className='relative flex w-[36rem] flex-col overflow-hidden items-center space-y-6  rounded-lg h-[40rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl mt-28 font-bold'>Linux</h1>
            <DropdownButton></DropdownButton>
            <img src={linux} alt='ios' className='absolute top-[16rem]' />
          </div>
          <div className='relative flex w-[36rem] flex-col overflow-hidden items-center space-y-6 rounded-lg h-96 bg-[#f6f6f6]'>
            <h1 className='text-4xl mt-28 font-bold'>Feeling experimental?</h1>
            <p>
              Try our Public Test Build and test new features before they
              launch.
            </p>
            <DropdownDownloadPublic></DropdownDownloadPublic>
          </div>
        </div>
        <div className='flex flex-col space-y-10'>
          <div className='relative flex w-[36rem] overflow-hidden flex-col items-center space-y-6  rounded-lg h-[46rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl mt-14 font-bold'>Android</h1>
            <Button className='bg-black text-white rounded-full text-xl p-8 hover:bg-black hover:shadow-md hover:scale-110'>
              Download
            </Button>
            <img src={android} alt='ios' className='absolute top-[13.5rem]' />
          </div>
          <div className='relative flex w-[36rem] overflow-hidden flex-col items-center space-y-6  rounded-lg h-[38rem] bg-[#f6f6f6]'>
            <h1 className='text-4xl mt-14 font-bold'>Mac</h1>
            <Button className='bg-black text-white rounded-full text-xl p-8 hover:bg-black hover:shadow-md hover:scale-110'>
              Download
            </Button>
            <img src={mac} alt='ios' className='absolute top-[13.5rem]' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
