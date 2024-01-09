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
import { Footprints, Plus } from 'lucide-react';
import { toast } from 'sonner';
// import { postChannel } from '@/apis/channels';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Toggle } from '@/components/ui/toggle';

export function CreateChannel() {
  const [channelName, setChannelName] = useState('');
  // const [type, setType] = useState('');
  // const [isPrivate, setIsPrivate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // await postChannel(channelName, type, isPrivate);
      toast.success(` ${channelName} created successfully!`);
      setChannelName('');
      // setType('');
      // setIsPrivate(false);
    } catch (error) {
      toast.error('Failed to create channel.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px] h-72 rounded'>
        <DialogHeader>
          <DialogTitle>Create New Channel</DialogTitle>
        </DialogHeader>
        <RadioGroup defaultValue='comfortable'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='default' id='r1' />
            <Label htmlFor='r1'>TEXT</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='comfortable' id='r2' />
            <Label htmlFor='r2'>VOICE</Label>
          </div>
        </RadioGroup>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='uppercase text-sm'>
              Channel name
            </Label>
            <Input
              id='name'
              value={channelName}
              placeholder='Enter your channel name'
              onChange={(e) => setChannelName(e.target.value)}
              className='col-span-3'
            />
          </div>
        </div>
        <Toggle
          aria-label='Chuyển đổi riêng tư'
          // checked={isPrivate}
          // onChange={() => setIsPrivate((prev) => !prev)}
        >
          <Footprints className='h-4 w-4' />
        </Toggle>
        <DialogFooter>
          <Button type='button' loading={isLoading} onClick={handleSubmit}>
            Create Orgs
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
