import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  message: z.string().optional(),
  state: z.enum(['CREATED', 'COMPLETED', 'EXPIRED', 'DELETED']),
  deadline: z.string().refine((date) => !isNaN(Date.parse(date)), {
    error: 'Invalid date format',
  }),
  userId: z.string().min(1, 'User ID is required'),
});

export type CreateTodoDto = z.infer<typeof createTodoSchema>;
