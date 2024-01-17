import { db } from '@/lib/db';
import { paginationSchema } from '@/utils/schema';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { OrgsService } from './orgs.service';
import { createOrgDto } from './dto/create-org.dto';
import { ChannelsService } from '../channels/channels.service';
import { upsertChannelDto } from '../channels/dto/channel.dto';
import { upsertCategoryDto } from '../categories/dto/create-category.dto';
import { CategoriesService } from '../categories/categories.service';
import { createRoleDto } from './dto/create-roles.dto';

export const router = new Hono();

router
  .get('/', zValidator('query', paginationSchema), async (c) => {
    const user = c.get('user');
    const search = c.req.query('search');
    const page = +c.req.query('page') || 1;
    const limit = +c.req.query('limit') || 10;

    const data = await OrgsService.getAll(user?.id, {
      page,
      limit,
      search,
    });

    return c.json(data);
  })
  .get('/:orgId', async (c) => {
    const orgId = c.req.param('orgId');

    const org = await OrgsService.getBy(orgId);

    return c.json({
      data: org,
      status: 200,
    });
  })
  .post('/', zValidator('json', createOrgDto), async (c) => {
    const user = c.get('user');

    const { name, icon } = await c.req.json();

    const org = await OrgsService.create({
      userID: user.id,
      name,
      icon,
    });

    return c.json(org);
  })
  .get('/:orgId/roles', async (c) => {
    const orgId = c.req.param('orgId');
    const roles = await OrgsService.getRoles(orgId);

    return c.json(
      {
        data: roles,
        status: 200,
      },
      200
    );
  })
  .post('/:orgId/roles', zValidator('json', createRoleDto), async (c) => {
    const orgId = c.req.param('orgId');
    const createRoleDto = await c.req.json();
    const role = await OrgsService.createRole(orgId, createRoleDto);

    return c.json(
      {
        data: role,
        status: 201,
      },
      201
    );
  })
  .get('/:orgId/channels', async (c) => {
    const orgId = c.req.param('orgId');
    const channels = await ChannelsService.getAllBy(orgId);

    return c.json({
      data: channels,
      status: 200,
    });
  })
  .post('/:orgId/channels', zValidator('json', upsertChannelDto), async (c) => {
    const orgId = c.req.param('orgId');
    const createChannelDto = await c.req.json();
    const channel = await ChannelsService.createByOrg(orgId, createChannelDto);

    return c.json({
      data: channel,
      status: 201,
    });
  })
  .get('/:orgId/members', async (c) => {
    const orgId = c.req.param('orgId');

    const members = await db.usersOnOrgs.findMany({
      where: {
        orgID: orgId,
      },
    });

    return c.json({
      data: members,
      status: 200,
    });
  })
  .post('/:orgId/members', async (c) => {
    const orgId = c.req.param('orgId');

    const members = await db.usersOnOrgs.findMany({
      where: {
        orgID: orgId,
      },
    });

    return c.json({
      data: members,
      status: 200,
    });
  })
  .post(
    '/:orgId/categories',
    zValidator('json', upsertCategoryDto),
    async (c) => {
      const orgId = c.req.param('orgId');
      const createCategoryInput = await c.req.json();
      const category = await CategoriesService.create(
        orgId,
        createCategoryInput
      );

      return c.json({
        data: category,
        status: 201,
      });
    }
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
        name: 'John',
        avatar: 'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        roles: ['Admin', 'F0'],
        backgroundColor: '#d40000',
        category: {
          id: 1,
          name: 'Đà Nẵng',
        },
      },
      {
        id: 2,
        name: 'Tin Nguyen',
        avatar: 'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        roles: ['Học viên'],
        backgroundColor: '#d40000',
        category: {
          id: 2,
          name: 'Online',
        },
      },
      {
        id: 3,
        name: 'Son Tran',
        avatar: 'https://sukienvietsky.com/upload/news/son-tung-mtp-7359.jpeg',
        roles: ['Học viên'],
        backgroundColor: '#d40000',
        category: {
          id: 2,
          name: 'Online',
        },
      },
    ])
  );
