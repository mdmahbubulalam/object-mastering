const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getfullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount,tips,tax) {
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;
    }
}

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

/* ekhane normalPerson er chargeBill method ta call korlam heroPerson object a.ekhane this er value ta heroPerson hobe.
   normalPerson er chargeBill method a jotogulo argument thakbe totota argument pathate hobe. */
//normalPerson.chargeBill.call(heroPerson,900,300,30);
normalPerson.chargeBill.call(friendlyPerson,3000,300,30);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);


