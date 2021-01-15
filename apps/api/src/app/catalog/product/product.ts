import { Photo, Size } from '@bb-smartish/api-interfaces';
import { Status } from 'libs/api-interfaces/src/lib/product';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn() id: string;

  @Column() name: string;

  @Column() sku: string;

  @Column() size: Size;

  @Column() quantity: number;

  @Column({ default: 'Inactive' }) status: Status;

  @Column() description: string;

  @Column() photos: Photo[];
}
