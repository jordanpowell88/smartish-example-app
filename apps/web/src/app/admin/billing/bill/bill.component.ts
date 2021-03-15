import { Component } from '@angular/core';
import {
  BillingInvoice,
  selectBill,
  updateBillingInvoice,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-smartish-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  selectors = { selectBill };
  updateBillingInvoice = smartDispatch(updateBillingInvoice);
}
