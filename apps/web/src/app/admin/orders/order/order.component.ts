import { Component } from '@angular/core';
import { deleteOrder, order, updateOrder } from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

@Component({
  selector: 'bb-smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  select = { order };
  save = smartDispatch(updateOrder);
  delete = smartDispatch(deleteOrder);
}
