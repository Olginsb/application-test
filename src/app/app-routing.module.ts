import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedComponent} from "./activated/activated.component";
import {AllListComponent} from "./all-list/all-list.component";

const routes: Routes = [
  {path: '', component : AllListComponent},
  {path: 'activated', component : ActivatedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
