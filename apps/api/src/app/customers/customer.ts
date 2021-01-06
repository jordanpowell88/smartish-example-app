import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Address, Person } from '@bb-smartish/api-interfaces';

@Entity()
export class Customer implements Person {
  @PrimaryGeneratedColumn() id: number;

  @Column() firstName: string;

  @Column() lastName: string;

  @Column() phone: string;

  @Column() email: string;

  @Column() address: Address;
}
