import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreStateModule } from '@bb-smartish/core-state';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    CoreStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
