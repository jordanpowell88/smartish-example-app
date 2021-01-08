import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
