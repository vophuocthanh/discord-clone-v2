import { ChevronDown, Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Org } from '@/lib/type';
import AddCategoryModal from './AddCategoryModal';

interface Props {
  org?: Org;
}

export default function OrgMenuDropDown({ org }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='flex items-center justify-between p-3 border-b h-14 border-primary-foreground/10 hover:bg-primary-foreground/20'>
          <div className='flex items-center gap-2 text-2xl'>
            <Home />
            <h1 className='font-bold'> {org?.name} </h1>
          </div>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-64 p-2'>
        <AddCategoryModal />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
