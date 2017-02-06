import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { LocationService } from '../services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, private locationService: LocationService) {
  	this.locationService.getLocations().subscribe(
  		data => console.log(data));
  }

  ngOnInit() {}
  
  navigateTo(path: string){
	this.router.navigate([path]); 
  }
}