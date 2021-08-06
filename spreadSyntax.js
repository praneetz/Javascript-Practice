// ...
// A function can be called with any number of arguments, no matter how it is defined.
let total=0
let sum=(...x)=> {
   
    for(let i of x) {
        total+=i
    }
    return total
}

x=sum(1,2,4,2,1)
console.log(x);