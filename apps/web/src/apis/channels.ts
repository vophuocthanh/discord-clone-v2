import { request } from '@/lib/request';

interface Channel {
  id: string;
  name: string;
}

export const getChannels = async (orgID: string) => {
  return request.get<Channel[]>(`/orgs/${orgID}/channels`);
};

export const getChannelMembers = async (orgID: string, channelID: string) => {
  return request.get(`/orgs/${orgID}/channels/${channelID}/members`);
};
