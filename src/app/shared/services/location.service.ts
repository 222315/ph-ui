import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class LocationService {
  constructor ( private apiService: ApiService) {}
  
  getLocations(){
  	return this.apiService.get("/getLocations");
  }
}