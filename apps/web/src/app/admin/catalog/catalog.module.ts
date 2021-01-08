import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MaterialModule } from '@bb-smartish/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, CatalogRoutingModule, MaterialModule, FormsModule],
})
export class CatalogModule {}
