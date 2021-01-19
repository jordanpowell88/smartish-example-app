import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Size } from '@bb-smartish/api-interfaces';
import { numeric, required } from '@bb-smartish/smart-forms';

export class AddProductForm extends FormGroup {
  readonly name: FormControl;
  readonly description: FormControl;
  readonly quantity: FormControl;
  readonly sizes: FormControl;
  readonly sku: FormControl;
  readonly price: FormControl;
  readonly photos: FormControl;

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

    this.name = this.get('name') as FormControl;
    this.description = this.get('description') as FormControl;
    this.quantity = this.get('quantity') as FormControl;
    this.sizes = this.get('sizes') as FormControl;
    this.sku = this.get('sku') as FormControl;
    this.price = this.get('price') as FormControl;
  }
}
