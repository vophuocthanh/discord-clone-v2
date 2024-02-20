import { request } from '@/lib/request';
import * as z from 'zod';

export enum ChannelType {
  VOICE = 'VOICE',
  TEXT = 'TEXT',
  FORUM = 'FORUM',
}

export const channelSchema = z.object({
  id: z.string(),
  name: z.string(),
  isPrivate: z.boolean(),
  type: z.nativeEnum(ChannelType),
});

export type Channel = z.infer<typeof channelSchema>;

export const getChannels = async (orgID: string) => {
  const res = await request.get(`/orgs/${orgID}/channels`);
  return channelSchema.array().parse(res.data.data);
};

export const getChannelMembers = async (orgID: string, channelID: string) => {
  return request.get(`/orgs/${orgID}/channels/${channelID}/members`);
};

export const postChannel = async ({
  categoryId,
  createChannelDto,
}: {
  categoryId: string;
  createChannelDto: Channel;
}) => {
  return request.post(`/categories/${categoryId}/channels`, createChannelDto);
};
