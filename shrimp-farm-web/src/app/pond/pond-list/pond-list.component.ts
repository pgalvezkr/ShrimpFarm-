import { Component, OnInit } from '@angular/core';
import { Pond } from 'src/api';

@Component({
  selector: 'app-pond-list',
  templateUrl: './pond-list.component.html',
  styleUrls: ['./pond-list.component.css']
})
export class PondListComponent implements OnInit {

  ponds: Pond [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
