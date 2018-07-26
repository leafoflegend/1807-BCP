const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// Scope

let aThing = 'a thing';

// Obvious to us that it works
// console.log(aThing);

// Much less obvious
// function anotherThing () {
//   console.log(aThing);
// }

// anotherThing();

// Not obvious

// We did in fact create another scope - that scope is inaccesible from the scope we tried to access it from.
// function createScope () {
//   let anotherThing = 'another thing';

//   return anotherThing;
// }

// createScope();

// console.log(anotherThing);

// There are some assumptions in our head about how scope works without ever having formally spoken about it.

// ES5 - Scope (pre-2015)
// Scope, is only CREATED by a function.


// if (true) {
//   var anotherThing = 'another thing';
// }

// console.log(anotherThing);

// Functions create scope: but why?

// Value proposition: Why should I care?
// Scope provides something we dont often think about: self contained behavior and data.
// If we think about functions as a cheesemaker.
// Cheesemakers arent really worth a whole lot if they cant get their hands on milk.
// As an astute cheese conisoure - do you really care about how they got the milk?

// Isolation
// In really good programming - we should build things that work - regardless of the data around them.
// What i mean is: we dont care if the cheesemaker is in wyoming, maine, or france - we expect he can make cheese.
// We dont care if your laptop is in your house, or school, or work - it should be able to turn on and have things typed on it.
// We want our functions to work the same way.


// I used a and b for both.
// Scope is what protects that data from effecting other functions.
// function add (a, b) {
//   return a + b;
// }

// var a = 5;

// function subtract (a, b) {
//   return a - b;
// }

// console.log(a);

// console.log(subtract(5, 10));

// Scope has some pretty clear principles in pre-ES6 land:

// 1. Any time we open a function body, we have created a self-isolating scope.
// 2. This body (or function scope) CAN access data outside of its scope - as long as that data is not within another scope.
// 3. Scope cannot be altered.

// var d = 5;

// function addThree (a, b) {
//   return a + b + d;
// }

// console.log(addThree(5, 5));

var e = 100;

function hasFunctions (e) {
  var d = 5;

  function add (a, b) {
    return a + b + d + e;
  }

  console.log(add(5, 5));
}

// hasFunctions(5);

// Anxiety Attack
// JavaScript always selects the closest variable in regards to scope. If there are two things of the same name - the thing that is the closest parent will be selected for use.

// Namespace Collision: Variables of the same name exist in the same codebase. Scope is attempting to simplify the resolution process for how it selects which variable to use in this scenario.

// var a = 5;

// console.log(a);

// Global Scope isnt really accurate for the current situation. BECAUSE: when we run a file of JS, it is actually run as one big function.
// So then what is global scope?

// Always declare our variables.
// a = 5;

// console.log(a);


// let futureValue = null;

// function setFutureValueA () {
//   futureValue = 'a';
// }

// function setFutureValueB () {
//   futureValue = 'b';
// }

// setFutureValue();

// console.log(futureValue);

// Hoisting

// someFunction();

// Function Declaration
// function someFunction () {
//   console.log('I ran!');
// }

// We as humans expect our code to be run top to bottom, left to right
// What I wrote above, broke all of those assumptions. And seems to infer - that JavaScript is a liar. It is.

// Function Expression
// var someFunction = function () {
//   console.log('I ran!');
// }

// Arrow Function
// const someFunction = () => { console.log('I ran!'); }

// There are two parts to any variable declaration
// The left side and the right side.
// The left side is the variable declaration
// the right side is the variable assignment
// Variables are just names we give to places in memory.
// A is a real physical place in the real world on your computer. Probably only like a micron in width or whatever, but its a place.
// When we say var a - were really saying: 'hey javascript i want a place to put stuff, and i want to be able to look at whats there by giving you the letter 'a''
// When we say a = 5 we are instead saying: 'that place 'a' i want it to be equal to 5.'
// var a = 5;

// When we say var a - we know that were going to need memory. And one of the optimizations that JavaScript takes thats a little weird is that it actually makes these places in memory BEFORE WE NEED THEM.

// The first pass: When we write javascript and we say: 'hey computer execute my code and do all the things' - JavaScript is a big liar and does some stuff first. Instead of just running our code - it goes through our code and looks at every left hand side of any assignment (e.g. the variable) and makes those places exist.
// After its done that - it will take a second pass and do all the assigning and running of our code.

// var thingThatDoesntExist;

// console.log(thingThatDoesntExist);

// thingThatDoesntExist = 5;

// doAThing();

// function doAThing () {
//   console.log('I did a thing!');
// }

// doAThing = function () {
//   console.log('I did a thing!');
// }

// Function declarations are cheating the system. They are putting BOTH the memory needed, AND the definition of that memorys value into memory on the first pass. Because they dont have a right side. Its treated as one big left side equation.

// Hoisting: Hoisting is the strange mechanic of JS where functions get hoisted to the top of the file.
// Hoisting is not a programming thing - its a weird disturbed nuance of JS.

// I think hoisting can make code hard to read because its strange to see functions run before they are defined. Try to not purposefully use it. You should know its a thing, and that it can happen - especially so if you see someone elses code you understand what is going on.

// Scope in ES6

// var vs let

// Let is just var with one difference: let creates scope.

// if (true) {
//   let something = 'something';
// }

// console.log(something);

// Block Scope
// Let will take whatever curly braces surround it - and create a new scope if it does not already exist within those braces.
// Let is far superior to var because of this - BUT it should not be something you actively think about. The whole point of having this be a behavior of let - was that var not using this behavior leads to VERY CONFUSING MOMENTS in big code bases. We highly reccomend using let just in general - and hopefully youll never have to think about why we chose to do this.
// ES6 in general was built on the problems of ES5 - and so that YOU GUYS E.G new developers dont have to think about all the weird problems that myself and others did for many years.