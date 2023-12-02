import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link, useParams } from '@/router';
import { HelpCircle, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MEMBERS = [
  {
    id: '001',
    displayName: 'Songoku',
    username: 'songoku',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    memberSince: '2022-01-01',
    joinedDiscord: '2022-01-01',
    joinMethod: 'Discord',
    roles: ['Admin'],
  },
  {
    id: '002',
    displayName: 'Songoku',
    username: 'songoku',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    memberSince: '2022-01-01',
    joinedDiscord: '2022-01-01',
    joinMethod: 'Discord',
    roles: ['Member'],
  },
  {
    id: '003',
    displayName: 'Songoku',
    username: 'songoku',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    memberSince: '2022-01-01',
    joinedDiscord: '2022-01-01',
    joinMethod: 'Discord',
    roles: ['Member'],
  },
];

export default function Component() {
  const { orgID } = useParams('/channels/:orgID/member-safety');
  const location = useLocation();
  console.log('location:', location);
  return (
    <div>
      <header className='flex items-center justify-between p-3 text-2xl border-b h-14 bg-[#1d202ab8]'>
        <div className='flex items-center gap-4'>
          <Users />
          Members
        </div>
        <div className='flex items-center gap-4'>
          {location.state?.channel && (
            <Link
              to='/channels/:orgID/:channelID'
              params={{ orgID: orgID, channelID: location.state.channel.id }}
              className='p-2 text-xs border border-gray-300'
            >
              Return to {location.state.channel.name}
            </Link>
          )}
          <HelpCircle className='cursor-pointer' />
        </div>
      </header>
      <div className='p-6 bg-zinc-900 h-[calc(100vh-3.5rem)]'>
        <div className='rounded-lg bg-primary-foreground/20'>
          <div className='p-4 border-b border-gray-400'>
            <h1>Recent Members</h1>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='flex items-center gap-2 text-white'>
                  <Checkbox className='w-6 h-6 border-gray-400 rounded' />
                  <span>Name</span>
                </TableHead>
                <TableHead className='text-white'>Member Since</TableHead>
                <TableHead className='text-white'>JOINED Discord</TableHead>
                <TableHead className='text-white'>Join Method</TableHead>
                <TableHead className='text-white'>Roles</TableHead>
                <TableHead className='text-white'>Signals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MEMBERS.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className='flex items-center gap-2'>
                    <Checkbox className='w-6 h-6 border-gray-400 rounded' />
                    <div className='flex gap-2'>
                      <img
                        src={member.avatar}
                        alt={member.displayName}
                        className='object-cover w-10 h-10 rounded-full'
                      />
                      <div>
                        <p className='text-green-500'>{member.displayName}</p>
                        <p>{member.username}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.memberSince}</TableCell>
                  <TableCell>{member.joinedDiscord}</TableCell>
                  <TableCell>{member.joinMethod}</TableCell>
                  <TableCell>{member.roles.map((role) => role)}</TableCell>
                  <TableCell />
                  <TableCell>
                    <button>View</button>
                    <button>Edit</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
