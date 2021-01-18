import { Component } from '@angular/core';
import { Product } from '@bb-smartish/api-interfaces';
import { saveProduct } from '@bb-smartish/core-state';
import { Store } from '@ngrx/store';
import { AddProductForm } from './add-product.form';

@Component({
  selector: 'bb-smartish-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  form = new AddProductForm();

  constructor(private readonly store: Store) {}

  save(): void {
    this.store.dispatch(saveProduct({ product: this.form.value as Product }));
  }
}
