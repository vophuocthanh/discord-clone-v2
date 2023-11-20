import TooltipIcon from '@/components/TooltipIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { removeToken } from '@/lib/storage';
import { useNavigate } from '@/router';
import { Frame, LogOut, Settings } from 'lucide-react';
import { useMemo } from 'react';
import frame from '@/assets/images/frame.png';

export default function SettingModal() {
  const navigate = useNavigate();

  const SETTINGS = useMemo(
    () => [
      {
        key: 'logout',
        name: 'Activity Setting',
        children: [
          {
            name: 'Hồ Sơ',
            icon: <Settings />,
          },
          {
            name: 'Bảo Mật & An Toàn',
            icon: <Settings />,
          },
          {
            name: 'Trung Tâm Gia Đình',
            icon: <Settings />,
          },
          {
            name: 'Thiết Bị',
            icon: <Settings />,
          },
          {
            name: 'Kết Nối',
            icon: <Settings />,
          },
          {
            name: 'Yêu Cầu Kết Bạn',
            icon: <Settings />,
          },
          {
            name: 'Log Out',
            icon: <LogOut />,
            onClick: () => {
              removeToken();
              navigate('/login');
            },
          },
        ],
      },
    ],
    [navigate]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Settings className='cursor-pointer' />
      </DialogTrigger>
      <DialogContent className='flex h-screen max-w-full gap-0 p-0'>
        <div className='flex justify-end w-1/3 bg-primary-foreground/10'>
          <div className='w-1/2 p-2 mt-20'>
            <p className='p-2 text-xs font-bold'> USER SETTINGS </p>
            <div className='py-2 border-b border-primary-foreground/10'>
              {SETTINGS.map((setting) => (
                <div key={setting.key}>
                  <div className='p-2 rounded-sm bg-primary-foreground/10'>
                    {setting.name}
                  </div>
                  {setting.children.map((child) => (
                    <div key={child.name}>
                      <div
                        className='flex justify-between p-2 cursor-pointer'
                        onClick={child.onClick}
                      >
                        {child.name}
                        {child.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-2/3 h-screen p-6 overflow-auto bg-primary-foreground/20'>
          <div className=''>
            <h1 className='mb-6 text-2xl font-bold'>Tài Khoản Của Tôi</h1>
            <div className='w-[43rem] h-[22.5rem] bg-black rounded-sm p-3'>
              <div className='flex items-center justify-between w-full gap-4'>
                <div className='flex gap-4'>
                  <img
                    src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
                    className='object-cover rounded-full w-14 h-14'
                    alt=''
                  />
                  <div className='flex flex-col gap-2'>
                    <h1>Phuoc Thanh</h1>
                    <TooltipIcon
                      icon={
                        <Frame className='text-green-300 cursor-pointer select-none' />
                      }
                      content={'Tên gần đây nhất là Bin2003#'}
                    />
                  </div>
                </div>
                <Button className='h-8 rounded'>
                  Chỉnh Sửa Hồ Sơ Người Dùng
                </Button>
              </div>
              <div className='w-full h-64 p-3 mt-6 space-y-6 rounded-sm bg-primary-foreground/10'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium uppercase'>
                      Tên hiển thị
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium uppercase'>
                      Tên đăng nhập
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium uppercase'>Email</span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Thêm</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium uppercase'>
                      Số diện thoại{' '}
                      <span className='text-blue-400 underline capitalize cursor-pointer'>
                        Hiển thị
                      </span>
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
              </div>
              <hr className='w-full my-10 border-primary-foreground/10' />
              <h2 className='mb-6 text-xl font-medium'>Mật Khẩu Và Xác Thực</h2>
              <div className='flex flex-col gap-4 pb-6 border-b border-primary-foreground/10'>
                <Button className='w-48 rounded'>Đổi Mật Khẩu</Button>
                <div className='flex gap-40'>
                  <div className='flex flex-col gap-2'>
                    <span className='text-sm font-medium uppercase text-primary-foreground/30'>
                      Ứng Dụng Xác Thực
                    </span>
                    <p className='text-sm text-primary-foreground/30'>
                      Bạn phải xác minh tài khoản trước khi bật xác thực hai lớp
                    </p>
                  </div>
                  <img src={frame} alt='Frame Image' className='object-cover' />
                </div>
              </div>
              <div className='my-6'>
                <div className='flex flex-col gap-2'>
                  <span className='text-sm font-medium uppercase text-primary-foreground/30'>
                    Ngừng Sử dụng Tài Khoản
                  </span>
                  <p className='mb-4 text-sm text-primary-foreground/30'>
                    Nếu khóa tài khoản, bạn có thể khôi phục lại tài khoản bất
                    cứ lúc nào.
                  </p>
                  <div className='flex items-center gap-10 mb-10'>
                    <Button className='bg-red-500 rounded hover:bg-red-700'>
                      Vô Hiệu Hóa Tài Khoản
                    </Button>
                    <Button className='bg-transparent border border-red-500 rounded hover:bg-red-500'>
                      Xóa Tài Khoản
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
