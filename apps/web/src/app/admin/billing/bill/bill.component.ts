import { Component, OnInit } from '@angular/core';
import {
  billingActions,
  BillingInvoice,
  billingSelectors,
} from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-smartish-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  bill$ = this.store.select(billingSelectors.selectBill);

  constructor(private readonly store: Store) {}

  save(billingInvoice: BillingInvoice) {
    this.store.dispatch(
      billingActions.updateBillingInvoice({ billingInvoice })
    );
  }
}
