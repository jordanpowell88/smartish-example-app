import { Product } from 'src/app/interfaces/product';

export interface MensState {
  shirts: Product[];
  hats: Product[];
  shoes: Product[];
}

export const mensInitialState: MensState = {
  shirts: [],
  hats: [],
  shoes: [],
};
