import { PriorityE, ProtocolsI } from './types';

export const protocols: ProtocolsI[] = [
  {
    id: "0",
    title: "Emergencia médica",
    message: "Llamar ambulancia",
    icon: "medical",
    deleted: false,
    priority: PriorityE.High,
    created: "13-04-2026 09:00"
  },
  {
    id: "1",
    title: "Incendio",
    message: "Evacuar edificio",
    icon: "fire",
    deleted: false,
    priority: PriorityE.High,
    created: "12-04-2026 11:00"
  },
  {
    id: "2",
    title: "Reunión diaria",
    message: "Standup 15 minutos",
    icon: "calendar",
    deleted: false,
    priority: PriorityE.Medium,
    created: "11-04-2026 10:00"
  },
  {
    id: "3",
    title: "Backup sistema",
    message: "Guardar base de datos",
    icon: "database",
    deleted: false,
    priority: PriorityE.High,
    created: "10-04-2026 03:00"
  },
  {
    id: "4",
    title: "Onboarding",
    message: "Capacitar nuevo usuario",
    icon: "user",
    deleted: false,
    priority: PriorityE.Low,
    created: "09-04-2026 14:00"
  },
  {
    id: "5",
    title: "Soporte técnico",
    message: "Resolver ticket",
    icon: "tools",
    deleted: false,
    priority: PriorityE.Medium,
    created: "08-04-2026 16:30"
  },
  {
    id: "6",
    title: "Seguridad",
    message: "Actualizar contraseñas",
    icon: "lock",
    deleted: false,
    priority: PriorityE.High,
    created: "07-04-2026 18:00"
  },
  {
    id: "7",
    title: "Deploy",
    message: "Publicar nueva versión",
    icon: "upload",
    deleted: false,
    priority: PriorityE.Medium,
    created: "06-04-2026 21:00"
  },
  {
    id: "8",
    title: "Monitoreo",
    message: "Revisar logs",
    icon: "chart",
    deleted: false,
    priority: PriorityE.Low,
    created: "05-04-2026 07:00"
  },
  {
    id: "9",
    title: "Mantenimiento",
    message: "Revisar servidores",
    icon: "server",
    deleted: true,
    priority: PriorityE.Medium,
    created: "04-04-2026 12:00"
  }
];