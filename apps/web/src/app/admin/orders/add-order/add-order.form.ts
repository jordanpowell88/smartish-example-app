import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Payment } from '@bb-smartish/core-state';
import { email, required } from '@bb-smartish/smart-forms';

class AddressForm extends FormGroup {
  readonly addressLine1: FormControl;
  readonly city: FormControl;
  readonly state: FormControl;
  readonly zip: FormControl;

  stateOptions = ['OH'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        addressLine1: ['', required],
        city: ['', required],
        state: ['', required],
        zip: [null, required],
      }).controls
    );

    this.addressLine1 = this.get('addressLine1') as FormControl;
    this.city = this.get('city') as FormControl;
    this.state = this.get('state') as FormControl;
    this.zip = this.get('zip') as FormControl;
  }
}

class CustomerForm extends FormGroup {
  readonly firstName: FormControl;
  readonly lastName: FormControl;
  readonly phone: FormControl;
  readonly email: FormControl;

  get Address(): AddressForm {
    return this.controls.address as AddressForm;
  }

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        firstName: ['', required],
        lastName: ['', required],
        phone: ['', required],
        email: ['', [required, email]],
        address: new AddressForm(fb),
      }).controls
    );

    this.firstName = this.get('firstName') as FormControl;
    this.lastName = this.get('lastName') as FormControl;
    this.phone = this.get('phone') as FormControl;
    this.email = this.get('email') as FormControl;
  }
}

export class AddOrderForm extends FormGroup {
  readonly total: FormControl;
  readonly payment: FormControl;
  readonly items: FormControl;

  get Customer(): CustomerForm {
    return this.controls.customer as CustomerForm;
  }

  paymentOptions: Payment[] = ['Unpaid', 'Paid', 'Refunded'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        total: ['', required],
        payment: ['Unpaid'],
        items: [null, required],
        customer: new CustomerForm(fb),
      }).controls
    );

    this.total = this.get('total') as FormControl;
    this.payment = this.get('payment') as FormControl;
    this.items = this.get('items') as FormControl;
  }
}
