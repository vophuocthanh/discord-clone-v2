import * as z from 'zod';
import { validator } from './validator';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email('Email must be valid'),
  password: z
    .string()
    .min(1, {
      message: 'Password is required',
    })
    .regex(validator.password, 'Password must contain at least 8 characters, 1 letter and 1 number'),
});
