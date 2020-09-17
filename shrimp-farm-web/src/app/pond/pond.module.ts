import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PondRoutingModule } from './pond-routing.module';
import { PondComponent } from './pond/pond.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [PondComponent],
  imports: [
    CommonModule,
    PondRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ToolbarModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    MessagesModule

  ],
  exports: [PondComponent]
})
export class PondModule { }
