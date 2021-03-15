import { Component } from '@angular/core';
import { saveProduct } from '@bb-smartish/core-state';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { AddProductForm } from './add-product.form';

@Component({
  selector: 'bb-smartish-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  form = new AddProductForm();
  save = smartDispatch(saveProduct);
}
