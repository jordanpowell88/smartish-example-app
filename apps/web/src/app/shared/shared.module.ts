import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@bb-smartish/material';
import { AvatarComponent } from './avatar/avatar.component';
import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { NoItemsFoundComponent } from './no-items-found/no-items-found.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    AvatarComponent,
    LoaderComponent,
    NoItemsFoundComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    MenuComponent,
    LogoComponent,
    AvatarComponent,
    LoaderComponent,
    NoItemsFoundComponent,
    MaterialModule,
    PaginationComponent,
  ],
})
export class SharedModule {}
