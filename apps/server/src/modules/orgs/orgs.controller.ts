import { db } from '@/lib/db';
import { User } from '@prisma/client';
import { Hono } from 'hono';

export const router = new Hono();

router
  .get('/', async (c) => {
    const user = c.get('user');

    const orgs = await db.org.findMany({
      where: {
        userID: user?.id,
      },
    });
    return c.json(orgs);
  })
  .post('/', async (c) => {
    const user = c.get('user');
    const { name, icon } = await c.req.json<{ name: string; icon: string }>();
    const orgs = await db.org.create({
      data: {
        name: name,
        icon: icon,
        userID: user?.id,
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
        displayName: 'John Doe',
        username: 'john_doe',
        avatar: 'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        memberSince: '2022-01-01',
        joinedDiscord: '2022-01-01',
        joinMethod: 'Discord',
        roles: ['Admin'],
      },
      {
        id: '001',
        displayName: 'Goku',
        username: 'goku',
        avatar:
          'https://images.immediate.co.uk/production/volatile/sites/3/2023/08/2023.06.28-06.20-boundingintocomics-649c79f009cdf-Cropped-8d74232.png?resize=768,574',
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
          name: 'Vo Phuoc Thanh',
          avatar:
            'https://staticg.sportskeeda.com/editor/2023/01/9487f-16728933915704-1920.jpg?w=840',
        },
        createdAt: '2022-01-01T00:00:00.000Z',
        message: 'What are you doing?',
      },
    ])
  )
  .get('/:orgId/channels/:channelId/members', (c) =>
    c.json([
      {
        id: 1,
        name: 'Vo Phuoc Thanh',
        avatar:
          'https://staticg.sportskeeda.com/editor/2023/01/9487f-16728933915704-1920.jpg?w=840',
        roles: ['Admin', 'F0'],
        backgroundColor: '#d40000',
        category: {
          id: 1,
          name: 'Đà Nẵng',
        },
      },
      {
        id: 2,
        name: 'Nobita',
        avatar:
          'https://i.ex-cdn.com/mgn.vn/files/news/2023/01/04/ctdragon-ball-son-goku-bao-nhieu-tuoi-trong-tung-phan-cua-bo-anime-210923.jpg',
        roles: ['Học viên'],
        backgroundColor: '#00FF00',
        category: {
          id: 2,
          name: 'Online',
        },
      },
      {
        id: 3,
        name: 'Doraemon',
        avatar:
          'https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_960_720.png',
        roles: ['Học viên'],
        backgroundColor: '#FF99CC',
        category: {
          id: 2,
          name: 'Online',
        },
      },
    ])
  );
