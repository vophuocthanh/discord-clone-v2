import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { postOrgs } from '@/apis/orgs';
import { toast } from 'sonner';

export function CreateNewOrgs() {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await postOrgs(name, icon);
      toast.success(` ${name} created successfully!`);
      setName('');
      setIcon('');
    } catch (error) {
      toast.error('Failed to create org.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex items-center justify-center text-green-500 rounded-full cursor-pointer w-14 h-14 bg-primary-foreground/10'>
          <Plus />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px] h-72 rounded'>
        <DialogHeader>
          <DialogTitle>Create New Orgs</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username'>Icon</Label>
            <Input
              id='username'
              value={icon}
              placeholder='Enter your icon'
              onChange={(e) => setIcon(e.target.value)}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='button' loading={isLoading} onClick={handleSubmit}>
            Create Orgs
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
