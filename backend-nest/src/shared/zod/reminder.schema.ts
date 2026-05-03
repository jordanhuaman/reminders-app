import { State } from 'src/reminders/domain/entity/reminder';
import z from 'zod';

export const CreateReminderSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  state: z.enum(State),
});

export type CreateReminderDto = z.infer<typeof CreateReminderSchema>;
