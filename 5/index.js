const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// Arrays are lies.

// console.log(typeof []);

// Arrays dont really exist.
// Arrays are just a special kind of object.
// Primitives or Objects.

// var myArray = {
//   push: function (elem) {
//     if (this.length) {
//       this[this.length] = elem;
//       this.length = this.length + 1;
//     } else {
//       this[0] = elem;
//       this.length = 1;
//     }
//   },
//   length: 0,
// };

// myArray.push(1);
// myArray.push(2);

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray.length);

// What is the value of an array and what does it solve?
// Arrays are a convenience tool for developers - they do not add anything to the language that couldnt be done without them. They are solely for you, and your time, and your sanity. Arrays help us with one very important task: How do we organize values in a collection?

// Example 1
// You are a ticket vendor, and you have a set number of tickets, and people get to enter in the order they purchase.
// If I ask you to do this without an array what are your first thoughts?
// Map - Rudimentary Way to deal with this

// What came before the array?
// Linked List

// Linked Lists are not really a list at all, but instead a starting point with an unknown ending point

// We have some place somewhere, that we can always know about.
let head = {
  // a value is living here that we can store something at
  value: null,
  // metadata: it has to know about the next thing, and so on and so forth
  next: {
    value: null,
    next: null,
  },
};

let addNode = (value) => {
  // If there is no value yet, make the head have value
  if (head.value === null) {
    head.value = value;
  } else {
    // Start iterating through the next piece
    let currentNode = head;

    // As long as there is value at the next piece, grab the piece after the next piece...
    while (currentNode.next.value !== null) {
      currentNode = currentNode.next;
    }

    // When we finally find a piece without a value, we then store the value there and generate the next empty piece.
    currentNode.next = {
      value: value,
      next: {
        value: null,
        next: null, 
      },
    }
  }
}

addNode(1);
addNode(2);
addNode(3);

// console.log(head);

// What are some of the things you use right now with arrays that this does not support?
// Pop
// Unshift
// Shift

// Linked Lists were infamously difficult to manage the memory of. We had no idea how big they had grown, or how to easily operate on them with more complex requests:
// "I want to take the middle three elements out of that collection."

// Arrays introduce two very important mechanics that traditional linked lists do not have: Length as a property, helper methods: "push, pop, shift, unshift, slice, forEach, splice, indexOf"

let someArray = [1, 2, 3];

// Length - length is the only thing making iteration feasible here. Its how we know to start at a beginning, and go until an end.
// Bracket Access
// for (let i = 0; i < someArray.length; ++i) {
//   // someArray[i];
//   let currentElem = someArray[i];

//   // console.log(currentElem);
// }

// Bracket Access
// Bracket Access has NOTHING to do with arrays. It is an ability of objects.

let someObj = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};


for (let i = 0; i < someObj.length; ++i) {
  // Bracket Access is a way for us to access 'keys' using javascript.
  let currentElem = someObj[i];

  // console.log(currentElem);
}

// Bracket Access is a dynamic alternative to dot notation:
// someObj.length
// JavaScript and honestly most languages, do not allow a number to start an identifier.
// Bracket Access

// Within the brackets of someObj[i] -> we inserted a variable with a changing value, thats perfectly acceptable and the best use of bracket notation - to access things at different places programatically.
// Anything you put in brackets is coerced to a string.

// console.log(typeof []);

// So how do I go about finding out the difference between a POJO and an array?

// function arrayIsArray (maybeArray) {
//   return typeof maybeArray === 'object' && typeof maybeArray.length === 'number';
// }

// console.log(arrayIsArray([]))

// Array.isArray([]);

let anArray = ['bob', 'bill', 'maxine'];

anArray[20] = 'eliot';

// An ordered collection of values.
// JavaScript will do almost anything to protect the integrity of the order of arrays.
// Here, because we put something at index 20 - JS has decided there must be 17 things between that and the current last element, sooooooo let me shove some stuff in there and change the length;
// console.log(anArray);
// console.log(anArray.length);

// This is why arrays have helper methods. Push, pop, shift, unshift, etc. are all designed to mutate the array safely. If you use those methods, you can never get an array into what I would call an 'unstable state'
// I shouldve just used push.
// I shouldve used indexOf to find the index to do the assignment on, so that I dont make a mistake.

// Slice
// Slice is a method to create a shallow copy of an array, or a portion of an array.

// Slice takes two arguments: begin, and end. Both are indexes, and omits the end index from the copied portion.
// Begin and end have one odd functionality that most people are unaware of: they can take negative numbers. Negative numbers mean that you are asking for a number starting from the end of the array away. So -1 on [1, 2, 3] - would be index 1 because the final index is 2 - 1 = 1.

let sliceArray = [1, 2, 3, 4, 5];

let returnedArray = sliceArray.slice();

console.log('Returned: ', returnedArray);
console.log('Original: ', sliceArray);
console.log('Are same array: ', returnedArray === sliceArray);