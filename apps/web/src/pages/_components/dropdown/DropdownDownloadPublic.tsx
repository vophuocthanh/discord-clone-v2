import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export function DropdownDownloadPublic() {
  const [position, setPosition] = useState('bottom');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='flex h-16 gap-4 px-6 text-xl text-white bg-black rounded-full hover:bg-black hover:text-white hover:shadow-xl'>
          Download Public Test Build
          <span>
            <ChevronDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-80 flex mx-auto' side='bottom'>
        {/* <div className='w-full'>
          <div className='flex flex-col p-4'>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Mac
            </Button>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Linux deb
            </Button>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Linux tar.gz
            </Button>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Windows 32-bit
            </Button>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Windows 64-bit
            </Button>
            <Button className='bg-transparent text-black hover:bg-gray-200 hover:underline hover:text-primary'>
              Windows 64-bit(Canary)
            </Button>
          </div>
        </div> */}
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='top'>Mac</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>
            Linux deb
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>
            Linux tar.gz
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>
            Windows 32-bit
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>
            Windows 64-bit
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>
            Windows 64-bit(Canary)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
