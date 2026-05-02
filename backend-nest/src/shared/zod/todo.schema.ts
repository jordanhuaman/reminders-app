import { State } from 'src/todo/domain/entity/todo';
import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  message: z.string().optional(),
  state: z.enum(State),
  deadline: z.iso.datetime({ offset: true }),
});

export type CreateTodoDto = z.infer<typeof createTodoSchema>;
