import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { customer, updateCustomer } from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  select = { customer };
  save = smartDispatch(updateCustomer);
}
