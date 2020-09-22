import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';
import { CardModule } from 'primeng/card';
import {GMapModule} from 'primeng/gmap';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FarmDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class DashboardModule { }
