import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Customer } from '../customers';
import { Fulfillment, Payment } from '@bb-smartish/core-state';

@Entity()
export class Order {
  @ObjectIdColumn() id: string;

  @Column({ default: new Date() }) date: Date;

  @Column() customer: Customer;

  @Column() total: number;

  @Column() payment: Payment;

  @Column() fulfillment: Fulfillment;

  @Column() items: number;
}
