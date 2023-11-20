import TooltipIcon from '@/components/TooltipIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { removeToken } from '@/lib/storage';
import { User } from '@/lib/type';
import { useNavigate } from '@/router';
import { Frame, LogOut, Settings } from 'lucide-react';
import { useMemo } from 'react';
import frame from '@/assets/images/frame.png';

interface Props {
  member: User;
}

const PopoverRoles = [
  {
    id: 1,
    name: 'Admin',
    username: 'bin2003',
    phone: '0123456789',
  },
];
export default function SettingModal({ member }: Props) {
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
      <DialogContent className='max-w-full h-screen flex gap-0 p-0'>
        <div className='w-1/3 bg-primary-foreground/10 flex justify-end'>
          <div className='w-1/2 mt-20 p-2'>
            <p className='text-xs font-bold p-2'> USER SETTINGS </p>
            <div className='border-b border-primary-foreground/10 py-2'>
              {SETTINGS.map((setting) => (
                <div key={setting.key}>
                  <div className='p-2 bg-primary-foreground/10 rounded-sm'>
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
        <div className='w-2/3 bg-primary-foreground/20 p-6 overflow-auto h-screen'>
          <div className=''>
            <h1 className='text-2xl font-bold mb-6'>Tài Khoản Của Tôi</h1>
            <div className='w-[43rem] h-[22.5rem] bg-black rounded-sm p-3'>
              <div className='w-full flex gap-4 justify-between items-center'>
                <div className='flex gap-4'>
                  <img
                    src='https://st.quantrimang.com/photos/image/2019/03/13/HinhnenGoku-0.jpg'
                    className='w-14 h-14 object-cover rounded-full'
                    alt=''
                  />
                  <div className='flex flex-col gap-2'>
                    <h1>Phuoc Thanh</h1>
                    <TooltipIcon
                      icon={
                        <Frame className='cursor-pointer select-none text-green-300' />
                      }
                      content={'Tên gần đây nhất là Bin2003#'}
                    />
                  </div>
                </div>
                <Button className='rounded h-8'>
                  Chỉnh Sửa Hồ Sơ Người Dùng
                </Button>
              </div>
              <div className='bg-primary-foreground/10 w-full h-64 mt-6 p-3 space-y-6 rounded-sm'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='uppercase font-medium text-sm'>
                      Tên hiển thị
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='uppercase font-medium text-sm'>
                      Tên đăng nhập
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='uppercase font-medium text-sm'>Email</span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Thêm</Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='uppercase font-medium text-sm'>
                      Số diện thoại{' '}
                      <span className='text-blue-400 underline cursor-pointer capitalize'>
                        Hiển thị
                      </span>
                    </span>
                    <span className='text-sm'>Phuoc Thanh</span>
                  </div>
                  <Button>Chỉnh Sửa</Button>
                </div>
              </div>
              <hr className='border-primary-foreground/10 my-10 w-full' />
              <h2 className='text-xl font-medium mb-6'>Mật Khẩu Và Xác Thực</h2>
              <div className='flex flex-col gap-4 border-b border-primary-foreground/10 pb-6'>
                <Button className='rounded w-48'>Đổi Mật Khẩu</Button>
                <div className='flex gap-40'>
                  <div className='flex gap-2 flex-col'>
                    <span className='uppercase font-medium text-sm text-primary-foreground/30'>
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
                <div className='flex gap-2 flex-col'>
                  <span className='uppercase font-medium text-sm text-primary-foreground/30'>
                    Ngừng Sử dụng Tài Khoản
                  </span>
                  <p className='text-sm text-primary-foreground/30 mb-4'>
                    Nếu khóa tài khoản, bạn có thể khôi phục lại tài khoản bất
                    cứ lúc nào.
                  </p>
                  <div className='flex items-center gap-10 mb-10'>
                    <Button className='rounded bg-red-500 hover:bg-red-700'>
                      Vô Hiệu Hóa Tài Khoản
                    </Button>
                    <Button className='rounded bg-transparent border-red-500 border hover:bg-red-500'>
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
