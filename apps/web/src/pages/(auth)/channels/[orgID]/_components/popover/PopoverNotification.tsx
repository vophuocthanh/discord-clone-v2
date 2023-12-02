import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { BellOff, ChevronRight } from 'lucide-react';
import { RadioGroupNotification } from '../RadioGroupNotification';
import TooltipIcon from '@/components/TooltipIcon';

export default function PopoverNotification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center gap-4 p-2 rounded-md cursor-pointer select-none'>
          <TooltipIcon
            icon={<BellOff className='cursor-pointer' />}
            content={'Cài đặt thông báo'}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='mr-4 bg-black w-52'>
        <div className='flex items-center justify-between w-full pb-3 border-b border-primary-foreground/30'>
          <p>Tắt âm kênh</p>
          <ChevronRight className='cursor-pointer' />
        </div>
        <RadioGroupNotification></RadioGroupNotification>
      </PopoverContent>
    </Popover>
  );
}
