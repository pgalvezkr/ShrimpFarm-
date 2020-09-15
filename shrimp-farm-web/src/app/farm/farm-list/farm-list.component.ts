import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Farm } from 'src/api';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class FarmListComponent implements OnInit {

  farms: Farm [];
  selectedFarms: Farm[];
  first: number= 1;
  last: number= 3;
  displayDelete: boolean = false;
  @Output() sendFarm = new EventEmitter();

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.selectedFarms= [];
    this.farms=[
      {"id": "1", "name": "Farm1", "nameLocation": "Masachuse", "totalSize": 24},
      {"id": "2", "name": "Farm2", "nameLocation": "Oregon", "totalSize": 24},
      {"id": "3", "name": "Farm3", "nameLocation": "San Francisco", "totalSize": 24},
      {"id": "4", "name": "Farm4", "nameLocation": "Argentina", "totalSize": 24}
    ];
  }

  createNewFarm (){
    this.sendFarm.emit({selectedFarm: null, showForm: true, showList: false, isNewFarm: true});
  }

  editFarm (farmSelected: Farm){
    this.sendFarm.emit({selectedFarm: farmSelected, showForm: true, showList: false, isNewFarm: false});
  }

  deleteSelectedFarms() {
    console.log("ESTA EN EL ELIMINAR FARMS");
    this.displayDelete = true;
  }

}
