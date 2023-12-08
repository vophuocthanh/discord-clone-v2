import { Hono } from 'hono';

export const router = new Hono();

router
  .get('/', (c) =>
    c.json([
      {
        id: '1',
        icon: 'https://enouvo.com/wp-content/uploads/2022/07/cropped-logo-vien-trang-file-in-01.png',
        name: 'Enouvo',
      },
      {
        id: '2',
        icon: 'https://static.ybox.vn/2022/11/3/1667994393514-uyen182xp9pj-avatar.png',
        name: 'Axon Active',
      },
    ])
  )
  .get('/:orgId/channels', (c) =>
    c.json([
      {
        id: '1',
        name: 'Class 1',
        category: {
          id: 1,
          name: 'Class',
        },
      },
      {
        id: '2',
        name: 'Class 2',
        category: {
          id: 1,
          name: 'Class',
        },
      },
      {
        id: '3',
        name: 'Class 1',
        category: {
          id: 2,
          name: 'Class Audio',
        },
      },
      {
        id: '4',
        name: 'Class 2',
        category: {
          id: 2,
          name: 'Class Audio',
        },
      },
    ])
  )
  .get('/:orgId/members', (c) =>
    c.json([
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
    ])
  )
  .get('/:orgId/channels/:channelId/messages', (c) =>
    c.json([
      {
        id: 1,
        sender: {
          id: 1,
          name: 'John Doe',
          avatar:
            'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        },
        createdAt: '2022-01-01T00:00:00.000Z',
        message: 'Hey, how are you?',
      },
    ])
  )
  .get('/:orgId/channels/:channelId/members', (c) =>
    c.json([
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
    ])
  );
