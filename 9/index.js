const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// const anArray = [1, 2, 3];

// const aGrid = [];

// for (let i = 0; i < 3; ++i) {
//   aGrid.push(anArray);
// }

// anArray.push(4);

// console.log(aGrid);

// This seems undesired.

// Primitives
let aNumber = 5;
let aString = 'hi';
let aNull = null;
let aBool = false;
let anUndefined = undefined;

// Immutability
// false = true;

// Invalid left-hand side in assignment
// You are not allowed to change that value.

// Immutability: Immutability is a term we use in programming to refer to data that cannot be CHANGED, DELETED, OR UPDATED. Ever.

let someNumber = 3;
someNumber = 10;

// You just changed 3 to 10.
// "someNumber changed to 10."

// What are variables?

// About Computers
// Where does stuff go when i type it?
// We all have different hard drives on our computer: The things we type on a computer exist in the physical world.
// Sometimes on HDD, it exists as a literal scratch on a disk.
// On a SSD it exists as a state of a particle in a drive.

// Now that we know that the things on a computer exist in the real world, we start to dive into some other questions:
// How do we refer to those places on the computer?

// I know Matthew lives in a house with yellow walls.
// Just like I know that someNumber has 3 as a value.

// Knowing things about values - describes nothing about location.
// What we do as humans to solve the problem of "how do i locate things I know about" - We use addresses.
// Unsuprisingly, computers do the same thing.
// As humans we might say 40 windsor road, but a computer would say 0x000001 -> per place we can store 64 bits
// 0 or 1

// 0 = 0
// 1 = 1
// 2 = 00
// 3 = 01
// 4 = 10
// 5 = 11

// What is a variable?
// A variable is just an address on a computer.
// When we declare a variable we are saying two things:
// 1. I need space for something in the future.
// 2. Take this name, and let me come back to this space, anytime I say this name. (Scope complicates this dont worry about it)

// We can think about variables as a 'map' between how we understand addresses and how a computer understands addresses.

// How do we use memory on a computer system effectively?

// Pointers and Memory
// true = false -> we all agreed this is a no no.
// JavaScript comes with areas of memory that have values already stored in them, and WE ARE NOT ALLOWED TO CHANGE THOSE VALUES.

// 0x001 -> true -> the only true in all of javascript exists at this one location
// Every time we say true - we are saying that place.

// I ask for memory, the computer says: oh ok, ill go get your memory: 0x100
// Oh, thanks for that, can you remember that memory place as 'someTrue'
// Yup!
// Alright, computer can you put 'true' at that memory place?
// No, but I can refer to the 'true' that I already know about, would you like me to do that?
// Yes, sure do that.

// someTrue = 0x100 = true = 0x001
// someTrue -> 0x100 -> 0x001 -> true

let someTrue = true;

// Immutability - that location is not able to ever be altered. We cannot alter 0x001.

// Then what i said was what if i said:

someTrue = false;
// someTrue -> 0x100 -> 0x002 -> false

// This is all fine. We havent asked JS to change a value that is immutable, and we have REASSIGNED our variable to point to a new value.

// This whole process is true of ALL PRIMITIVES IN ALL OF PROGRAMMING LANGUAGES.

// This is how this is possible.
// console.log(true === true);

// Strings are actually collections of characters. The characters are already reserved in memory, the string itself is not.

// You just a spent a week with non-primitives
// The implications of pointers against non-primitive types is non-trivial

const someThing = {};

const objOne = {
  a: {
    b: {
      foundMe: someThing,
    }
  }
};

const objTwo = {
  c: [{ didntFindMe: someThing, }],
};

// Not the same
// console.log(objOne === objTwo);

// What exactly are objects?
// Objects are just containers for your wildest dreams
// Objects act as address books
// Objects are a tool that allows us to build a book with more addresses

// console.log(objOne.a.b.foundMe === objTwo.c[0].didntFindMe);

// objOne -> 0x1 -> {} -> 0x1a -> a -> 0x2 -> {} -> 0x2a -> b -> 0xSPECIAL -> someThing
// objTwo -> 0x9 -> {} -> 0x9a -> [] -> 0 -> 0x8 -> {} -> 0x8a -> didntFindMe -> 0xSPECIAL -> someThing

// const anArray = [1, 2, 3];

// const aGrid = [];

// for (let i = 0; i < 3; ++i) {
//   aGrid.push(anArray);
// }

// anArray.push(4);

// // Its the same array three times!
// console.log(aGrid);

// aGrid -> 0x2 -> [0x1, 0x1, 0x1]
// 0x1.push(4);
// hey show me 0x2
// okay, 0x1, 0x1, 0x1

// slice is just creating a new place, and moving all the stuff from the old to the new
// shallowCopy -> We dont check that there is a place inside the place
const mySlice = (anArr) => {
  // Line 172 is the trickster, not the for loop
  const newArray = []; // make me a new place

  // anArr.forEach(elem => newArray.push(elem));
  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];
    // take each thing out of the old place
    
    newArray.push(currentElem);
    // put it in the new place
  }

  // return the new place
  return newArray;
}

const secretTreasureChest = [10000];

const anArray = [secretTreasureChest, 2, 3];

const aGrid = [];

for (let i = 0; i < 3; ++i) {
  aGrid.push(mySlice(anArray));
}

anArray.push(4);
// Shallow Copying not working to our favor
anArray[0].push('Stolen');

// console.log(aGrid);

// Shallow Copy is when we copy each element in an array, BUT WE DONT CONFIRM THAT ANY OF THE ELEMENTS ARE ANOTHER REFERENCE E.G. AN OBJECT.
// Shallow Copying will ALWAYS WORK ON PRIMITIVE ONLY OBJECTS.
// But, when we nest objects, we can have references that remain after just moving each element. E.g. the safe in your house is the same safe, even if you move houses.

// What do I do to solve that?
// JavaScript does not come with a solution.
// deepCopying is something you will have to hand code on your own anytime you need it. There are libraries (things other people built) that you can download that have this as a part of them, but generally, youll probably find yourself doing it yourself.






