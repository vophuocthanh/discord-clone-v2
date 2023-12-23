import { request } from '@/lib/request';
import * as z from 'zod';

const orgSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

export const getOrgs = async () => {
  const res = await request.get('/orgs');
  console.log(res.data);
  return orgSchema.array().parse(res.data.data);
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

export const postOrgs = async (name: string, icon: string) => {
  try {
    const res = await request.post('/orgs', {
      name: name,
      icon: icon,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getOrgMembers = async (orgID: string) => {
  return request.get<Member[]>(`/orgs/${orgID}/members`);
};

export const getOrg = async (orgID: string) => {
  const res = await request.get(`/orgs/${orgID}`);
  return orgSchema.parse(res.data);
};
