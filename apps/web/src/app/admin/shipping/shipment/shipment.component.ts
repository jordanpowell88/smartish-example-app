import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  shippingActions,
  ShippingInvoice,
  shippingSelectors,
} from 'libs/core-state/src/lib';

@Component({
  selector: 'bb-smartish-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent {
  shipment$ = this.store.select(shippingSelectors.selectShipment);

  constructor(private readonly store: Store) {}

  save(invoice: ShippingInvoice): void {
    this.store.dispatch(shippingActions.updateShippingInvoice({ invoice }));
  }
}
