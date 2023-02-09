import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Mapper {
  map<K>(source: any, type: ClassConstructor<K>): K {
    const sourceData = instanceToPlain(source);
    return plainToInstance(type, sourceData, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    });
  }
}
