import TooltipIcon from '@/components/TooltipIcon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

export default function AddChannelModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipIcon
          icon={<Plus className='cursor-pointer' />}
          content='Add channel'
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <h1> Hello </h1>
      </DialogContent>
    </Dialog>
  );
}
