import {Address} from  "./address";
import {Service} from "./service";
import {PaymentDetails} from "./payment-details";
import {QuoteResponse} from "./quote-response";

export class QuoteRequest{
id : string;
date : string;
eventType : string;
eventDate : string;
noGuests : string;
location : Address;
services : Service[];
status : string;
vendorRes : QuoteResponse;
paymentDetails : PaymentDetails;
}
