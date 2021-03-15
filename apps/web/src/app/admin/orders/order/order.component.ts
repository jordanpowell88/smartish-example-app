import { Component, OnInit } from '@angular/core';
import { deleteOrder, selectOrder, updateOrder } from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

@Component({
  selector: 'bb-smartish-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  selectors = { selectOrder };
  save = smartDispatch(updateOrder);
  delete = smartDispatch(deleteOrder);
}
