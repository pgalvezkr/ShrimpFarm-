import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'farms',
    loadChildren: () => import('./farm/farm.module').then(option => option.FarmModule)
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(option => option.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
