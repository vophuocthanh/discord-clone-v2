import { getOrg } from '@/apis/orgs';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useParams } from '@/router';
import { ChevronDown, Crown, Home } from 'lucide-react';
import { useQuery } from 'react-query';

export default function PopoverSidebar() {
  const { orgID } = useParams('/channels/:orgID/:channelID');
  const { data: org } = useQuery(['orgs', orgID], () => {
    return getOrg(orgID);
  });
  console.log('org:', org);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='flex items-center justify-between p-3 border-b cursor-pointer select-none h-14 border-primary-foreground/10'>
          <div className='flex items-center gap-2 text-2xl'>
            <Home />
            <h1 className='font-bold'>{org?.name}</h1>
          </div>
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='p-0 bg-black w-72'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Nâng Cấp Máy Chủ</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Mời Mọi Người</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Thư Mục App</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Hiện Tất Cả Kênh</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Cài Đặt Thông Báo</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Cài Đặt Bảo Mật</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Chỉnh Sửa Hồ Sơ Máy Chủ</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Ẩn Các Kênh Bị Tắt Âm</h1>
            <Crown className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between p-3 border-b border-primary-foreground/10'>
            <h1>Rời Khỏi Phòng</h1>
            <Crown className='cursor-pointer' />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
