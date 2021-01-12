import { Invoice } from '@bb-smartish/api-interfaces';

export type ShippingStatus = 'Shipped' | 'Not Shipped';

export interface ShippingInvoice extends Invoice {
  status: ShippingStatus;
}
