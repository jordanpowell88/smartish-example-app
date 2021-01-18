import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from '@bb-smartish/core-state';
import { email, required } from '@bb-smartish/smart-forms';

class AddressForm extends FormGroup {
  readonly addressLine1: AbstractControl;
  readonly city: AbstractControl;
  readonly state: AbstractControl;
  readonly zip: AbstractControl;

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

    this.addressLine1 = this.get('addressLine1');
    this.city = this.get('city');
    this.state = this.get('state');
    this.zip = this.get('zip');
  }
}

class CustomerForm extends FormGroup {
  readonly firstName: AbstractControl;
  readonly lastName: AbstractControl;
  readonly phone: AbstractControl;
  readonly email: AbstractControl;

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

    this.firstName = this.get('firstName');
    this.lastName = this.get('lastName');
    this.phone = this.get('phone');
    this.email = this.get('email');
  }
}

export class AddOrderForm extends FormGroup {
  readonly total: AbstractControl;
  readonly payment: AbstractControl;
  readonly items: AbstractControl;

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

    this.total = this.get('total');
    this.payment = this.get('payment');
    this.items = this.get('items');
  }
}
