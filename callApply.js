const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salery: 15000,
    getfullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salery = this.salery - amount;
        return this.salery;
    }
}

console.log(normalPerson.firstName);
normalPerson.chargeBill(150);
normalPerson.chargeBill(2050);

console.log(normalPerson.salery);