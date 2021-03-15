import { Component } from '@angular/core';
import { selectShipment, updateShippingInvoice } from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

@Component({
  selector: 'bb-smartish-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent {
  selectors = { selectShipment };
  save = smartDispatch(updateShippingInvoice);
}
