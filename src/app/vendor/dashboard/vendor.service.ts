import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { vendor } from './mock-vendor';
import { Vendor } from './vendor';
import { vendorHistory } from './mock-vendor-details';
import { VendorHistory } from './vendor-history';

@Injectable()
export class VendorDataService {
    private headers = new Headers( { 'Content-Type': 'application/json' });
    //private url = 'http://localhost:8080/customer/getCustomer/test@test.com/';
    vendor: Vendor;
    customerHist: VendorHistory;
    constructor( private http: Http ) { }
/*    getCustomer(): Observable<Vendor> {

        return this.http.get( this.url )
            .map(
            ( res: Response ) => this.vendor = res.json()

            )
            .catch( this.handleError );

        //return Promise.resolve(this.customer=cust);

    }*/
    private extractData( res: Response ) {
        console.log( "Response Recived", res.json() );

        this.vendor = res.json();
        //console.log("customer after the conversion",this.customer)
        return this.vendor || {};
    }

    getCustomerHistory(): Promise<VendorHistory> {
        return Promise.resolve( vendorHistory );
    }
    private handleError( error: any ): Promise<any> {
        console.error( 'An error occurred', error ); // for demo purposes only
        return Promise.reject( error.message || error );
    }
}
