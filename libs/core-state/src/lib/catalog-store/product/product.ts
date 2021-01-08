import { Product as IProduct, Size, Photo } from '@bb-smartish/api-interfaces';
import { Status } from 'libs/api-interfaces/src/lib/product';
import { Category } from '../category';

export interface Product extends IProduct {
  sku: string;
  size: Size;
  quantity: number;
  name: string;
  description: string;
  status: Status;
  inventory: string;
  category: Category;
  photos: Photo[];
}
