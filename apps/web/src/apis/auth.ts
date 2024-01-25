import { request } from "@/lib/request";

export const signIn = async (email: string, password: string) => {
  return request.post("/sign-in", {
    email,
    password,
  });
};

export const signUp = async (email: string, password: string) => {
  return request.post("/sign-up", {
    email,
    password,
  });
};

export const forgotPassword = async (email: string) => {
  return request.post("/forgot-password", {
    email,
  });
};

export const resetPassword = async (token: string, password: string) => {
  return request.put(
    "/reset-password",
    {
      password,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
