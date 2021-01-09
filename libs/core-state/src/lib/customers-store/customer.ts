import { Person } from '@bb-smartish/api-interfaces';

export interface Customer extends Person {
  totalOrders: number;
  totalSpent: number;
}
