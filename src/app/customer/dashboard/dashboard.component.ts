import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Customer } from './customer';
import {CustomerService} from './customer.service';

@Component ({
moduleId : module.id,
selector : 'cust-dash',
templateUrl:'dashboard.component.html',

})

export class CustomerDashboard implements OnInit{
errorMessage: string;
customer : Customer;
constructor(  private route: ActivatedRoute,
  private router: Router, private customerService: CustomerService) { }
getCustomer():Customer{
   return this.customer;
}
ngOnInit(): void {
  this.customerService.getCustomer().subscribe(
                       customer => this.customer = customer,
                       error =>  this.errorMessage = <any>error);

}

}
