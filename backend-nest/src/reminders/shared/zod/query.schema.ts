import z from 'zod';

export const GetReminderQuerySchema = z.object({
  date: z.iso.datetime({ offset: true }),
});

export type GetReminderQuery = z.infer<typeof GetReminderQuerySchema>;
