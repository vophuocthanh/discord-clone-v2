import { Headphones, Mic, Settings } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className='absolute bottom-0 flex items-center justify-between w-full p-3'>
      <div className='flex items-center gap-4'>
        <img
          src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
          alt='avatar'
          width={40}
          height={40}
          className='object-cover w-10 h-10 rounded-full aspect-square'
        />
        <div className='flex flex-col'>
          <p className='text-base font-bold'>Songoku</p>
          <p className='text-sm text-primary/60'>Online</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Mic className='cursor-pointer' />
        <Headphones className='cursor-pointer' />
        <Settings className='cursor-pointer' />
      </div>
    </div>
  );
}
