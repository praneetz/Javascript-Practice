// A JavaScript function is a block of code designed to perform a particular task.
// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// Create a function

function add(a,b){
    return a+b
}

const result=add(1,3)
// console.log(result);

// arrow functions

const addByArrow=((a,b)=>a+b)
const resultOfArrow=addByArrow(8,2)
// console.log(resultOfArrow);

// factorial function
// let factorial=(num=>{
//     if(num==1){
//         return 1
//     }
//     else{
//         return num*(factorial(num-1))
//     }
// })

let factorial=(num=>num<2 ? 1 : num*factorial(num-1))

console.log(factorial(3));

// factorial scope
// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.
// In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

// The following variables are defined in the global scope
let num1 = 20,
    num2 = 3,
    name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
      num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

console.log(getScore());  // Returns "Chamakh scored 5"


// Scope and the function stack
// In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:
function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
  foo(3);
  
  // Output:
  
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0
  // end: 1
  // end: 2
  // end: 3
  

//   Nested functions and closures
// =>The inner function can be accessed only from statements in the outer function.
// =>The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
let a = addSquares(2, 3); 
console.log("square of sum is:=",a);


// Closures
// Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
var pet = function(name) {   // The outer function defines a variable called "name"
    var getName = function() {
      return name;             // The inner function has access to the "name" variable of the outer
                               //function
    }
    return getName;            // Return the inner function, thereby exposing it to outer scopes
  }
  myPet = pet('Vivie');
  
console.log(myPet());

// Predifine functions

// The eval() function evaluates JavaScript code represented as a string. 
console.log(eval("2+2"));

// isNaN()=The isNaN() function determines whether a value is NaN or not. Because coercion inside the isNaN function can be surprising, you may alternatively want to use Number.isNaN(). 
function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
  console.log(milliseconds('100F'));
  // expected output: "Not a Number!"
  
  console.log(milliseconds('12s'));
  // expected output: 12000

//parseInt=   The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). 
parseFloat("2"*2.0)



function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

x=makeUser("PP",23)
console.log(x);

let ob={
  "4":"HI",
  "2":"HELLO",
  1:"he"
}

for (let i in ob) {
  console.log(ob[i]);
}



function isEmpty(obj) {
  for (let i in obj){
    return true
  }
 
    return false
  
}

console.log(isEmpty({}))