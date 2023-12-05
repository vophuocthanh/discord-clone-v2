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
            className='hover:underline select-none outline-none'
          >
            English (US)
          </Link>
          <ArrowDown className='w-4 h-4' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36 flex flex-col p-4 space-y-2 justify-center'>
        <DropdownMenuLabel>Dansk</DropdownMenuLabel>
        <DropdownMenuLabel>Deutsch</DropdownMenuLabel>
        <DropdownMenuLabel>Polski</DropdownMenuLabel>
        <DropdownMenuLabel>Tiếng Việt</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
