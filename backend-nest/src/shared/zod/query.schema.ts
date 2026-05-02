import z from 'zod';

export const GetTodosQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  size: z.coerce.number().int().min(1).default(10),
  title: z.string().optional().default(''),
});

export type GetTodoQuery = z.infer<typeof GetTodosQuerySchema>;
