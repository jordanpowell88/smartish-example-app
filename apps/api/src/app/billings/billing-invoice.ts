import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Invoice, Person } from '@bb-smartish/api-interfaces';

@Entity()
export class BillingInvoice implements Invoice {
  @PrimaryGeneratedColumn() id: number;

  @Column() date: Date;

  @Column() amount: number;

  @Column() to: Person;
}
