import { Component, OnInit } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { selectCustomer, updateCustomer } from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  selectors = { selectCustomer };
  save = smartDispatch(updateCustomer);
}
