import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
// interface Props {
//   member?: User;
// }

export default function PopoverUser() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center gap-4 px-2 rounded cursor-pointer hover:bg-primary-foreground/20'>
          <img
            src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
            alt='avatar'
            width={30}
            height={30}
            className='object-cover w-8 h-8 rounded-full aspect-square'
          />
          <div className='flex flex-col'>
            <p className='text-base font-bold'>Songoku</p>
            <p className='text-sm text-primary-foreground/60'>Online</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent side='top' className='z-10 p-0 ml-20 border-none w-80'>
        <div
          className={cn('rounded-t-md h-16 relative')}
          style={{ backgroundColor: 'yellow' }}
        >
          <div className='absolute w-20 h-20 p-2 rounded-full bg-slate-950 -bottom-10 left-4'>
            <img
              src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
              alt='avatar'
              className='object-cover w-full h-full rounded-full'
            />
          </div>
        </div>
        <div className='pt-8 pb-1 bg-gray-700 rounded-b-md'>
          <div className='flex flex-col gap-1 p-4 m-4 bg-black rounded-md'>
            <h1 className='text-xl font-bold'>Vo Phuoc Thanh</h1>
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
              {/* {member?.roles?.map((role) => (
                <Badge
                  key={role}
                  className='flex items-center gap-2 cursor-pointer bg-primary-foreground/10 hover:bg-primary-foreground/20'
                >
                  <span className='flex w-3 h-3 bg-green-400 rounded-full'></span>
                  {role}
                </Badge>
              ))} */}
            </div>
            <p>Ghi chú</p>
            <Input
              placeholder='Nhấp để thêm ghi chú'
              className='h-6 p-2 text-sm bg-transparent'
            />
            <Input
              placeholder={`Tin nhắn @ bin2003`}
              className='p-2 mt-2 text-sm bg-transparent border border-primary/10'
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
