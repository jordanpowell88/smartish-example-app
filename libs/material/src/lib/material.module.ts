import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
