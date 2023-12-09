export const hashPassword = (password: string, salt: string) => {
  return password + salt;
};
