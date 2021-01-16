import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

/** string for displaying default required error message */
const required = 'Required';

/** string for displaying default min length error message */
const minlength = 'Too Short...';

/** string for displaying default max length error message */
const maxlength = 'Too Long...';

/**  string for displaying default forbidden error message */
const forbidden = 'Forbidden';

/**  string for displaying default pattern error message */
const pattern = 'Invalid Entry';

/**  string for displaying default email error message */
const email = 'Invalid Email Address';

/** string for displaying default date error message */
const date = 'Invalid Date';

const validationMessages: ValidationErrors = {
  required,
  minlength,
  maxlength,
  pattern,
  email,
  date,
};

@Component({
  selector: 'bb-smartish-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent {
  @Input() errors: ValidationErrors;
  messages: ValidationErrors = validationMessages;
}
