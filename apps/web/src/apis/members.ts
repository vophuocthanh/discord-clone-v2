import { request } from '@/lib/request';

export const getMembers = async (orgID: string, channelID: string) => {
  return request.get(`/orgs/${orgID}/channels/${channelID}/members`);
};
