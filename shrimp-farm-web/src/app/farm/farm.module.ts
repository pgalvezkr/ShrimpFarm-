import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmRoutingModule } from './farm-routing.module';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmFormComponent } from './farm-form/farm-form.component';


@NgModule({
  declarations: [FarmListComponent, FarmFormComponent],
  imports: [
    CommonModule,
    FarmRoutingModule
  ]
})
export class FarmModule { }
