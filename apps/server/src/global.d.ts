import { User } from '@prisma/client';

interface Error {
  status?: number;
}
declare module 'hono' {
  interface ContextVariableMap {
    user: User;
  }
}
