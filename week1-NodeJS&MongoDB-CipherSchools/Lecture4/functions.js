// ES5 - functionally scoped
// es6 - block scoped

//Scoping

function testing() {
    var abc = 20;
    let def = 100;
    console.log(abc);
    //Block scope
    if (1) {
        var xyz = "block scoped";
        console.log("Inside If", xyz);
        console.log(abc);
    }
    console.log("Outside if", xyz);
}

testing(); // calling a function

var name = "Cipher";
let year = 2020;

function test() {
    console.log(name);
    console.log(year);
}

test();

//Hoisting
myFunc();
myFunc2();

function myFunc() {
    console.log("Inside myFunc Declaration");
}

let myFunc2 = function () {
    console.log("Inside muFunc2: function expression");
};

console.log(name2);
name();

var name2 = "Mrudula";
function name() {
    console.log("hello");
}

// Arrow functions

let newFuncArrow = () => {
    console.log("Arrow Functions Created");
    console.log(this);
};

newFuncArrow();

function funExp() {
    console.log("Function expression Created");
    console.log(this);
}
funExp();

let newFunc = (name) => console.log(name); //Arrow

newFunc("cipher"); // argument
