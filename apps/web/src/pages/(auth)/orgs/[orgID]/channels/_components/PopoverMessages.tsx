import TooltipIcon from '@/components/TooltipIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MessageCircle, X } from 'lucide-react';

export default function PopoverMessages() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center gap-4 p-2 rounded-md cursor-pointer select-none'>
          <TooltipIcon
            icon={<MessageCircle className='cursor-pointer' />}
            content={'Chủ đề'}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='mr-52 bg-black w-[40rem] p-0'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4 p-3'>
            <div className='flex items-center gap-2 px-2 border-r w-[8rem] border-primary-foreground/20'>
              <MessageCircle />
              <h1>Chủ đề</h1>
            </div>
            <div className='flex items-center w-full justify-between'>
              <Input
                placeholder='Tìm kiếm chủ đề'
                className='h-6 text-xs text-white rounded w-48'
              />
              <div className='flex items-center gap-2'>
                <Button className='cursor-pointer h-8 rounded'>Tạo</Button>
                <X className='cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='bg-primary-foreground/10 p-2 h-96'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-4'>
              <MessageCircle className='w-32 h-32' />
              <h1 className='text-lg'>Không có chủ đề</h1>
              <p className='text-sm text-primary-foreground/50'>
                Tập trung vào cuộc trò chuyện với một chủ đề, một kênh văn bản
                tạm thời
              </p>
              <Button className='cursor-pointer h-10 rounded'>
                Tạo chủ đề
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
