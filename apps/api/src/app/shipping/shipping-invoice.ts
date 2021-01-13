import { Person } from '@bb-smartish/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShippingInvoice {
  @PrimaryGeneratedColumn() id: string;

  @Column() date: Date;

  @Column() amount: number;

  @Column() to: Person;
}
