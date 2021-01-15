import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from './error/error.component';
import { SelectComponent } from './select/select.component';
import { NumberComponent } from './number/number.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    TextComponent,
    ErrorComponent,
    SelectComponent,
    NumberComponent,
    PhoneComponent,
    EmailComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TextComponent,
    SelectComponent,
    NumberComponent,
    PhoneComponent,
    EmailComponent,
    TextareaComponent,
  ],
})
export class SmartFormsModule {}
