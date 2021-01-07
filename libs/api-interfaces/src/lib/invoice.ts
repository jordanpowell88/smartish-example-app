import { Person } from './person';

export interface Invoice {
  id: number;
  date: Date;
  amount: number;
  to: Person;
}
