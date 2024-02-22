import { Category } from '@/apis/categories';
import TooltipIcon from '@/components/TooltipIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Lock, Plus } from 'lucide-react';

interface Props {
  category: Category;
}

export default function AddChannelModal({ category }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipIcon
          icon={<Plus className='cursor-pointer' />}
          content='Add channel'
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] gap-0 bg-primary-foreground/10 p-3'>
        <h1 className='mb-0 text-xl font-bold'> Create Channel </h1>
        <p className='mt-0 text-xs'> In {category.name}</p>
        <div className='mt-4'>
          <p> Channel Type</p>
        </div>
        <div className='mt-4'>
          <p className='text-xs font-bold uppercase'> Channel Name </p>
          <Input className='mt-2 ' placeholder='New Channel' />
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex gap-2'>
            <Lock />
            <span>Private Channel</span>
          </div>
          <Switch />
        </div>
        <p className='mt-2'>
          {' '}
          By making this category, you agree to our terms and conditions{' '}
        </p>
        <div className='flex justify-end gap-2 mt-4'>
          <Button variant='link' className='text-white'>
            Cancel
          </Button>
          <Button>Create Channel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
