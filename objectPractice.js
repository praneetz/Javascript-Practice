// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

let bike={
    model:"Spots",
    name:"Duke 390",
    color:"Black",
    maxSpeed:170,
    madeBy:"KTM"
}

console.log(bike); //print the object
console.log(bike.name); 
console.log(bike.madeBy);
console.log(bike.color);


// we can also create a Object by the of constructor

function bikeConstuctor(name,color,maxSpeed){
    this.name=name
    this.color=color
    this.maxSpeed=maxSpeed
}

let details=new bikeConstuctor("RE classic","black",120)
console.log(details);

let person={
    firstName:"Praneet",
    lastName:"Negi",
    age:22,
    married:false,
    from:"Uttarakhand"
}

// access keys and values 
for(let key in person){
    console.log(`Your keys and values = ${key}: ${person[key]}`);
}

// acceccing values from person
console.log(Object.keys(person));

// access values from person object
console.log(Object.values(person));

// freeze=The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in. 
Object.freeze(person)
person.age=28
console.log(person);

// Object.fromEntries()=The Object.fromEntries() method transforms a list of key-value pairs into an object.
let arr1=["name","age","gender"]
let arr2=["Prateek",24,"male"]

let obj={}
for(let i=0;i<arr1.length;i++){
    obj[arr1[i]]=arr2[i]
    
}

console.log(obj);

// Object.isFrozen()=The Object.isFrozen() determines if an object is frozen.A Boolean indicating whether or not the given object is frozen.
// console.log(Object.isFrozen(obj)); 
console.log(Object.isFrozen(person));



// object have properties and methods

let user={
    name:"Praneet",
    age: (num)=>{
        return `Your age is:${num}`
    },
    work:function(){
        return "Work in IT sector as a software developer."
    }
}

console.log("==============================================");
console.log(user.age(22),user.work());


function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }



