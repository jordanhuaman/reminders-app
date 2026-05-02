export interface TodoOut {
  id: string;
  title: string;
  state: number;
  deadline: Date;
  userId: string;
  message?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
