import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

export default function EventsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='px-3 py-2 flex gap-2 w-full hover:bg-primary-foreground/20'>
          <Calendar />
          <p> Events </p>
        </button>
      </DialogTrigger>
      <DialogContent className='max-w-[425px] text-black rounded p-0 m-0'>
        <DialogHeader className='flex gap-6 items-center p-4 bg-primary-foreground/30'>
          <Calendar className='w-8 h-8' />
          <DialogTitle>Events</DialogTitle>
          {/* <span className='border-y border-red-900 w-1 h-6'></span> */}
          <Button className='cursor-pointer h-8 rounded'>Create Events</Button>
        </DialogHeader>
        <div className='bg-white text-black px-6 flex flex-col text-center'>
          <div className='w-full h-full flex justify-center space-y-2 items-center flex-col gap-4 my-10'>
            <Calendar className='w-20 h-20' />
            <h1 className='text-lg'>Không có chủ đề</h1>
            <h2>There are no upcoming events.</h2>
            <p className='text-sm text-gray-500'>
              Schedule an event for any planned activity in your server.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
