import youtube from '@/assets/images/authorized-setting/youtube.webp';
import { Button } from '@/components/ui/button';
import { CheckboxAuthorized } from './checkbox/CheckboxAuthorized';

export default function AuthorizedApp() {
  return (
    <div className='w-[52rem] space-y-4'>
      <h1 className='text-2xl'>Authorised Apps</h1>
      <div className='p-6 bg-transparent border rounded-md'>
        <h3 className='text-sm font-bold uppercase text-primary-foreground/20'>
          Applications
        </h3>
        <p>
          Here's all the apps that are doing super cool things to make your
          Discord experience super cooler. If it gets too chilly, you can remove
          them at any time.
        </p>
      </div>
      <div className='p-6 space-y-4 border rounded-md group'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <img
              src={youtube}
              alt='Youtube'
              className='rounded-full h-14 w-14'
            />
            <span>Watch Together</span>
          </div>
          <Button className='hidden text-white bg-transparent border border-red-500 group-hover:block hover:bg-red-500'>
            Deauthorise
          </Button>
        </div>
        <h3 className='text-sm font-bold uppercase text-primary-foreground/20'>
          About this App
        </h3>
        <p>
          Create and watch a playlist of YouTube videos with your friends. Your
          choice to share the remote or not.
        </p>
        <div className='flex flex-col'>
          <h3 className='text-sm font-bold uppercase text-primary-foreground/20'>
            Permissions
          </h3>
          <CheckboxAuthorized />
        </div>
      </div>
    </div>
  );
}
