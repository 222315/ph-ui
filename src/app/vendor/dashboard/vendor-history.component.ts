import { Component, OnInit } from '@angular/core';
import { VendorHistory } from './vendor-history'
import { VendorDataService } from './vendor.service';
@Component( {
    moduleId: module.id,
    selector: 'vendor-history',
    templateUrl: './vendor-history.component.html'

})

export class VendorHistoryComponent implements OnInit {
    showVendor: boolean = false;
    vendorHistory: VendorHistory;

    allCustomerDetails: [{
        name: string,
        address: string,
        emailId: string,
        price: string,
        guest: string,
        eventDate: string
    }];

    constructor( private vendorDataService: VendorDataService ) {

        //This needs to be removed once the http service has been invoked.
        this.allCustomerDetails = [{
            name: "Anmol Prakash Sinha",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$10000",
            guest: "20",
            eventDate: "Jan 01, 2017"
        },
        {
            name: "Bajaj Auto Annual Meet",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$20000",
            guest: "40",
            eventDate: "Jan 15, 2017"
        },
        {
            name: "Coal India Officers Meet",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$5000",
            guest: "10",
            eventDate: "Jan 22, 2017"
        },
        {
            name: "Subhash Goel",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$500",
            guest: "5",
            eventDate: "Jan 04, 2017"
        },
        {
            name: "Godrej Boot",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$500",
            guest: "5",
            eventDate: "Jan 04, 2017"
        },
        {
            name: "Minar Annual Show",
            address: "Sample Address 1",
            emailId: "emailAddress@gmail.com",
            price: "$5000",
            guest: "55",
            eventDate: "Jan 22, 2017"
        }
        ]


    }

    ngOnInit(): void {
        this.getCustomerHistory();
    }
    getCustomerHistory(): void {
        this.vendorDataService.getCustomerHistory().then( vendorHistory => this.vendorHistory = vendorHistory );
    }

}
