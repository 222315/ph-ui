import {Component ,OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Customer} from "./customer"
import {CustomerService} from './customer.service';


@Component({
moduleId : module.id,
selector:'edit-profile',
templateUrl:'edit-profile.component.html',
})

export class EditProfileComponent{
constructor(private router:Router, private activatedRoute:ActivatedRoute, private customerService:CustomerService ){}
  customer : Customer = this.customerService.customer;
  /*ngOnInit(): void {
  console.log("Service Object",this.customerService.customer);
  this.customer = this.customerService.customer;
  console.log("Cusotmer Object", this.customer);
  }*/
  cancelEdit(){
   this.router.navigate(['/customer']);
  }
  onSubmit(){
  return;
  }

}
