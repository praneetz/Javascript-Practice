// Arrow functions
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:

// syntax= let func = (arg1, arg2, ..., argN) => expression


// Example
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3


// 1.If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6


// 2. If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => "Hello!"

console.log(sayHi())


// 3.Sometimes we need something a little bit more complex,
//  like multiple expressions or statements. It is also possible, 
// but we should enclose them in curly braces. Then use a normal return within them.


let add = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( add(1, 2) ); // 3


// question=change this function to arrow function
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  

// Solution

let ask=(question,yes,no)=>{
    question ? yes() : no()
}


// Arrow functions are handy for one-liners. They come in two flavors:

//=> Without curly braces: (...args) => expression – the right side is an expression: 
// the function evaluates it and returns the result.
//=> With curly braces: (...args) => { body } –
//  brackets allow us to write multiple statements inside the function, 
// but we need an explicit return to return something.
