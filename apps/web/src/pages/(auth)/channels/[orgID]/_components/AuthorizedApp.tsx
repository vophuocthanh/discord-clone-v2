import React, { useState } from 'react';
import youtube from '@/assets/images/authorized-setting/youtube.webp';
import { Button } from '@/components/ui/button';
import { CheckboxAuthorized } from './checkbox/CheckboxAuthorized';

export default function AuthorizedApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className='w-[52rem] space-y-4'>
        <h1 className='text-2xl'>Authorised Apps</h1>
        <div className='border bg-transparent p-6 rounded-md'>
          <h3 className='text-sm uppercase font-bold text-primary-foreground/20'>
            Applications
          </h3>
          <p>
            Here's all the apps that are doing super cool things to make your
            Discord experience super cooler. If it gets too chilly, you can
            remove them at any time.
          </p>
        </div>
        <div
          className='border p-6 rounded-md space-y-4'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <img
                src={youtube}
                alt='Youtube'
                className='rounded-full h-14 w-14'
              />
              <span>Watch Together</span>
            </div>
            {isHovered && (
              <Button className='bg-transparent border-red-500 border hover:bg-red-500 text-white'>
                Deauthorise
              </Button>
            )}
          </div>
          <h3 className='text-sm uppercase font-bold text-primary-foreground/20'>
            About this App
          </h3>
          <p>
            Create and watch a playlist of YouTube videos with your friends.
            Your choice to share the remote or not.
          </p>
          <div className='flex flex-col'>
            <h3 className='text-sm uppercase font-bold text-primary-foreground/20'>
              Permissions
            </h3>
            <CheckboxAuthorized />
          </div>
        </div>
      </div>
    </div>
  );
}
