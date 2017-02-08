import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CustomerDashboard }  from './customer/dashboard/dashboard.component';

const appRoutes: Routes = [
  /*{ path: 'customer', component: CustomerDashboard },*/
  { path: '',   redirectTo: '/customer', pathMatch: 'full' }
  /**{ path: 'home',        component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
