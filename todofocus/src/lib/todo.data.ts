import { StateE, TodoI } from './types';

export const todos: TodoI[] = [
  {
    id: "0",
    title: "Estudiar GraphQL",
    deleted: false,
    message: "Revisar queries y mutations",
    state: StateE.Created,
    created: "13-04-2026 10:00",
    deadline: "15-04-2026 18:00"
  },
  {
    id: "1",
    title: "Hacer ejercicio",
    deleted: false,
    message: "Rutina de pecho",
    state: StateE.Completed,
    created: "12-04-2026 09:00",
    deadline: "12-04-2026 11:00"
  },
  {
    id: "2",
    title: "Leer libro IA",
    deleted: false,
    message: "Capítulo de agentes",
    state: StateE.Created,
    created: "11-04-2026 20:00",
    deadline: "14-04-2026 22:00"
  },
  {
    id: "3",
    title: "Proyecto backend",
    deleted: false,
    message: "Implementar Kafka",
    state: StateE.Created,
    created: "10-04-2026 14:30",
    deadline: "18-04-2026 23:00"
  },
  {
    id: "4",
    title: "Comprar comida",
    deleted: false,
    message: "Ir al supermercado",
    state: StateE.Completed,
    created: "09-04-2026 17:00",
    deadline: "09-04-2026 19:00"
  },
  {
    id: "5",
    title: "Revisar CV",
    deleted: false,
    message: "Actualizar experiencia",
    state: StateE.Created,
    created: "08-04-2026 08:30",
    deadline: "20-04-2026 12:00"
  },
  {
    id: "6",
    title: "Dormir temprano",
    deleted: false,
    message: "Mejorar hábitos",
    state: StateE.Expired,
    created: "07-04-2026 23:00",
    deadline: "07-04-2026 23:30"
  },
  {
    id: "7",
    title: "Practicar inglés",
    deleted: false,
    message: "Speaking 30 min",
    state: StateE.Completed,
    created: "06-04-2026 19:00",
    deadline: "06-04-2026 20:00"
  },
  {
    id: "8",
    title: "Deploy app",
    deleted: false,
    message: "Subir a producción",
    state: StateE.Created,
    created: "05-04-2026 16:00",
    deadline: "19-04-2026 21:00"
  },
  {
    id: "9",
    title: "Limpiar cuarto",
    deleted: true,
    message: "Organizar escritorio",
    state: StateE.Deleted,
    created: "04-04-2026 13:00",
    deadline: "04-04-2026 15:00"
  }
];