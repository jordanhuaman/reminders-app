import { Injectable } from '@nestjs/common';
import { UuidGenerator } from 'src/todo/application/port/out/uuid.provider';
import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class UuidGeneratorImpl implements UuidGenerator {
  generateV7(): string {
    return uuidv7();
  }
}
