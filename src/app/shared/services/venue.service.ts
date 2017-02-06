import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

@Injectable()
export class VenueService {
  constructor ( private apiService: ApiService) {}
  
  getVenueFilterParams(){
  	return this.apiService.get("/getVenueFilterParams");
  }
  
   searchVenueDetails(searchText: string){
   	let params: URLSearchParams = new URLSearchParams();
   	params.set("searchString",searchText);
  	return this.apiService.get("/getVenues",params);
  }
}