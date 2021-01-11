import { Person } from '@bb-smartish/api-interfaces';

export interface Customer extends Person {
  id: number;
  totalOrders: number;
  totalSpent: number;
}
