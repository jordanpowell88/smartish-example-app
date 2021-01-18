import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Size } from '@bb-smartish/api-interfaces';
import { numeric, required } from '@bb-smartish/smart-forms';

export class AddProductForm extends FormGroup {
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
