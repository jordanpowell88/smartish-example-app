import { Component } from '@angular/core';
import {
  deleteProduct,
  Product,
  selectProduct,
  selectSizes,
  updateProduct,
} from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-smartish-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectors = { selectProduct, selectSizes };
  save = smartDispatch(updateProduct);
  delete = smartDispatch(deleteProduct);
}
