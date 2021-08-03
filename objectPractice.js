// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

let bike={
    model:"Spots",
    name:"Duke 390",
    color:"Black",
    maxSpeed:170,
    madeBy:"KTM"
}

console.log(bike);
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