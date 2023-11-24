import { request } from '@/lib/request';

export const getChannels = async (orgID: string) => {
  return request.get(`/orgs/${orgID}/channels`);
};
