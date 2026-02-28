let b = 20; // Global Scope
console.log(b); // 20


// Defination of the function
function printHello(){
    console.log("Hello TheTestingAcademy!");
    let b = 30; // Local Scope
    console.log(b); // 30

    if(true){
        let b = 5;
        console.log(b); // 5
    }

    console.log("let ->", b); // 30
}

// Calling of the function
printHello();

// let does NOT allow re-declaration in the same scope
//let b = 40; // Error: Identifier 'b' has already been declared

let a = 10;
a = 20; // This is allowed (reassignment, not re-declaration)
console.log(a); // 20


 var nn = "Pramod";
 let nn = "Pramod"; // Error: Identifier 'nn' has already been declared
 //console.log(nn);

