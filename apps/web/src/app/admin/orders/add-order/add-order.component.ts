import { Component } from '@angular/core';
import { addOrder } from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { AddOrderForm } from './add-order.form';

@Component({
  selector: 'bb-smartish-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent {
  form = new AddOrderForm();
  save = smartDispatch(addOrder);
}
