import z from 'zod';

export const GetTodoMetricQuerySchema = z.object({
  date: z.iso.datetime({ offset: true }),
});

export type GetTodoMetricQuery = z.infer<typeof GetTodoMetricQuerySchema>;
