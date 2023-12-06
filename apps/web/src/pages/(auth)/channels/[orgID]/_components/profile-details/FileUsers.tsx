import { Input } from '@/components/ui/input';
import UploadImage from './UploadImage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function FileUsers() {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <div className='flex gap-8 text-white'>
      <div className='flex flex-col space-y-6'>
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          Tên Hiện Thị
        </span>
        <Input
          defaultValue={'Phước Thạnh'}
          className='mt-2 bg-[#2E2E2E] rounded w-96'
        />
        <hr className='h-1 w-96 bg-primary-foreground/20' />
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          Đại Từ Nhân Xưng
        </span>
        <Input
          placeholder='Nhập đại từ nhân xưng của bạn'
          className='mt-2 bg-[#2E2E2E] rounded w-96'
        />
        <hr className='h-1 w-96 bg-primary-foreground/20' />
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          ĐỔi ảnh đại diện
        </span>
        <div className='flex items-center justify-between gap-2'>
          <UploadImage />
          <span className='hover:underline'>Xóa Ảnh Đại Diện</span>
        </div>
        <hr className='h-1 w-96 bg-primary-foreground/20' />
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          Trang Trí Ảnh Đại Diện
        </span>
        <Button className='w-56'>Thay Đổi Trang Trí</Button>
        <hr className='h-1 w-96 bg-primary-foreground/20' />
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          Hiệu Ứng Hồ Sơ
        </span>
        <Button className='w-56'>Thay Đổi Hiệu Ứng</Button>
        <hr className='h-1 w-96 bg-primary-foreground/20' />
        <span className='text-xl font-bold uppercase text-primary-foreground/50'>
          Giới Thiệu Về Tôi
        </span>
        <p className='text-sm text-primary-foreground/50'>
          Bạn có thể sử dụng các mã đánh dấu và đường dẫn liên kết nếu muốn
        </p>
        <textarea
          id='content'
          className='w-full p-4 bg-transparent border border-gray-400 rounded-lg outline-none resize-none min-h-[150px]'
          placeholder='Enter description'
          defaultValue={'Phước Thạnh - 08:00'}
        />
        <hr className='h-1 w-96 bg-primary-foreground/20' />
      </div>
      <div className='w-full'>
        <span className='font-bold uppercase'>Xem Trước</span>
        <div className='z-10 p-0 my-10 mr-4 border-none w-80'>
          <div
            className={cn('rounded-t-md h-16 relative')}
            style={{ backgroundColor: '#2E2E2E' }}
          >
            <div className='absolute w-20 h-20 p-2 rounded-full bg-slate-950 -bottom-10 left-4'>
              <img
                src='https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg'
                alt='bin2003'
                className='object-cover w-full h-full rounded-full'
              />
            </div>
          </div>
          <div className='pt-8 pb-1 bg-gray-700 rounded-b-md'>
            <div className='flex flex-col gap-1 p-4 m-4 space-y-2 bg-black rounded-md'>
              <h1 className='text-xl font-bold'>Phước Thạnh</h1>
              <span className='text-sm text-primary-foreground/60'>
                bin2003
              </span>
              <hr className='h-2 my-2 border-t border-primary-foreground/60' />
              <p className='font-bold'>Giới thiệu về tôi</p>
              <span>Siêu vip pro 😂</span>
              <p className='font-bold'>Tùy Chỉnh Hồ Sơ Của Tôi</p>
              <div className='flex items-center gap-4'>
                <img
                  src='https://logo.com/image-cdn/images/kts928pd/production/f55017e8a845f082cee16b8e637bdd13ddfa41c0-365x367.png?w=1080&q=72'
                  alt='discord'
                  className='object-cover w-20 rounded-md h-30'
                />
                <div className='flex flex-col'>
                  <span className='text-lg text-primary-foreground/60'>
                    Hồ Sơ Người Dùng
                  </span>
                  <span className='text-lg text-primary-foreground'>
                    {`${hours}:${minutes}:${seconds} trôi qua`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
