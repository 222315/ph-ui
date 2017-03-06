
import { QuoteRequest } from "../../shared/quote-request";
import { Address } from "../../shared/address";

export class VendorHistory {

    id: string;
    emailId: string;
    quoteReqs: QuoteRequest[];
    bookingHistory: QuoteRequest[];


}
