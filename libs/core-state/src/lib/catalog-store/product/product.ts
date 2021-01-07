import { Product as IProduct, Size, Photo } from '@bb-smartish/api-interfaces';

export interface Product extends IProduct {
  sku: string;
  size: Size;
  quantity: number;
  name: string;
  description: string;
  photos: Photo[];
}
