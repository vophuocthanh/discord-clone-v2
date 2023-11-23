import PopoverMember from './PopoverMember';
import { groupBy } from 'lodash-es';

const MEMBERS = [
  {
    id: 1,
    name: 'John Doe',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    roles: ['Admin'],
    backgroundColor: '#4000ff',
    category: {
      id: 1,
      name: 'Đà Nẵng',
    },
  },
  {
    id: 2,
    name: 'Phước Thạnh',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    roles: ['Member', 'Moderator'],
    backgroundColor: '#ff0000',
    category: {
      id: 2,
      name: 'Online',
    },
  },
  {
    id: 3,
    name: 'Tom',
    avatar:
      'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
    roles: ['Member'],
    backgroundColor: '#00ff5e',
    category: {
      id: 3,
      name: 'Offline',
    },
  },
];

export default function MemberList() {
  console.log(groupBy(MEMBERS, 'category.name'));
  return (
    <div className='flex flex-col gap-8'>
      {Object.entries(groupBy(MEMBERS, 'category.name')).map(
        ([category, members]) => (
          <div key={category} className='flex flex-col gap-4'>
            <p className='font-bold'>
              {category} - {members.length}
            </p>
            <div className='flex flex-col gap-4'>
              {members.map((member) => (
                <PopoverMember member={member} key={member.id} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
