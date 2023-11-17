import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { removeToken } from '@/lib/storage';
import { useNavigate } from '@/router';
import { LogOut, Settings } from 'lucide-react';
import { useMemo } from 'react';

export default function SettingModal() {
  const navigate = useNavigate();

  const SETTINGS = useMemo(
    () => [
      {
        key: 'logout',
        name: 'Activity Setting',
        children: [
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
            <div>
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
        <div className='w-2/3 bg-primary-foreground/20'></div>
      </DialogContent>
    </Dialog>
  );
}
