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
import { FormsModule } from '@angular/forms';
import { PondModule } from '../pond/pond.module';
import { APIS, BASE_PATH } from 'src/api';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [FarmListComponent, FarmFormComponent, FarmComponent],
  imports: [
    CommonModule,
    FormsModule,
    FarmRoutingModule,
    PanelModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    PondModule,
    ToastModule,
    TabViewModule  ],
  providers: [MessageService, ConfirmationService, APIS,  {provide:BASE_PATH, useValue:'/sfarm/v1'}, MessageService]

})
export class FarmModule { }
