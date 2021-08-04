// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



const fetch = require("node-fetch");


let myPromise=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("SOLVED")
    },2000)
})

// myPromise().then(res=>console.log("Now its my turn"))

// async function
// An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

let looping=async()=>{
    for(let i of [1,2,3,4,5]){
        console.log(i)
        await myPromise()
        
    }
}

// looping()


function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }


//   sequentialStart()


//   fetching data from api

let githubUserData=async()=>{
    let data=await fetch("https://api.github.com/users")
    data=await data.json()
    return data
}

githubUserData().then(res=>console.log(res))
