import { Photo, Size } from '@bb-smartish/api-interfaces';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn() id: number;

  @Column() sku: string;

  @Column() size: Size;

  @Column() quantity: number;

  @Column() description: string;

  @Column() photos: Photo[];
}
