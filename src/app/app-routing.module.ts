import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailersComponent } from './retailers/retailers.component';


const routes: Routes = [
  { path: '', redirectTo: 'retailers', pathMatch: 'full'},
  { path: 'retailers', component: RetailersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
