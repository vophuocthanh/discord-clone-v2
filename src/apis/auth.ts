import { request } from '@/lib/request';

export const signIn = async (email: string, password: string) => {
  return request.post(`/sign-in`, {
    email,
    password,
  });
};
