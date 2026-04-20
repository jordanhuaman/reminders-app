import { Injectable } from '@nestjs/common';
import { UuidProvider } from 'src/todo/application/port/out/uuid.provider';
import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class UuidGeneratorImpl extends UuidProvider {
  constructor() {
    super();
  }

  generateV7(): string {
    return uuidv7();
  }
}
