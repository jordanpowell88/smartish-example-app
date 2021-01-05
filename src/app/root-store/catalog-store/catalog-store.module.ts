import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CATALOG_FEATURE, reducer } from './catalog-state';
import { CategoryEffects } from './category';
import { ProductEffects } from './product/';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CATALOG_FEATURE, reducer),
    EffectsModule.forFeature([ProductEffects, CategoryEffects]),
  ],
})
export class CatalogStoreModule {}
