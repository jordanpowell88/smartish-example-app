import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product, Size } from '@bb-smartish/api-interfaces';
import { Store } from '@ngrx/store';
import { saveProduct } from '@bb-smartish/core-state';
import { numeric, required } from '@bb-smartish/smart-forms';

class AddProductForm extends FormGroup {
  readonly name: AbstractControl;
  readonly description: AbstractControl;
  readonly quantity: AbstractControl;
  readonly sizes: AbstractControl;
  readonly sku: AbstractControl;
  readonly price: AbstractControl;
  readonly photos: AbstractControl;

  sizeOptions: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        name: ['', required],
        description: ['', required],
        quantity: ['', numeric],
        sizes: ['', required],
        price: ['', numeric],
        sku: [''],
      }).controls
    );

    this.name = this.get('name');
    this.description = this.get('description');
    this.quantity = this.get('quantity');
    this.sizes = this.get('sizes');
    this.sku = this.get('sku');
    this.price = this.get('price');
  }
}

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
