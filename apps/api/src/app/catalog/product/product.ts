import { Photo, Size } from '@bb-smartish/api-interfaces';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column() sku: string;

  @Column() size: Size;

  @Column() quantity: number;

  @Column() description: string;

  @Column() photos: Photo[];
}
