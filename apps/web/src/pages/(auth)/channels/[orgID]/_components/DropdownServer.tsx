import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DropdownServer() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-2'>
          <Link
            to='/nitro'
            className='outline-none select-none hover:underline'
          >
            English (US)
          </Link>
          <ArrowDown className='w-4 h-4' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col justify-center p-4 space-y-2 w-36'>
        <DropdownMenuLabel>Dansk</DropdownMenuLabel>
        <DropdownMenuLabel>Deutsch</DropdownMenuLabel>
        <DropdownMenuLabel>Polski</DropdownMenuLabel>
        <DropdownMenuLabel>Tiếng Việt</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
