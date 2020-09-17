import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Farm, FarmService, ApiResponse } from 'src/api';
import { Message, MessageService} from 'primeng/api';


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
  @Output() sendMesssage =new EventEmitter();
  msgs: Message[];
  
  constructor(private farmsService: FarmService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.msgs = [];
    if (this.isNewFarm){
      this.farm = {};
      this.farm.ponds= [];
    }else{
      this.farm = this.selectedFarm;
    }
    this.farm.latitude = 0;
    this.farm.longitude = 0;
    console.log("EL FARM QUE TENGO ES: " , this.farm);
  }


  public goBack() {
    this.sendList.emit({ showForm: false, showList: true });
  }

  public getList(event) {
    console.log("ESTA EN EL GET LIST");
    this.farm.ponds = event.ponds;
    this.farm.totalSize = event.totalSize;
  }

 

  public saveFarm (){
      if (this.farm.ponds.length==0){
        console.log("Please add minimun one pond to the farm.");
        this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary: 'Error', detail:'Please add minimun one pond to the farm.'});
      }else{
        console.log(this.farm);
        if (this.isNewFarm){
            this.farmsService.createFarm(this.farm).subscribe((resp: ApiResponse)=>{
                console.log("Farm saved succesfully");
                this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Farm created succesffuly"});
            }, error=>{
              console.log("Error ocurred on server.");
              this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "Error ocurred on server"});
              }); 
            
        }else{
          this.farmsService.updateFarm(this.farm).subscribe((resp: ApiResponse)=>{
            console.log("Farm saved succesfully");
            this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: resp.message});
        }, error=>{
          console.log("Error ocurred on server.");
          this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "Error ocurred on server"});
          }); 
        } 
        }
    this.sendMesssage.emit({msgs: this.msgs});
  }

  public getTotalSize (){
      this.farmsService.getTotalSize(this.farm.id).subscribe((resp: ApiResponse)=>{
        console.log("Total size: ");
        this.farm.totalSize = resp.data;
     }, error=>{
      console.log("Error ocurred on server.");
      this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "Error ocurred on server to get total size"});
      }); 
  }

  public clean (){
    console.log("ESTA EN EL LIMPIAR");
    this.farm= {};
  }
}
