import Avatar from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { User } from '@/types';
interface Props {
  member: User;
}

export default function PopoverMember({ member }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          key={member.id}
          className='flex cursor-pointer items-center gap-4 hover:bg-primary/10 p-2 rounded-md'
        >
          <Avatar src={member.avatar} alt={member.name} />
          <p className='text-green-700 font-bold'> {member.name} </p>
        </div>
      </PopoverTrigger>
      <PopoverContent side='left' className='w-80'>
        Hello
      </PopoverContent>
    </Popover>
  );
}
