export abstract class QueueProvider {
  abstract publish(eventName: string, payload: unknown): Promise<void>;
}
