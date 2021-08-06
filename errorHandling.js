// No matter how great we are at programming,
//  sometimes our scripts have errors. 
//  They may occur because of our mistakes, 
//  an unexpected user input, an erroneous server response, and for a thousand other reasons.

// Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

// But there’s a syntax construct try...catch that allows us to “catch” errors so the script can
// , instead of dying, do something more reasonable.


try{
    console.log("Hello")
    console.log(x+y);
} catch(err){
    console.log("Something wrong in this code");
}

console.log("Finally")




try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (err) {
    console.log( "won't work" );
  }

  console.log("End");


//   throw an error


throw new Error("I dont Know")