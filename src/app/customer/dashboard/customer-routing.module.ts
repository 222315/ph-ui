import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboard }  from './dashboard.component';
import {EditProfileComponent} from './edit-profile.component';


const customerRoutes: Routes = [
  {path: 'customer', component: CustomerDashboard},
  {path: 'editProfile',  component: EditProfileComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomerRoutingModule{}
