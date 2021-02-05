const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getfullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

console.log(normalPerson.firstName);
normalPerson.chargeBill(150);
normalPerson.chargeBill(2050);

console.log(normalPerson.salary);