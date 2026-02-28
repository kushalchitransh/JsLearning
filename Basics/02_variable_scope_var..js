//var scope
var a=10;
console.log(a);

//var inside a Function
function printHello(){
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a); // 20

    if(true){
        var a = 30;
        console.log(a); // 30
    }

    console.log("F ->", a); // 30
}

// Calling of the function
printHello();

// var also allows re-declaration:
var a = 10;
var a = 20; // No error, re-declaration is allowed
console.log(a); // 20

