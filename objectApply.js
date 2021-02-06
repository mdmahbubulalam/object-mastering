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

/* ekhane normalPerson er chargeBill method ta apply korlam heroPerson object a.ekhane this er value ta heroPerson hobe.
   call and apply duita diyei jekono objecte er method ke direct call kora jay, but apply er khetre argument ke array hisabe 
   pathate hobe.  */
normalPerson.chargeBill.apply(heroPerson, [900,300,30]);
normalPerson.chargeBill.apply(friendlyPerson,[3000,300,30]);
console.log(heroPerson.salary);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);


