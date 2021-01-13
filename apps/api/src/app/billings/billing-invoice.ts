import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Person } from '@bb-smartish/api-interfaces';

@Entity()
export class BillingInvoice {
  @ObjectIdColumn() id: number;

  @Column() date: Date;

  @Column() amount: number;

  @Column() to: Person;
}
