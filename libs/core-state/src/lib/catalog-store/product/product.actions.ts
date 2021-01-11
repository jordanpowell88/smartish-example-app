import { createAction, props } from '@ngrx/store';

export const setSelectedProductId = createAction(
  '[ROUTED TO PRODUCT] Sets Product Id',
  props<{ selectedId: string }>()
);
