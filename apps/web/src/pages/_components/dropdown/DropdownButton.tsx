import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DropdownButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='flex h-16 gap-4 px-6 text-xl text-white bg-black rounded-full hover:bg-black hover:text-white hover:shadow-xl'>
          Download
          <span>
            <ChevronDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex w-48' align='end'>
        <div className='w-full'>
          <div className='flex flex-col p-4'>
            <Button className='text-black bg-transparent hover:bg-gray-200 hover:underline hover:text-primary'>
              deb
            </Button>
            <Button className='text-black bg-transparent hover:bg-gray-200 hover:underline hover:text-primary'>
              tar.gz
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
