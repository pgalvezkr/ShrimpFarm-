import { Component, OnInit, Input } from '@angular/core';
import { Pond } from 'src/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-pond',
  templateUrl: './pond.component.html',
  styleUrls: ['./pond.component.css']
})
export class PondComponent implements OnInit {

  @Input() ponds: Pond [];
  pond: Pond;
  pondDialog : boolean;
  submitted: boolean;
  selectedPonds: Pond[];
  msgs: Message[];
  isNew: boolean;
  first: number= 1;
  last: number= 3;
  
  constructor() { }

  ngOnInit(): void {
    this.msgs = [];
  }

  openNew(pond: Pond) {
    if (pond!=null){
      this.pond = pond;
      this.isNew = true;
    }else{
      this.pond = {};
      this.isNew = false;
    }
    this.pondDialog = true;
    this.submitted = false;
  }

  hideDialog() {
    this.pondDialog = false;
    this.submitted = false;
  }

  savePond() {
    this.submitted = true;

    if (this.pond.name.trim()) {
        this.ponds.push(this.pond);
        this.pondDialog = false;
        this.pond = {};
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
      }
  }

}
