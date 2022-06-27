import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'dashboard', component:AppComponent}
  ],{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
