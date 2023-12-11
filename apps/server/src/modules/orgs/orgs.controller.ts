import { db } from '@/lib/db';
import { Hono } from 'hono';

export const router = new Hono();

router
  .get('/', async (c) => {
    const orgs = await db.org.findMany({});
    return c.json(orgs);
  })
  .post('/', async (c) => {
    const { name, icon } = await c.req.json<{ name: string; icon: string }>();
    const orgs = await db.org.create({
      data: {
        name: name,
        icon: icon,
      },
    });
    return c.json(orgs);
  })
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
        displayName: 'Goku',
        username: 'goku',
        avatar:
          'https://www.giaonhan247.com/wp-content/uploads/2021/12/Songoku-huyen-thoai.jpg',
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
          'https://antimatter.vn/wp-content/uploads/2022/12/hinh-nen-songoku-4k-2k-800x500.jpg',
        memberSince: '2022-01-01',
        joinedDiscord: '2022-01-01',
        joinMethod: 'Discord',
        roles: ['Members'],
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
      {
        id: 2,
        sender: {
          id: 1,
          name: 'Hana',
          avatar:
            'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        },
        createdAt: '2022-01-01T00:00:00.000Z',
        message: 'What are you from?',
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
      {
        id: 4,
        name: 'Jerry',
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
