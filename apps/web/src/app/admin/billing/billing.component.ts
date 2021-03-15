import { Component } from '@angular/core';
import {
  BillingInvoice,
  selectBillingPaginator,
  selectAllBillings,
  updateBillingPagination,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

type BillingInvoiceColumnKeys = keyof BillingInvoice;

@Component({
  selector: 'bb-smartish-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  selectors = { selectAllBillings, selectBillingPaginator };
  updatePagination = smartDispatch(updateBillingPagination);
  displayedColumns: BillingInvoiceColumnKeys[] = ['id', 'to', 'date', 'amount'];
}
