class Person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

//old style. before es6.
function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

//new keyword diye class ke object a create kora jay
const heroPerson = new Person('Limon','Alam',15000);
const friendlyPerson = new Person1('mahbub','Alam',25000);

console.log(heroPerson);
console.log(friendlyPerson);
