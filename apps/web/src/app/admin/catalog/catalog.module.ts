import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SmartFormsModule } from 'libs/smart-forms/src/lib';
import { NgRxSmartishModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '@bb-smartish/material';

@NgModule({
  declarations: [CatalogComponent, ProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    SmartFormsModule,
    MaterialModule,
    NgRxSmartishModule,
  ],
})
export class CatalogModule {}
