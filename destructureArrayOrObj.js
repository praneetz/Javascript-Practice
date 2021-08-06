// Destructuring assignment
// The two most used data structures in JavaScript are Object and Array.

// 1.Objects allow us to create a single entity that stores data items by key.
// 2.Arrays allow us to gather data items into an ordered list.

// Example
let arr = ["John", "Smith"]
let [firstName,lastName]=arr
console.log(firstName);

console.log(arr);


// Ignore elements using commas

let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name,title);

let [a, b, c] = "abc";
console.log(a,b);


let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];



// The rest ‘…’
// Usually, if the array is longer than the list at the left, 
// the “extra” items are omitted.

// If we’d like also to gather all that follows – we can add one more parameter that gets 
// “the rest” using three dots "...":

// Example
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest);

// Default values
// If we want a “default” value to replace the missing one, we can provide it using =:

let [x="prat",y="pra"]=[]
console.log(x);


// Object destructiring

let options = {
    tittle: "Menu",
    width: 100,
    height: 200
  };
  
// let {tittle, width, height} = options;
// console.log(tittle,height);

// we can also do this
let {tittle:shot}=options
console.log(shot);
  


// We also can combine both the colon and equality:


// Nested destructuring

let option = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

let {size:{width},items:[yummy]}=option
console.log(width,yummy);


// smart function parameters
let showMe=({size:{width,height}})=>{
    console.log("++++====++++")
    console.log(width);
}

showMe(option)

