import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiResponse, Farm, FarmService, Pond, PondService } from 'src/api';
import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-pond',
  templateUrl: './pond.component.html',
  styleUrls: ['./pond.component.css']
})
export class PondComponent implements OnInit {

  @Input() idFarm: string;
  @Input() ponds: Pond [];
  pond: Pond;
  pondDialog : boolean;
  submitted: boolean;
  selectedPonds: Pond[];
  msgs: Message[];
  isNew: boolean;
  first: number= 1;
  last: number= 0;
  totalSize = 0;
  displayDeletePond = false;


  constructor(private pondService: PondService, private messageService: MessageService, private farmService: FarmService) { }

  ngOnInit(): void {
    this.msgs = [];
    this.ponds = [];
    this.selectedPonds = [];
    if (this.idFarm!=null){
     this.getPonds();
    }
  }

  deleteSelectedPond (){
    this.displayDeletePond = true;
  }

  deletePonds() {
    this.selectedPonds.forEach(pond =>{
      this.pondService.deletePond(this.idFarm, pond.id).subscribe((resp: ApiResponse)=>{
      if (resp.code == 201) {
          this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Ponds removed successfully"});
          this.displayDeletePond = false;
      } else {
        this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
        this.displayDeletePond = false;
      }
      this.getPonds();
      }, error=>{
        this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
        this.displayDeletePond = false;
      });   
    })
    this.selectedPonds = [];
  }

  getPonds (){
    this.pondService.getPondByFarmid(this.idFarm).subscribe((resp: ApiResponse)=>{
      if (resp.code==200){
          this.ponds = resp.data;
       }else{
         this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
       }
       if (this.ponds!=undefined)
         this.last = this.ponds.length;
   }, error=>{
     console.log("An error ocurred on server.");
     this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
   }); 
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

  savePond() {
    this.submitted = true;
    if (this.isNew){
      this.pondService.createPond(this.idFarm, this.pond)
      .subscribe((resp: ApiResponse)=>{
        if (resp.code==200){
           if (this.pond.name.trim()) {
              this.ponds.push(this.pond);
              this.pondDialog = false;
              this.pond = {};
           }
           this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Pond created succesffuly"});
         }else{
           this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
           console.log(resp.data);
         }
         this.last = this.ponds.length;
     },error=>{
       console.log("An error ocurred on server.");
       this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
     }); 
    }else{
        this.updatePond();
        this.last = this.ponds.length;
    }
  }

  public updatePond (){
    this.pondService.updatePond(this.idFarm, this.pond).subscribe((resp: ApiResponse)=>{
      if (resp.code==201){
         this.messageService.add({key: 'msgs', sticky: true, severity:'success', summary:'Info', detail: "Pond update succesffuly"});
       }else{
         this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: resp.message});
       }
       this.last = this.ponds.length;
       this.pondDialog = false;
    }, error=>{
      console.log("An error ocurred on server.");
      this.messageService.add({key: 'msgs', sticky: true, severity:'error', summary:'Error', detail: "An error ocurred on server"});
    }); 
    this.getPonds();
  }

}
