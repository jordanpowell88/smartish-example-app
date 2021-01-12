import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BillingInvoice, billingSelectors } from '@bb-smartish/core-state';

type BillingInvoiceColumnKeys = keyof BillingInvoice;

@Component({
  selector: 'bb-smartish-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  billings$ = this.store.select(billingSelectors.selectAllBillings);
  paginator$ = this.store.select(billingSelectors.selectPaginator);
  displayedColumns: BillingInvoiceColumnKeys[] = ['id', 'to', 'date', 'amount'];

  constructor(private readonly store: Store) {}
}
