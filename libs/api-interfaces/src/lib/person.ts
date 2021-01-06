import { Address } from './address';

export interface Person {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address;
}
