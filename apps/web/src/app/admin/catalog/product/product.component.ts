import { Component } from '@angular/core';
import {
  deleteProduct,
  product,
  sizes,
  updateProduct,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';

@Component({
  selector: 'bb-smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  select = { product, sizes };
  save = smartDispatch(updateProduct);
  delete = smartDispatch(deleteProduct);
}
