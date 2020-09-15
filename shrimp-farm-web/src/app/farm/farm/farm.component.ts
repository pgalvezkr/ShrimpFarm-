import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/api';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor() { }

  public showFarmList: boolean = false;
  public showFarmForm: boolean = true;
  public selectedFarm: Farm;
  public isNewFarm: boolean;

  public getForm(event) {
    console.log("ESTA EN EL GET FORM");
    this.showFarmForm = event.showForm;
    this.showFarmList = event.showList;
    this.selectedFarm = event.selectedFarm;
    this.isNewFarm = event.isNewFarm;
  }

  public getList(event) {
    console.log("ESTA EN EL GET LIST");
    this.showFarmList = event.showList;
    this.showFarmForm = event.showForm;   

  }

  ngOnInit(): void {
    this.showFarmList = true;
    this.showFarmForm = false;
    this.selectedFarm = null;
  }

}
