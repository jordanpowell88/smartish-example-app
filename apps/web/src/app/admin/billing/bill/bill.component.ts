import { Component } from '@angular/core';
import {
  BillingInvoice,
  selectBill,
  updateBillingInvoice,
} from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-smartish-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  bill$ = this.store.select(selectBill);

  constructor(private readonly store: Store) {}

  save(invoice: BillingInvoice) {
    this.store.dispatch(updateBillingInvoice({ invoice }));
  }
}
