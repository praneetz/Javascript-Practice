// Array:-
// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

// Create an Array
let fruits = ['Apple', 'Banana']

// console.log(fruits)

// Access an Array item using the index position
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

// Loop over an Array

fruits.forEach(element=>{
    console.log(element)
})


// Add an item to the end of an Array
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
console.log(fruits);

// Remove an item from the end of an Array
let lastRemove = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]


// Remove an item from the beginning of an Array
let firstRemove = fruits.shift() // remove Apple from the front
// ["Banana"]

// Add an item to the beginning of an Array
let addBegining=fruits.unshift("Apple")

// find the index from Array
let indexOfBanana=fruits.indexOf("Banana")
// console.log(indexOfBanana);

// Remove an item by index position
let removeByAnywhere=fruits.splice(0,1)
// console.log(removeByAnywhere);


// array methods

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']

// every=The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
console.log(vegetables.every(element=>element.length>3))

// fill=The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 
const array1 = [1, 2, 3, 4];
// console.log(array1.fill(7,2,3))

// filter= The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let newVegitables=vegetables.filter(element=>element[0]=="C")
// console.log(newVegitables);

// find=The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
const found=array1.find(element=>element>3)

// console.log(found);


// findIndex=The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. 
let findingIndex=array1.findIndex(element=>element>=3)
// console.log(findingIndex);

// includes=The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
console.log(vegetables.includes("Radish"))

// indexOf=The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
console.log(vegetables.indexOf("Radish"))

// lastIndexOf=The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. 
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf("Dodo"));


// map=The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 

let modifiedArray=array1.map(element=>element*1000)
// console.log(modifiedArray);

// so=The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 
let even=array1.some(element=>element%2===0)
console.log(even);