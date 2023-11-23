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
  .get('/:orgId/channels/:channelId/messages', (c) =>
    c.json([
      {
        id: 1,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'Hello, how are you?',
      },
      {
        id: 2,
        sender: {
          name: 'Jane Smith',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'I am good, thanks for asking.',
      },
      {
        id: 3,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 4,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 5,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 6,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 7,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 8,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 9,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 10,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 11,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 12,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 13,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
      },
      {
        id: 14,
        sender: {
          name: 'John Doe',
          avatar:
            'https://st.quantrimang.com/photos/image/2019/03/14/HinhnenGoku-18.jpg',
        },
        createAt: '2022-01-01T00:00:00.000Z',
        message: 'What about you?',
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
