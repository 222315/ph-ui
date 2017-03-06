import { VendorHistory } from "./vendor-history";

export const vendorHistory: VendorHistory = {
    id: "1234",
    emailId: "test@test.com",
    quoteReqs: [{
        id: "req1",
        date: "Feb 28, 2017",
        eventType: "BirthDay",
        eventDate: "Jan 31, 2017",
        noGuests: "50",
        location: {
            addressLine1: "street1",
            addressLine2: "street1",
            addressLine3: "",
            city: "Phoenix",
            zip: "85308",
            country: "USA"
        },
        
        services: [{
            id: "serviceId",
            serviceType: "Big Hall",
            subType: "Marriage Party",
            quoteValue: "$5000",
            reqSpls: "Generator 24 Hour service"
        }],
        status: "Requested",
        vendorRes: {
            id: "req1",
            vendors: [{
                id: "vend1",
                name: "PartyHulchul",
                type: "EventPlanner",
                quoteValue: "100",
                specials: "serve all kind of parties",
                reasonForQuoteChange: ""
            }]
        },
        paymentDetails: {
            id: "payment1",
            toPaid: "Vendor1",
            paymentMode: "CARD",
            amount: "100",
            payType: "A",
            cardDetails: {
                id: "1222",
                cardNumber: "1234567890",
                expdt: "11/20",
                name: "XYZ",
                CVV: "123"
            }
        },
    }],

    bookingHistory: [{
        id: "req1",
        date: "Dec 27, 2016",
        eventType: "BirthDay",
        eventDate: "Dec 31, 2016",
        noGuests: "23",
        location: {
            addressLine1: "street1",
            addressLine2: "street1",
            addressLine3: "",
            city: "Hyderabad",
            zip: "523101",
            country: "India"
        },
        services: [{
            id: "serviceId",
            serviceType: "FunctionHall",
            subType: "Open Hall",
            quoteValue: "$100",
            reqSpls: "Need Cool water"
        }],
        status: "Booked",
        vendorRes: {
            id: "req1",
            vendors: [{
                id: "vend1",
                name: "PartyHulchul",
                type: "EventPlanner",
                quoteValue: "100",
                specials: "serve all kind of parties",
                reasonForQuoteChange: ""
            }]
        },
        paymentDetails: {
            id: "payment1",
            toPaid: "Vendor1",
            paymentMode: "CARD",
            amount: "100",
            payType: "A",
            cardDetails: {
                id: "1222",
                cardNumber: "1234567890",
                expdt: "11/20",
                name: "XYZ",
                CVV: "123"
            }
        },
    }]

}
