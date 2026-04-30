export interface TodoOut {
  id: string;
  title: string;
  message: string;
  state: number;
  deadline: Date;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
