import { Expose } from 'class-transformer';

export class FaceDto {
  @Expose()
  embedding: Array<number>;
}
