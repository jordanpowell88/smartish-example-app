import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingsStoreModule } from './billings-store';
import { CatalogStoreModule } from './catalog-store';
import { CustomersStoreModule } from './customers-store';
import { OrdersStoreModule } from './orders-store';
import { ShippingStoreModule } from './shipping-store';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterEffects } from './router.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BillingsStoreModule,
    CatalogStoreModule,
    CustomersStoreModule,
    OrdersStoreModule,
    ShippingStoreModule,
    StoreModule.forRoot(routerReducer, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
})
export class CoreStateModule {}
