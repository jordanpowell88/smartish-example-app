import { Product } from 'src/app/interfaces/product';

export interface WomenState {
  shirts: Product[];
  hats: Product[];
  shoes: Product[];
}

export const womenInitialState: WomenState = {
  shirts: [],
  hats: [],
  shoes: [],
};
