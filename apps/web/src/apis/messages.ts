import { request } from '@/lib/request';
import { Message } from '@/lib/type';

export const getMessages = async (orgID: string, channelID: string) => {
  return request.get<Message[]>(`/orgs/${orgID}/channels/${channelID}/messages`);
};
