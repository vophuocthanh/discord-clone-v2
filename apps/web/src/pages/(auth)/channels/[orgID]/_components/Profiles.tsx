import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import FileServer from './profile-details/FileServer';
import FileUsers from './profile-details/FIleUsers';

export default function Profiles() {
  const [tab, setTab] = useState('file-users/Hồ Sơ Người Dùng');
  const SETTINGS: {
    key: string;
    name?: string;
    icon?: React.ReactNode;
    children?: {
      name: string;
      icon?: React.ReactNode;
      onClick?: () => void;
    }[];
  }[] = useMemo(
    () => [
      {
        key: 'file-users',
        children: [
          {
            name: 'Hồ Sơ Người Dùng',
          },
          {
            name: 'Hồ Sơ Máy Chủ',
          },
        ],
      },
    ],
    []
  );
  return (
    <div className=''>
      <h1 className='mb-6 text-2xl font-bold'>Hồ Sơ</h1>
      <div className='flex flex-col h-full gap-0 p-0 mx-auto text-black'>
        <div className='w-full'>
          <div>
            {SETTINGS.map((setting) => (
              <div
                key={setting.key}
                className='flex w-full gap-2 py-3 text-white'
              >
                {setting.children?.map((child) => (
                  <div key={child.name} className='text-center'>
                    <div
                      className={cn(
                        'flex justify-between p-2 cursor-pointer text-center',
                        {
                          'border-b border-primary-foreground/60':
                            tab === setting.key + '/' + child.name,
                        }
                      )}
                      onClick={
                        child.onClick
                          ? child.onClick
                          : () => setTab(setting.key + '/' + child.name)
                      }
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
        <div className='w-full h-full text-black'>
          {(() => {
            switch (tab) {
              case 'file-users/Hồ Sơ Người Dùng':
                return <FileUsers />;
              case 'file-users/Hồ Sơ Máy Chủ':
                return <FileServer />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
