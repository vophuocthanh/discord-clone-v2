import PopoverMember from './PopoverMember';

const CATEGORIES = [
  {
    id: 1,
    categoryName: 'Đà Nẵng',
    members: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Online',
    members: [
      {
        id: 1,
        name: 'Phước Thạnh',
        avatar:
          'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
      },
      {
        id: 2,
        name: 'Tom',
        avatar:
          'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Offline',
    members: [
      {
        id: 1,
        name: 'Nobita',
        avatar:
          'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
      },
    ],
  },
];

export default function MemberList() {
  return (
    <div className='flex flex-col gap-8'>
      {CATEGORIES.map((category) => (
        <div className='flex flex-col gap-2' key={category.id}>
          <p className='text-sm uppercase'>
            {category.categoryName} - {category.members.length}
          </p>
          <div className='flex flex-col gap-4'>
            {category.members.map((member) => (
              <PopoverMember member={member} key={member.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
