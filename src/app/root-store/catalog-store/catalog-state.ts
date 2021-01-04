import { mensInitialState, MensState } from './mens/mens-state';
import { womenInitialState, WomenState } from './women/women-state';

export const CATALOG_FEATURE_SLICE = 'catalog';

export interface CatalogState {
  mens: MensState;
  womens: WomenState;
}

export const initialState: CatalogState = {
  mens: mensInitialState,
  womens: womenInitialState,
};
