import {Component, OnInit} from '@angular/core';
import {CustomerHistory} from './customer-history'
import {CustomerService} from './customer.service';
@Component({
moduleId : module.id,
selector :'customer-history',
templateUrl :'./customer-history.component.html',
})

export class CustomerHistoryComponent implements OnInit{
showVendor:boolean=false;
customerHistory : CustomerHistory;

constructor(private customerService: CustomerService) { }

ngOnInit():void{
this.getCustomerHistory();
}
getCustomerHistory():void{
 this.customerService.getCustomerHistory().then(customerHistory => this.customerHistory = customerHistory);
}
}
