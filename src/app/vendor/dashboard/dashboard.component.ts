import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Vendor } from './vendor';
import { DataService } from './../../shared/services/data.service';

import { ICustomer } from './../../shared/interfaces';
import { IVendor } from './../../shared/interfaces';


@Component( {
    moduleId: module.id,
    selector: 'vendor-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class VendorDashboard implements OnInit {
    errorMessage: string;
    firstName : String = "PartyHulchul Company 1";
    lastName: String = "Sample Address 1";
    emailId : String = "emailAddress@gmail.com";

    vendor : [{
        firstName: string,
        lastName : string,
        emailId : string
    }];
   // vendors: IVendor[] = [];

    //constructor( private route: ActivatedRoute, private router: Router, private dataService: DataService ) { 
        
        constructor(  ) {
        
        this.vendor = [{
            firstName : "PartyHulchul Company 1",
            lastName: "Sample Address 1",
            emailId : "emailAddress@gmail.com"}]
    }
   /* getCustomer(): Customer {
        return this.customer;
    }*/
    ngOnInit(): void {
        /**this.customerService.getCustomer().subscribe(
                             customer => this.customer = customer,
                             error =>  this.errorMessage = <any>error);*/
        //this.customerService.getCustomer().then( customer => this.customer = customer );
       /* this.dataService.getCustomersSummary()
        .subscribe((data: IVendor[]) => this.vendors = data);*/
    }

}
