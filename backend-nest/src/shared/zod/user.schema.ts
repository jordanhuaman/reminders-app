import { z } from 'zod';

export const registerUserSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(5, { error: 'The min leght of the password is 5' })
    .max(10, 'The max lenght of the password might be 10'),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
