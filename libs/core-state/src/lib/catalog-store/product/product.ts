import { Product as IProduct } from '@bb-smartish/api-interfaces';
import { Category } from '../category';

export interface Product extends IProduct {
  id?: string;
  inventory?: string;
  category?: Category;
}
