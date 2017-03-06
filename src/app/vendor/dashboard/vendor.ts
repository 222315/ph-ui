
import { Phone } from "../../shared/models/phone";
import { Address } from "../../shared/models/address";


export class Vendor {

    id: string;
    firstName: string;
    lastName: string;
    emailId: string;
    phone: Phone;
    mailingAddress: Address;
    billingAddress: Address;

}
