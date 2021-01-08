import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreStateModule } from '@bb-smartish/core-state';
import { MaterialModule } from '@bb-smartish/material';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { LogoComponent } from './shared/logo/logo.component';
import { AvatarComponent } from './shared/avatar/avatar.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LogoComponent, AvatarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreStateModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
