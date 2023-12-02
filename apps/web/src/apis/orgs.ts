import { request } from '@/lib/request';

export const getOrgs = async () => {
  return request.get(`/orgs`);
};

interface Member {
  id: string;
  displayName: string;
  username: string;
  avatar: string;
  memberSince: string;
  joinedDiscord: string;
  joinMethod: string;
  roles: string[];
}

export const getOrgMembers = async (orgID: string) => {
  return request.get<Member[]>(`/orgs/${orgID}/members`);
};
