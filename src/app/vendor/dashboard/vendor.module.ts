import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorRoutingModule } from './vendor-routing.module';
import { HttpModule } from '@angular/http';
import { VendorDashboard } from './dashboard.component';
import { VendorDataService } from './vendor.service';
import { VendorHistoryComponent } from './vendor-history.component';
//import {EditProfileComponent} from './edit-profile.component';


import { Ng2PaginationModule } from 'ng2-pagination'; //importing ng2-pagination

@NgModule( {
    imports: [
        Ng2PaginationModule,
        CommonModule,
        FormsModule,
        HttpModule,
        VendorRoutingModule
    ],
    declarations: [
        VendorDashboard,
        VendorHistoryComponent
        //EditProfileComponent
    ],
    providers: [VendorDataService]
})

export class VendorModule { }
