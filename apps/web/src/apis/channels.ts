import { request } from '@/lib/request';
import * as z from 'zod';

const channelSchema = z.object({
  id: z.string(),
  name: z.string(),
  isPrivate: z.boolean(),
  type: z.string(),
});

export const getChannels = async (orgID: string) => {
  const res = await request.get(`/orgs/${orgID}/channels`);
  return channelSchema.array().parse(res.data.data);
};

export const getChannelMembers = async (orgID: string, channelID: string) => {
  return request.get(`/orgs/${orgID}/channels/${channelID}/members`);
};
