import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { FolderPlus } from 'lucide-react';

export default function AddCategoryModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='w-full flex justify-between items-center gap-2 px-2 py-1 hover:bg-primary rounded cursor-pointer'>
          <span> Create Category </span>
          <FolderPlus />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-primary-foreground/10'>
        <h1 className='text-xl font-bold'> Create Category </h1>
        <div>
          <p className='uppercase text-xs font-bold'> Category Name </p>
          <Input className=' mt-2' placeholder='New Category' />
        </div>
        <div className='flex justify-between'>
          <div></div>
          <Switch id='airplane-mode' />{' '}
        </div>
        <p> By Making this category you agree to our terms and conditions </p>
      </DialogContent>
    </Dialog>
  );
}
