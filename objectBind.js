const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getfullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// normalPerson.chargeBill(150); 
// normalPerson.chargeBill(2050);

// console.log(normalPerson.salary);


/*sobgulo object a chaile chargeBill add korte pari, othoba ekta object er method/function onno object a apply korte pari
 ekhkhtre amra normalPerson object er chargeBill method ta nicher 2 ta object a apply korbo.er jonno 3 ta upay ache, 
 prothom upay hochche bind kora. ete kore normalPerson object er chargeBill method er upor kono provab porbe na. */

const heroPerson = {
    firstName: 'Limon',
    lastName: 'Alam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Mahbub',
    lastName: 'Ahmed',
    salary: 35000
}

/* ekhane normalPerson er chargeBill method ta bind korlam heroPerson object a.ekhane this er value ta heroPerson hobe.
   bind call korar por se amaderke ekta function return kore. */
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//heroChargeBill() call korle, normalPerson er chargeBill a giye, this diye console log korle heroPerson er 3 ta property dekhabe. 
//heroChargeBill(); 
heroChargeBill(2000); // ekhane 2000 bill minus hoiche.
console.log('heroPerson salary after chargeBill', heroPerson.salary);
console.log('normalPerson', normalPerson.salary); //heroPerson a salary komleo, normalPerson er salary setar kono provab porbe na. 

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(3000);
console.log('friendlyPerson salary after chargeBill', friendlyPerson.salary);