export abstract class HashProvider {
  abstract hash(password: string): Promise<string>;
  abstract compare(password: string, hashDbPassword: string): Promise<boolean>;
}
