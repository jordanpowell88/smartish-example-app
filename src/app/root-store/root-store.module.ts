import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BillingsStoreModule } from './billings-store/billings-store.module';
import { CatalogStoreModule } from './catalog-store/catalog-store.module';
import { CustomersStoreModule } from './customers-store/customers-store.module';
import { OrdersStoreModule } from './orders-store/orders-store.module';
import { ShippingStoreModule } from './shipping-store/shipping-store.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

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
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class RootStoreModule {}
