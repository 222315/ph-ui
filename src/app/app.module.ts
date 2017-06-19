import { CustomerService } from './customer/dashboard/customer.service';
import { FacebookLoginComponent } from './customer/dashboard/facebooklogin.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {CustomerModule} from './customer/dashboard/customer.module';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { BeautyModule } from './beauty/beauty.module';
import { CateringModule } from './catering/catering.module';
import { DecoratorsModule } from './decorators/decorators.module';
import { PhotographyModule } from './photography/photography.module';
import { VenuesModule } from './venues/venues.module';
import { QuoteRequestModule } from './quote-request/quote-request.module';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, SharedModule } from './shared';

import { ApiService, LocationService, VenueService } from './shared';

import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination
import {VendorModule} from './vendor/dashboard/vendor.module';

//import { CustomerStatusComponent } from './vendor/customer-status.component';

import { HomeComponent } from './home/home.component'; //import home components
//import { AboutComponent } from './vendor/dashboard/about/about.component'; //import about component



const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    rootRouting,
    SharedModule,
    HomeModule,
    BeautyModule,
    CateringModule,
    DecoratorsModule,
    PhotographyModule,
    VenuesModule,
    QuoteRequestModule,
     CustomerModule,
  AppRoutingModule,
  Ng2PaginationModule, VendorModule
  ],
  providers: [ApiService, LocationService, VenueService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
