import Avatar from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { User } from '@/lib/type';
import { cn } from '@/lib/utils';
interface Props {
  member: User;
}

export default function PopoverMember({ member }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          key={member.id}
          className='flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-primary-foreground/20'
        >
          <Avatar src={member.avatar} alt={member.name} />
          <p className='font-bold text-green-400'> {member.name} </p>
        </div>
      </PopoverTrigger>
      <PopoverContent side='left' className='z-10 p-0 mr-4 border-none w-80'>
        <div
          className={cn('rounded-t-md h-16 relative')}
          style={{ backgroundColor: member.backgroundColor }}
        >
          <div className='absolute w-20 h-20 p-2 rounded-full bg-slate-950 -bottom-10 left-4'>
            <img
              src={member.avatar}
              alt={member.name}
              className='object-cover w-full h-full rounded-full'
            />
          </div>
        </div>
        <div className='pt-8 pb-1 bg-gray-700 rounded-b-md'>
          <div className='flex flex-col gap-1 p-4 m-4 bg-black rounded-md'>
            <h1 className='text-xl font-bold'>{member.name}</h1>
            <span className='text-sm text-primary-foreground/60'>bin2003</span>
            <hr className='h-2 my-2 border-t border-primary-foreground/60' />
            <p className='font-bold'>Giới thiệu về tôi</p>
            <span>Siêu vip pro 😂</span>
            <p className='font-bold'>Gia nhập từ</p>
            <div className='flex items-center gap-2'>
              <span>{new Date().toLocaleDateString()}</span>
              <span className='w-1 h-1 rounded-full bg-primary-foreground'></span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <p className='font-bold'>Vai trò</p>
            <div className='flex items-center gap-2'>
              {member?.roles?.map((role) => (
                <Badge
                  key={role}
                  className='flex items-center gap-2 cursor-pointer bg-primary-foreground/10 hover:bg-primary-foreground/20'
                >
                  <span className='flex w-3 h-3 bg-green-400 rounded-full'></span>
                  {role}
                </Badge>
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
