import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Farm } from 'src/api';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {

  @Input() selectedFarm: Farm;
  @Input() isNewFarm: boolean;
  @Output() sendList = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public goBack() {
    this.sendList.emit({ showForm: false, showList: true });
  }

}
