// constructor
// The regular {...} syntax allows to create one object.
//  But often we need to create many similar objects,
//  like multiple users or menu items and so on.
// That can be done using constructor functions and the "new" operator.

// Constructor function

// Constructor functions technically are regular functions. There are two conventions though:

//    1. They are named with capital letter first.
//    2. They should be executed only with "new" operator.

//  function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
//   console.log(user);



//   let user = {
//     name: "John"
//   };
  
//   let admin = user;
//   user=null;
//   console.log(admin)

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };

//   const dogName = adventurer?.cat?.adventurer
//   const dogName = adventurer.cat.dogName
//   console.log(dogName);
console.log(adventurer?.cat?.name)
