import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmRoutingModule } from './farm-routing.module';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmFormComponent } from './farm-form/farm-form.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { MessageService, ConfirmationService } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { FarmComponent } from './farm/farm.component';

@NgModule({
  declarations: [FarmListComponent, FarmFormComponent, FarmComponent],
  imports: [
    CommonModule,
    FarmRoutingModule,
    PanelModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    DialogModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class FarmModule { }
