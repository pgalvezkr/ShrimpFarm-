import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Farm } from 'src/api';
import { FarmComponent } from '../farm/farm.component';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {

  farm: Farm;
  @Input() selectedFarm: Farm;
  @Input() isNewFarm: boolean;
  @Output() sendList = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
    if (this.isNewFarm){
      this.farm = {};
    }else{
      this.farm = this.selectedFarm;
    }
  }

  public goBack() {
    this.sendList.emit({ showForm: false, showList: true });
  }

  public saveFarm (){

  }

  public clean (){
    console.log("ESTA EN EL LIMPIAR");
    this.farm= {};
  }
}
