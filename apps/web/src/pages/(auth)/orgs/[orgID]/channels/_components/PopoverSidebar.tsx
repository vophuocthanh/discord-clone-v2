import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown, Crown, Home } from 'lucide-react';

const GROUPSIDEBAR = [
  {
    id: 1,
    role: 'Admin',
    roles: [{ id: 1, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> }],
  },
  {
    id: 2,
    role: 'Moderator',
    roles: [
      { id: 1, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
      { id: 2, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
    ],
  },
  {
    id: 3,
    role: 'Member',
    roles: [
      { id: 1, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
      { id: 2, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
    ],
  },
  {
    id: 4,
    role: 'Member',
    roles: [
      { id: 1, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
      { id: 2, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> },
    ],
  },
  {
    id: 5,
    role: 'Member',
    roles: [{ id: 1, name: 'Nâng Cấp Máy Chủ', icon: <Crown /> }],
  },
];

export default function PopoverSidebar() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center justify-between p-3 border-b cursor-pointer h-14 border-primary-foreground/10 select-none'>
          <div className='flex items-center gap-2 text-2xl'>
            <Home />
            <h1 className='font-bold'>Discord</h1>
          </div>
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='bg-black w-72 p-0'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Nâng Cấp Máy Chủ</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Mời Mọi Người</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Thư Mục App</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Hiện Tất Cả Kênh</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Cài Đặt Thông Báo</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Cài Đặt Bảo Mật</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Chỉnh Sửa Hồ Sơ Máy Chủ</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Ẩn Các Kênh Bị Tắt Âm</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between border-b border-primary-foreground/10 p-3'>
            <h1>Rời Khỏi Phòng</h1>
            <Crown className='cursor-pointer' />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
