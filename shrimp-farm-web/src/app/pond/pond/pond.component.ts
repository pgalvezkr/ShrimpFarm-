import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pond } from 'src/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-pond',
  templateUrl: './pond.component.html',
  styleUrls: ['./pond.component.css']
})
export class PondComponent implements OnInit {

  @Input() ponds: Pond [];
  @Output() sendList = new EventEmitter();
  pond: Pond;
  pondDialog : boolean;
  submitted: boolean;
  selectedPonds: Pond[];
  msgs: Message[];
  isNew: boolean;
  first: number= 1;
  last: number= 3;
  totalSize = 0;
  constructor() { }

  ngOnInit(): void {
    this.msgs = [];
  }

  openNew(pond: Pond) {
    if (pond!=null){
      this.pond = pond;
      this.isNew = false;
    }else{
      this.pond = {};
      let id = Math.floor((Math.random() * 100) + 1);
      this.pond.id = id.toString();
      this.isNew = true;
    }
    this.pondDialog = true;
    this.submitted = false;
  }

  hideDialog() {
    this.pondDialog = false;
    this.submitted = false;
  }

  private calculateTotalSize (){
    this.ponds.forEach(pond =>{
        this.totalSize = this.totalSize + pond.size;
    })
  }

  savePond() {
    this.submitted = true;
    if (this.isNew){
      if (this.pond.name.trim()) {
          this.ponds.push(this.pond);
          this.pondDialog = false;
          this.pond = {};
          this.calculateTotalSize();
          this.sendList.emit({ ponds: this.ponds, totalSize: this.totalSize});
          this.msgs.push({severity:'success', summary:'Info Message', detail:'Pond saved'});
        }
    }else{
        this.calculateTotalSize();
        this.sendList.emit({ ponds: this.ponds, totalSize: this.totalSize});
        this.pondDialog = false;
        this.msgs.push({severity:'info', summary:'Info Message', detail:'Pond udpated'});
    }
  }

}
