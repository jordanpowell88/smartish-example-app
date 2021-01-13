import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LoaderComponent } from './loader/loader.component';
import { NoItemsFoundComponent } from './no-items-found/no-items-found.component';
import { MaterialModule } from '@bb-smartish/material';

@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    AvatarComponent,
    LoaderComponent,
    NoItemsFoundComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MenuComponent,
    LogoComponent,
    AvatarComponent,
    LoaderComponent,
    NoItemsFoundComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
