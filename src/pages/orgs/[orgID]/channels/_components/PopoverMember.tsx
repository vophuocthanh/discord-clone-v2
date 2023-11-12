import Avatar from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { User } from '@/types';
import { Frame, Pencil } from 'lucide-react';
interface Props {
  member: User;
}

const PopoverRoles = [
  {
    id: 1,
    name: 'Admin',
  },
  {
    id: 2,
    name: 'Moderator',
  },
  {
    id: 3,
    name: 'Member',
  },
];

export default function PopoverMember({ member }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          key={member.id}
          className='flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-primary/10'
        >
          <Avatar src={member.avatar} alt={member.name} />
          <p className='font-bold text-green-700'> {member.name} </p>
        </div>
      </PopoverTrigger>
      <PopoverContent side='left' className='mr-4 w-80 bg-primary/20'>
        <div>
          <div className='flex items-center justify-between'>
            <Avatar
              src={member.avatar}
              alt={member.name}
              className='w-28 h-28'
            />
            <div className='flex flex-col gap-4'>
              <Pencil className='cursor-pointer' />
              <Frame className='cursor-pointer' />
            </div>
          </div>
          <div className='flex flex-col gap-1 p-3 mt-4 bg-black rounded-md'>
            <h1 className='text-xl font-bold'>{member.name}</h1>
            <span className='text-sm text-primary/60'>bin2003</span>
            <hr className='h-2 my-2 border-t border-primary/60' />
            <p className='font-bold'>Giới thiệu về tôi</p>
            <span>Siêu vip pro 😂</span>
            <p className='font-bold'>Gia nhập từ</p>
            <div className='flex items-center gap-2'>
              <span>{new Date().toLocaleDateString()}</span>
              <span className='w-1 h-1 rounded-full bg-primary'></span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <p className='font-bold'>Vai trò</p>
            <div className='flex items-center gap-2'>
              {PopoverRoles.map((role) => (
                <span
                  className='px-3 py-1 text-sm rounded bg-primary/10'
                  key={role.id}
                >
                  {role.name}
                </span>
              ))}
            </div>
            <p>Ghi chú</p>
            <Input
              placeholder='Nhấp để thêm ghi chú'
              className='h-6 p-2 text-sm bg-transparent'
            />
            <Input
              placeholder={`Tin nhắn @ ${member.name}`}
              className='p-2 mt-2 text-sm bg-transparent border border-primary/10'
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
