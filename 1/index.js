const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);





// Tidy Code

// What does not tidy code look like?

// Write a function that logs an array

function pa  ( a){ for(let i=0; i< a.length; i++) { console.log(a[i]); } }
// pa([1, 2, 3, 4, 5]);

// Why isnt this clean code?
// Multiple lines
// indentation
// spacing consistency
// what is pa?
// what is a?
// adding new lines

// Eliots List of whats wrong:
// What is pa? Who knows thats awful - we should always name our variables and functions with appropriate names that describe either: the data they represent or - the behavior of the function.
// spacing consistency: there are two spaces after arrayLogger but in other places, we have only one space between things. You can use as many spaces between things as you kind of find appropriate, but it should be the same amount between all things.
// Additional space before argument name
// What is a? Who knows? We should name our arguments to represent that data that they are.
// Missing a space before the curly bracket
// Indentation rule: After every opening curly bracket, we make a new line.
// Every time we make a new line - we indent ONE UNIT OF INDENTATION.
// Missing a space before the parens for the for loop.
// Missing spaces around the equals sign.
// Missing space before the less then sign.
// Another curly brace after the for loop - that means indent again.
// Indentation rule - every closing curly brace, should be on its own line, and remove ONE UNIT OF INDENTATION.
// Same rule again.
// I would grab the current element and store it in a variable for clarity.

function arrayLogger (anArray) {
  for (let i = 0; i < anArray.length; i++) {
    let currentElement = anArray[i];

    console.log(currentElement); 
  } 
}

// arrayLogger([1, 2, 3, 4, 5]);

// Write every line of code like you're always going to have to leave it, and the person who will end up maintaing it - is a sociopathic serial killer who knows your address.

// ONE UNIT OF INDENTATION
// Tabs vs Spaces

// Tabs are not made up of spaces.
// The tab key inserts a tab character.
// What is a tab character?

// console.log('\thi there')

// Tabs are a character that each and every one of our computer systems interprets in a different way.
// On vincents computer a tab might look like 4 spaces
// On granny marys computer it may look like 20 for her vision
// And on mine it might look like 2

// Tabs
// Pros
// You can write code that looks the way you like it on your computer - and when you share it with someone, it looks the way they like it on their computer.
// Cons
// I might not want my code to look different to you. Maybe theres a lot of indentation so if you use heavy indentation my code will go over the screen or need horizontal scrolling.

// Spaces
// You know what a spcae is. A space is a predefined width in any given font. It is always the same width. A spcae is a space.

// Pro
// When we use spaces, we know everyone is looking at exactly the same code.
// Con
// We cant have code be styled to our preference.

// Tabs vs Spaces?
// Our tab keys on our computer can be configured to emit one or the other. Programmers for all of eternity have argued about which is better, and have different configs for their computers. This leads to what is disgustingly called 'code smell' which is when we have codebases with a mixture of tabs and spaces.

// No matter what you choose most agree to the following:
// A unit of indentation is either 1 tab or 2 spaces - OR - 2 tabs, and 4 spaces.
// A big no no of any choice is: mixing tabs and spaces, or using any odd number besides 1. If you use 3 spaces youre just a dick.

// I dont actually care what you use - I only care about one thing with clean code and its very easy to explain:

// CONSISTENCY.
// Pick any style and any rules you like (within reason) - BUT YOU BETTER OBEY YOUR OWN RULES EVERYWHERE.

// Soooo... I do want to show us something...




