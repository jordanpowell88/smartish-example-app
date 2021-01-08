import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@bb-smartish/material';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardPreviewComponent } from './dashboard-preview/dashboard-preview.component';

@NgModule({
  declarations: [AdminComponent, DashboardPreviewComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
