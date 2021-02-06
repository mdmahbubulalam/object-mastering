//javascript line by line kaj kore. ektu difference toiri kora jay setTimeout,setInterval diye.
function doSomething() {
    console.log(333);
}

console.log(222);

doSomething();

setTimeout(doSomething); //eita ekhon last a execute hobe. setTimeout kono hater kaj sesh korar por the eita kaj korbe.

setTimeout(doSomething, 4000) //ekhon 4 sec pore output ta ashbe.

setTimeout(function () {
    console.log('Hello')
}, 2000) // ei function ta 2 sec por execute korbe.

setTimeout(() => {
    console.log('Limon')
}, 2000) //sob kaj sesh kore then 2 sec pore execute korbe.

setInterval(() => {
    console.log('Doing it');
}, 1000); // setInterval ekta nirdishto time por por execute korbe, ekhane 1 sec por por

console.log(444);
console.log(555);
console.log(555);