import PopoverGim from './_components/popover/PopoverGim';
import PopoverMessages from './_components/popover/PopoverMessages';
import PopoverNotification from './_components/popover/PopoverNotification';
import { Frame, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Component() {
  return (
    <div className='bg-[#1d202ab8]'>
      <header className='flex items-center justify-between p-3 text-2xl border-b border-primary-foreground/10 h-14 bg-[#1d202ab8] '>
        <div className='flex items-center gap-4'>
          <Frame />
          Browser Channels
        </div>
        <div className='flex items-center gap-4'>
          <PopoverMessages></PopoverMessages>
          <PopoverNotification></PopoverNotification>
          <PopoverGim></PopoverGim>
          <div className=''>
            <Input
              placeholder='Search'
              className='h-6 text-xs text-white rounded w-48 bg-[#1d202a]'
            />
          </div>
          <HelpCircle className='cursor-pointer' />
        </div>
      </header>
      <div className='p-6'>Hello</div>
    </div>
  );
}
