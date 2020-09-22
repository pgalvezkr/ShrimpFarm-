import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmService, ApiResponse, PondService} from 'src/api';
import {Farm} from 'src/model/models';
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
  msgs: Message [];
  constructor(private farmsService: FarmService, private messageService: MessageService, private pondService: PondService) {}

  ngOnInit(): void {
    this.msgs = [];
    if (this.isNewFarm){
      this.farm = new Farm();
      this.farm.totalSize = 0;
      this.farm.ponds = [];
    }else{
      this.farm = this.selectedFarm;
      this.getTotalSize();
    }
  }

  public goBack() {
    this.farmsService.updateFarm(this.farm).subscribe((resp: ApiResponse)=>{
      if (resp.code==200){
        console.log("Farm updated" , this.farm);
     }else{
       console.log("Error", resp.message);
     }
    });
    this.sendList.emit({ showForm: false, showList: true });
  }

  public getList(event) {
    this.farm.ponds = event.ponds;
  }

  public getPonds (){
    this.pondService.getPondByFarmid(this.farm.id).subscribe((resp: ApiResponse)=>{
      if (resp.code==200){
          this.farm.ponds = resp.data;
       }else{
         this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
         console.log(resp.data);
       }
   }, error=>{
     console.log("An error ocurred on server.");
     this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
   }); 
  }

  public saveFarm (){
        if (this.isNewFarm){
            this.farmsService.createFarm(this.farm).subscribe((resp: ApiResponse)=>{
               if (resp.code==200){
                  this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Successfully created farm"});
                  console.log(resp.data);
                  this.farm.id = resp.data;
                }else{
                  this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
                  console.log(resp.data);
                }
            }, error=>{
              console.log("An error ocurred on server.");
              this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
            }); 
        }else{
          this.farmsService.updateFarm(this.farm).subscribe((resp: ApiResponse)=>{
            console.log("Farm saved succesfully");
            this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Successfully updated farm"});
          }, error=>{
          console.log("An error ocurred on server.");
          this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
          }); 
        }
  }

  public getTotalSize (){
    console.log("Esta en el total size");
    if (this.farm.id!=null){
      console.log("Va a solicitar el total size");
      this.farmsService.getTotalSize(this.farm.id).subscribe((resp: ApiResponse)=>{
        console.log("Total size: ");
        this.farm.totalSize = resp.data;
      }, error=>{
        console.log("An error ocurred on server.");
        this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server to get total size"});
        }); 
    }
  }

}
