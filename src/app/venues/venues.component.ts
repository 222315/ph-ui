import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VenueService } from '../shared';

@Component({
  selector: 'venues-home-page',
  templateUrl: './venues.component.html'
})
export class VenuesComponent implements OnInit {

  private venueFilterParamters: any = {};
  private venueDetails: any = [];

  private showMore: boolean = false;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private venueService: VenueService) {
    
    	this.venueService.getVenueFilterParams().subscribe(
  			data => {
  				console.log(data[0]);
  				this.venueFilterParamters = data[0];
  				});
    	this.venueService.searchVenueDetails("").subscribe(
  			data => {console.log(data);
  			this.venueDetails = data;
  			});
    }

  ngOnInit() { }
  
  onClickOfShowOrLess(){
  	this.showMore = !this.showMore
  }

}