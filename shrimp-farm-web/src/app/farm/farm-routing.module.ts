import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmComponent } from './farm/farm.component';


const routes: Routes = [
  {path: 'list', component: FarmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule { }
