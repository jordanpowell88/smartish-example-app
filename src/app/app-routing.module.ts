import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootStoreModule } from './root-store/root-store.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), RootStoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
