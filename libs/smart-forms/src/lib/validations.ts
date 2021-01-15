import { ValidatorFn, Validators } from '@angular/forms';

export const required = Validators.required;
export const email = Validators.email;
export const numeric = Validators.pattern('[0-9]*$');
export const min = (length: number): ValidatorFn => Validators.min(length);
export const max = (length: number): ValidatorFn => Validators.max(length);
