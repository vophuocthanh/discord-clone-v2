import { request } from '@/lib/request';

export const getOrgs = async () => {
  return request.get(`/orgs`);
};
