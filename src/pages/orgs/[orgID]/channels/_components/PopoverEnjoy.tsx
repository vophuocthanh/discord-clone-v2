import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Annoyed } from 'lucide-react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEmojiSelect: (emoji: any) => void;
}

export default function PopoverEnjoy({ onEmojiSelect }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Annoyed className='w-6 h-6 cursor-pointer' />
      </PopoverTrigger>
      <PopoverContent side='top' className='w-96'>
        <Picker
          data={data}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onEmojiSelect={(emoji: any) => onEmojiSelect(emoji)}
        />
      </PopoverContent>
    </Popover>
  );
}
