import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner-download.svg';
import { Download } from 'lucide-react';
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
      <header className='mx-auto bg-[#23272a] justify-center flex'>
        <div className='h-[40rem] max-w-6xl mt-12 text-white flex flex-col items-center'>
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
          <SectionInView className='flex justify-between max-w-6xl gap-10 mt-20'>
            <div className=''>
              <h1 className='text-6xl font-bold'>
                GET DISCORD <br /> FOR ANY <br /> DEVICE
              </h1>
              <p className='mt-10'>
                An adventure awaits. Hang out with your friends on our desktop
                app <br /> and keep the conversation going on mobile.
              </p>
              <div className='mt-10 flex gap-10 items-center'>
                <Button className='flex h-16 gap-4 px-6 text-xl text-black bg-white rounded-full hover:bg-white hover:text-primary hover:shadow-xl'>
                  <span>
                    <Download />
                  </span>
                  Download for Windows
                </Button>
                <span>Windows 7 or higher</span>
              </div>
            </div>
            <img src={banner} alt='banner' className='ml-6' />
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
