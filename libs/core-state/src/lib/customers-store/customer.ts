import { Person } from '@bb-smartish/api-interfaces';

export interface Customer extends Person {
  id: string;
  totalOrders: number;
  totalSpent: number;
}
