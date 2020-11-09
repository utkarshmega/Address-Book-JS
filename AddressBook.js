console.log("Welcome to the address book problem using js");

class AddressBookContact {
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }
    toString() {
        return "First Name: "+this.firstName+"; Last Name: "+this.lastName+"; Address: "+this.address+"; City: "+this.city+"; State: "+this.state+"; Zip: "+this.zip+
        "; Phone Number: "+this.phoneNumber+"; Email: "+this.email;

    }
}
let newContact = new AddressBookContact("Utkarsh", "Agrawal", "Chowk", "Allahabad", "Uttar Pradesh", 211003, 
                                         "9044961252", "utkarsh@gmail.com");
console.log(newContact.toString());