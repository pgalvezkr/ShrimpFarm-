import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Farm, FarmService, ApiResponse } from 'src/api';
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
  last: number= 0;
  displayDelete: boolean = false;
  @Output() sendFarm = new EventEmitter();

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private farmsService: FarmService) { }

  ngOnInit(): void {
    this.selectedFarms= [];
    this.loadFarms();
    
  }

  loadFarms (){
    this.farmsService.getFarms().subscribe((resp: ApiResponse)=>{
      if (resp.code == 200) {
        this.farms = resp.data;
        console.log("Tamaniot" +this.farms.length)
        this.last = this.farms.length;
    } else {
        this.farms = [];
    }
    }, error=>{
          this.farms = [];
    });   

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
  
  cancelAction (){
    this.displayDelete = false;
  }

  deleteFarms() {
      this.selectedFarms.forEach(farm =>{
        let farmDeleted = farm;
        this.farmsService.deleteFarm(farmDeleted).subscribe((resp: ApiResponse)=>{
          if (resp.code == 200) {
            this.messageService.add({key: 'msgsList', sticky: true, severity:'success', summary:'Info', detail: resp.message});
            this.displayDelete = false;
        } else {
          this.messageService.add({key: 'msgsList', sticky: true, severity:'error', summary:'Error', detail: "Error ocurred and the farms was not deleted"});
          this.displayDelete = false;
        }
        }, error=>{
          this.messageService.add({key: 'msgsList', sticky: true, severity:'error', summary:'Error', detail: "Error ocurred on server"});
          this.displayDelete = false;
        });   

      })
      
  }

}
