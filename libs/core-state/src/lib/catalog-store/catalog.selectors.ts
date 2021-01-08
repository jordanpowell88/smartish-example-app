import { createFeatureSelector } from '@ngrx/store';
import { CatalogState, CATALOG_FEATURE } from './catalog-state';

export const catalogFeatureSelector = createFeatureSelector<CatalogState>(
  CATALOG_FEATURE
);
