/*javascript er khetre this mane bujhabe, javascript je function ta run hochche, kar context a choltache.
*/

const myObj = {
    name:"Limon Ali",
    getFullName : function(){
        console.log(this)//kono ekta object or calss or method er vitore this use korle, sekkhetre this oi object take represent korbe. 
        return 'Mr. '+this.name;
    }
}

myObj.getFullName();

const anotherObj = {
    name : "Mahbub Ali",
}

anotherObj.getFullName=myObj.getFullName;//myObj er getFullName ta anotherObj e rakha hochche.
console.log(anotherObj);
//kono ekta method ke call korle method er left side a je thakbe, seta hochche oi method er this er value
anotherObj.getFullName();

function add(a,b){
    console.log(this);
    return a+b;
}

add(12,12); // er left side kichu nai, tai this value ta hobe window.

// kono ekta dom element er upore jodi event handler ta thake, tar vitore jetate click kora hobe, setai hobe this.