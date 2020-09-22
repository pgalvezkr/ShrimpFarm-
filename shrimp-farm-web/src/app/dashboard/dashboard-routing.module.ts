import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';


const routes: Routes = [
   {path: '', component: FarmDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
