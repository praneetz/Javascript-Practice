// json=>Javascript object notation
// JSON is an open standard file format and data interchange format that uses human-readable text to store and
// transmit data objects consisting of attribute–value pairs and arrays. 

let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };

// user=JSON.stringify(user)
// console.log(user);
// console.log(typeof user);
// console.log(user?.toString?.());

// stringify=>The method JSON.stringify(student) takes the object and converts it into a string



// JSON.parse
// To decode a JSON-string, we need another method named JSON.parse.
// syntax
// let value = JSON.parse(str, [reviver]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';


console.log(JSON.parse(str))


let usr = {
    name: "John Smith",
    age: 35
  };

console.log(typeof JSON.parse(JSON.stringify(usr)))



console.log("====================================================================");

let pow=(x,n)=>{
    if(n==0)return 1
    else{
        return x*pow(x,n-1)
    }
}

console.log(pow(2,4))


// Summary

// => JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// => JSON is a data format that has its own independent standard and libraries for most programming languages.
// => JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// => Both methods support transformer functions for smart reading/writing.
// => If an object has toJSON, then it is called by JSON.stringify.



let x=(n)=>{
    if(n==1){
        return "End"
    }
    else{
        return "JKH"
    }
}

console.log(x(3));

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

console.log(company);


