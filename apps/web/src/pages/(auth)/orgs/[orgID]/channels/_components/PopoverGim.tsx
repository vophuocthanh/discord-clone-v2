import TooltipIcon from '@/components/TooltipIcon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Pin } from 'lucide-react';

export default function PopoverGim() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center gap-4 p-2 rounded-md cursor-pointer select-none'>
          <TooltipIcon
            icon={<Pin className='cursor-pointer' />}
            content={'Tin nhắn đã được gim'}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='mr-40 bg-black w-80 p-0'>
        <div className='flex flex-col'>
          <div className='text-lg p-3'>
            <h1>Tin nhắn đã được gim</h1>
          </div>
          <div className='bg-primary-foreground/10'>
            <div className='p-2 h-60'>
              <div className='w-full h-full bg-primary-foreground/20'></div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
