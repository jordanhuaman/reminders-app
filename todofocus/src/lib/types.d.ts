export enum StateE {
  Created,
  Completed,
  Expired,
  Deleted,
}

export enum PriorityE {
  Low = 1,
  Medium = 2,
  High = 3
}

interface TimeStapms{
  lastupdated?: string,
  created: string
}

export interface TodoI extends TimeStapms {
  id: string,
  title: string,
  deleted: boolean,
  message: string,
  state: StateE,
  deadline: string
}

export interface ProtocolsI extends TimeStapms {
  id: string,
  message: string,
  title: string,
  icon: string,
  deleted: boolean,
  priority: PriorityE
}