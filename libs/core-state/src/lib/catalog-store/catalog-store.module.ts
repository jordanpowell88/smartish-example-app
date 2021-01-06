import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CATALOG_FEATURE, reducer } from './catalog-state';
import { CategoryEffects } from './category';
import { CategoryService } from './category/category.service';
import { ProductEffects } from './product/';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CATALOG_FEATURE, reducer),
    EffectsModule.forFeature([ProductEffects, CategoryEffects]),
  ],
  providers: [CategoryService, ProductService],
})
export class CatalogStoreModule {}
