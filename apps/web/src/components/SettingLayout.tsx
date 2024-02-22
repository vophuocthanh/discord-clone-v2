import { cn } from '@/lib/utils';
import { Rocket, Store, User } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function SettingLayout() {
  const location = useLocation();
  return (
    <div className='flex w-full'>
      <div className='relative bg-primary-foreground/10 text-primary-foreground 0 w-[16rem] flex flex-col'>
        <div className='overflow-scroll h-3/4'>
          <div className='p-2 pt-2 space-y-2 text-xl text-primary-foreground/60'>
            <Link
              to='/channels/@me'
              className={cn(
                'px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20 rounded-sm',
                {
                  'bg-primary-foreground/20':
                    location.pathname === '/channels/@me',
                }
              )}
            >
              <User />
              <p> Friends </p>
            </Link>
            <Link
              to='/nitro'
              className={cn(
                'px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20 rounded-sm',
                {
                  'bg-primary-foreground/20': location.pathname === '/nitro',
                }
              )}
            >
              <Rocket />
              <p> Nitro </p>
            </Link>
            <Link
              to='/shop'
              className={cn(
                'px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20 rounded-sm',
                {
                  'bg-primary-foreground/20': location.pathname === '/shop',
                }
              )}
            >
              <Store />
              <p> Shop</p>
            </Link>
          </div>
        </div>
        <div className='absolute bottom-0 flex items-center justify-between w-full p-3'>
          <div className='flex gap-2'>
            <img
              src='https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg'
              width={40}
              className='object-cover rounded-full aspect-square'
            />
            <div>
              <p className='text-base font-bold'>Vo Phuoc Thanh</p>
              <p className='text-sm'>bin2003</p>
            </div>
          </div>
          <div className='flex gap-2'></div>
        </div>
      </div>
      <div className='w-[calc(100%-16rem)]'>
        <Outlet />
      </div>
    </div>
  );
}
