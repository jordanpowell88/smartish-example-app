import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [CatalogComponent, ProductComponent],
  imports: [CommonModule, CatalogRoutingModule, SharedModule, FormsModule],
})
export class CatalogModule {}
