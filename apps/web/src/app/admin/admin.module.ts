import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '@bb-smartish/material';
import { LogoComponent } from './logo/logo.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DashboardPreviewComponent } from './dashboard-preview/dashboard-preview.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [MenuComponent, AdminComponent, LogoComponent, AvatarComponent, DashboardPreviewComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
