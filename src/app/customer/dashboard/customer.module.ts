import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {CustomerRoutingModule} from './customer-routing.module';
import { HttpModule }    from '@angular/http';
import { CustomerDashboard }  from './dashboard.component';
import {CustomerService} from './customer.service';
import {CustomerHistoryComponent} from './customer-history.component';
import {EditProfileComponent} from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CustomerRoutingModule,
  ],
  declarations: [
    CustomerDashboard,
    CustomerHistoryComponent,
    EditProfileComponent
  ],
  providers: [ CustomerService ]
})

export class CustomerModule{}
