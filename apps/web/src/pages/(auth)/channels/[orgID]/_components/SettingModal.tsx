import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { removeToken } from '@/lib/storage';
import { cn } from '@/lib/utils';
import { useNavigate } from '@/router';
import { LogOut, Settings } from 'lucide-react';
import { useMemo, useState } from 'react';
import MyAccount from './MyAccount';
import Profiles from './Profiles';
import NitroSetting from './NitroSetting';
import AuthorizedApp from './AuthorizedApp';
import Subscription from './Subscription';
import ServerUpgrade from './ServerUpgrade';

export default function SettingModal() {
  const [tab, setTab] = useState('user-settings/My Account');
  const navigate = useNavigate();

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
        key: 'user-settings',
        name: 'User Settings',
        children: [
          {
            name: 'My Account',
          },
          {
            name: 'Profiles',
          },
          {
            name: 'Authorized Apps',
          },
        ],
      },
      {
        key: 'billing-settings',
        name: 'Billing Settings',
        children: [
          {
            name: 'Nitro',
          },
          {
            name: 'Server Upgrades',
          },
          {
            name: 'Subscriptions',
          },
        ],
      },
      {
        key: 'logout',
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
          <div className='w-1/2 mt-10 p-2'>
            <div>
              {SETTINGS.map((setting) => (
                <div key={setting.key} className='border-b py-3'>
                  {setting.name && (
                    <div className='p-2 rounded-sm text-xs font-bold uppercase'>
                      {setting.name}
                    </div>
                  )}
                  {setting.children?.map((child) => (
                    <div key={child.name}>
                      <div
                        className={cn(
                          'flex justify-between p-2 cursor-pointer',
                          {
                            'bg-primary-foreground/20':
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
        </div>
        <div className='w-2/3 p-6 h-screen overflow-auto bg-primary-foreground/20'>
          <div className='mt-10'>
            {(() => {
              switch (tab) {
                case 'user-settings/My Account':
                  return <MyAccount />;
                case 'user-settings/Profiles':
                  return <Profiles />;
                case 'user-settings/Authorized Apps':
                  return <AuthorizedApp />;
                case 'billing-settings/Nitro':
                  return <NitroSetting />;
                case 'billing-settings/Server Upgrades':
                  return <ServerUpgrade />;
                case 'billing-settings/Subscriptions':
                  return <Subscription />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
