import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-dashboard',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css']
})
export class FarmDashboardComponent implements OnInit {

  options: any;

  overlays: any[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
  }

  goToFarms(){
    this.router.navigate(['/farms/list']);
  }

}
