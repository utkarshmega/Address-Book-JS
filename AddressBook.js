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
    //Getters and setters
    get firstName() {
        this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else 
            throw 'Enter valid first name';
    }

    get lastName() {
        this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else 
            throw 'Enter valid last name';
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{1}[a-z0-9\\s]{3,}');
        if(addressRegex.test(address))
            this._address = address;
        else 
            throw 'Enter valid address';
    }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{1}[a-z\\s]{3,}');
        if(cityRegex.test(city))
            this._city = city;
        else 
            throw 'Enter valid city name';
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{1}[a-z\\s]{3,}');
        if(stateRegex.test(state))
            this._state = state;
        else 
            throw 'Enter valid state name';
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else 
            throw 'Enter valid zip code';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([+][0-9]{3}[\\s]){0,1}[1-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else 
            throw 'Enter valid phone number';
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else throw "Enter valid Email!";
    }


}
let newContact = new AddressBookContact("Utkarsh", "Agarwal", "Chowk", "Allahabad", "Uttar Pradesh", 211003, 
                                         "9044961252", "utkarsh@gmail.com");
console.log(newContact.toString());

let contactList = new Array();
try{
    contactList.push(new AddressBookContact("Utkarsh", "Agarwal", "Chowk", "Allahabad", "Uttar Pradesh", 211003, 
    "9044961252", "utkarsh@gmail.com"));
    contactList.push(new AddressBookContact("Akshat", "Agrawal", "Civil lines", "Prayagraj", "UttarPradesh", 211001,
                                        "7086147852", "akshat@utlook.com"));
    contactList.push(new AddressBookContact("Diksha", "Singh", "Ashok nagar", "Delhi", "New Delhi", 122001,
                                            "9635214782", "diksha@hotmail.com"));
} catch (e) {
    console.log(e);
}
console.log(contactList);

//uc4 Update data using first name
contactList.forEach(element => {
    if(element._firstName=="Diksha"){
        element._address = "Tagore Town";
    }
});
console.log(contactList);

//uc5 delete data using first name
console.log('deleted contact');
let index;
contactList.forEach(element=> {
    if(element._firstName == "Akshat")   
        index = contactList.indexOf(element);
});
contactList.splice(index, 1);
console.log(contactList);