import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BillingInvoice,
  selectBillingPaginator,
  selectAllBillings,
  updateBillingPagination,
} from '@bb-smartish/core-state';
import { PageEvent } from '@angular/material/paginator';
import { Paginator } from '@bb-smartish/api-interfaces';

type BillingInvoiceColumnKeys = keyof BillingInvoice;

@Component({
  selector: 'bb-smartish-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  billings$ = this.store.select(selectAllBillings);
  paginator$ = this.store.select(selectBillingPaginator);
  displayedColumns: BillingInvoiceColumnKeys[] = ['id', 'to', 'date', 'amount'];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateBillingPagination({ pagination }));
  }
}
