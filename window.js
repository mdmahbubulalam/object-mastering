var name = "alam"; //ei variable sob place theke use kora jabe, karon eita global variable
function add (num1,num2){
    var result = num1+num2; //jodi var keyword na thake or window.result thake,tokhon result ta global variable hoye jabe. 
                            // oi somoy result ta baire theke use kora jabe. baire theke use korar age oboshsoi add() function
                            // ke call korte hobe, tanahole error dekhabe.
    console.log(result); //result only function er vitore apply kora jabe, karon eita local variable. 
    console.log(name);
    return result; 

    function double(num){
        return num*2;
    } 

    var total = double(result);
    return total;
}

var sum = add(12,12);
console.log(sum);

/*winodw hochch, javascript ta execute kon place theke hochche, eita ke ekta environment bola jay.
window nhochche javascriot er ekta execution, javascruipt er vitore ovarall ja kichu hoy, ta eitar 
vitore hoy.ex-document.getElementById , console.log soho sob kichu eittar mdhdhe hoy. window er 
modhdhe sob kichui poa jabe.
javascript er window er modhde kono kichu thakle , take direct access kora jay.
window hochche puroi global. kon kichuke global korte hole window use kora jabe. */