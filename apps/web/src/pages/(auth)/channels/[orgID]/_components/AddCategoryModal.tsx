import { createCategory } from '@/apis/categories';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { FolderPlus, Lock } from 'lucide-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from '@/router';

export default function AddCategoryModal() {
  const [category, setCategory] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [open, setOpen] = useState(false);
  const { orgID } = useParams('/channels/:orgID/:channelID');
  const queryClient = useQueryClient();

  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orgs', orgID],
      });
      setOpen(false);
    },
  });

  const handleCreateCategory = () => {
    if (!isPrivate) {
      createCategoryMutation.mutate({
        orgID: orgID,
        createCategoryDto: {
          name: category,
          isPrivate,
        },
      });
    }
  };
  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <div className='w-full flex justify-between items-center gap-2 px-2 py-1 hover:bg-primary rounded cursor-pointer'>
          <span> Create Category </span>
          <FolderPlus />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-primary-foreground/10'>
        <h1 className='text-xl font-bold'> Create Category </h1>
        <div>
          <p className='uppercase text-xs font-bold'> Category Name </p>
          <Input
            className=' mt-2'
            placeholder='New Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Lock />
            <span>Private Category</span>
          </div>
          <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
        </div>
        <p> By making this category, you agree to our terms and conditions </p>
        <div className='flex justify-end gap-2'>
          <Button
            variant='link'
            className='text-white'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            disabled={category.trim() === ''}
            onClick={handleCreateCategory}
          >
            {isPrivate ? 'Next' : 'Create Category'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
