import { Product as IProduct, Size, Photo } from '@bb-smartish/api-interfaces';
import { Category } from '../category';

export interface Product extends IProduct {
  sku: string;
  size: Size;
  quantity: number;
  name: string;
  description: string;
  status: string;
  inventory: string;
  category: Category;
  photos: Photo[];
}
