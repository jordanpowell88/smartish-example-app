import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectShipment,
  ShippingInvoice,
  updateShippingInvoice,
} from '@bb-smartish/core-state';

@Component({
  selector: 'bb-smartish-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent {
  shipment$ = this.store.select(selectShipment);

  constructor(private readonly store: Store) {}

  save(invoice: ShippingInvoice): void {
    this.store.dispatch(updateShippingInvoice({ invoice }));
  }
}
