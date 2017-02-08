import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { cust } from './mock-customer';
import { Customer } from './customer';
import {customerHistory} from './mock-customer-details';
import {CustomerHistory} from './customer-history';

@Injectable()
export class CustomerService{
private headers = new Headers({'Content-Type': 'application/json'});
private url = 'http://localhost:8080/customer/getCustomer/rajeshyarra@gmail.com/';
customer:Customer;
customerHist :CustomerHistory;
constructor(private http: Http) { }
getCustomer():Observable<Customer>{

 return this.http.get(this.url)
               .map(
               (res:Response) => this.customer=  res.json()

               )
               .catch(this.handleError);

//return Promise.resolve(this.customer=cust);

}
private extractData(res: Response) {
    console.log("Response Recived",res.json());

    this.customer = res.json();
    //console.log("customer after the conversion",this.customer)
    return this.customer || { };
  }

getCustomerHistory():Promise<CustomerHistory>{
return Promise.resolve(customerHistory);
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
