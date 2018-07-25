const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Loops: Why do I need them, and what value do they provide?

// I need you to log every number between 0 and 50000 thats divisble by 5.

// console.log(5);
// console.log(10);
// console.log(15);

// A really common problem in code - is to repeat a very similar sequence of logic/and or an operation with a variety of data. So how can we repeat the same code on different data?

// Functions - We could avoid loops in total using just functions.

// Loops

// Assembly
// "As close to the metal as you can get."

// 101101010111010101010101010101
// compilation if -> abc345 -> 010101010101001011110101
// if () {}
// Assembly is as close as you can write to machine language.

// Even assembly needed loops.

// Do/goto
// WARNING: Do does not exist in JS - so this wont actually work

// let counter = 0;

// counter += 5;

// console.log(counter);

// if (counter > 50000) end;
// else goto 45; // This line of code would have the code go back to line 45 and start again.

// C/C++ Syntax - Goto

// So i showed you a loop. It works.
// What do we think about it?

// FizzBuzz
// Given a number, count up to it. If the current number is divisible by 3 log Fizz, if its divisible by 5 log Buzz, and if its divisible by both, log FizzBuzz.
// In any other case just log the number.

// let currentNumber = -1;

// currentNumber += 1;

// if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
//   console.log('FizzBuzz');
//   goto 63;
// }

// if (currentNumber % 3 === 0) {
//   console.log('Fizz');
//   goto 63;
// }

// if (currentNumber % 5 === 0) {
//   console.log('Buzz');
//   goto 63;
// }

// console.log(currentNumber);
// goto 63;

// You can look up super marios source code in assembly, its tens of thousands of lines of code - and it is all one big chunk of code, full of goto's but, at the very bottom line 97654 - it says: goto 1;

// Figuring out where the heck the code leads.
// We call code like this: Spaghetti code.
// Just looking at a bowl of spaghetti you have no idea where a noodle ends or begins.

// While
// What is while made of - and arguably what have any of the solutions weve discussed been made of?

/*
 All iteration (the real name for looping) has 3 necessary parts. It doesnt matter if it is a do, a goto, a while, a for, or recursion. They all need the following 3:
 1. Initialization: Where does the sequence start?
 2. Condition: When does the sequence end?
 3. Update: How do I get the initialization closer to the condition each time I run?
*/

// function countTo50000 () {
//   // Initialization: We start at 5.
//   let currentNumber = 5;

//   // Condition: currentNumber <= 50000 - We end when we no longer meet this condition.
//   while (currentNumber <= 50000) {
//     console.log(currentNumber);
//     // Update: += 5. Eventually, we will hit 50000.
//     currentNumber += 5;
//   }
// }

// While only FORCES US to use one of the three required things. We only put the CONDITION inside of while.
// This can lead to us forgetting to initialize or update.

// countTo50000();

// While has one superpower that for does not:

// do while
// Do While is a way for us to say: Do this thing atleast once even if the condition is false.

// do {
//   console.log('I ran!');
// } while (false);

// For
// For loops are a construct that do two things for us without us knowing:
// They loop (you knew that one)
// They force us to write loops a way that always works... e.g. they are actually modeling your human behavior.

// function countTo50000Again () {
//   //   init                 ; condition             ; update
//   for (let currentNumber = 0; currentNumber <= 50000; currentNumber += 5) {
//     console.log(currentNumber);
//   }
// }

// Here with a for loop we are forced to write all three required parts into the loop itself.

// countTo50000Again();

// let someArray = [1, 2, 3, 4, 5];

// for (let i = 0; i < someArray.length; ++i) {
//   // Bracket Notation
//   // This is a power of loops - this is actually a power of objects.
//   let currentElement = someArray[i];

//   console.log(currentElement);
// }

// i++ -> Post Incrementing: I will increment this value by 1 AFTER EVERYTHING ELSE ON THIS LINE HAS FINISHED.
// ++i -> Pre Incrementing: I will increment this value by 1 BEFORE EVERYTHING ELSE ON THIS LINE HAS STARTED.

// function usePlusPlus (aNum) {
//   return aNum++;
// }

// console.log(usePlusPlus(1));

// Best Practices have less to do with if it works now, and more to do with preventing ourselves from making mistakes later. If I always pre-increment, I will never run into trouble, if I always post-increment, I can, and if I try to figure out which I should use based on the situation, you arent being as lazy as i want you to be.

// I pick the lazy person because theyll always find the shortest route to the solution.

// Break and Continue

// What are these words? These words enable us to modify the behavior of a for loop from inside its body.

// Break -> It means end the for loop right now.

// Write a loop that always ends when the number hits 5.

// for (let i = 0; i < 6; ++i) {
//   console.log(i);
// }

// An Anti-Pattern. We were given a tool called 'for' and its job is to run until its condition is met. We ignored the condition, and came up with our own inside the body. We should always use a for loops condition, we should not be trying to change the way for loops work.
// All of us (programmers) want to look at a for loop and immedietaly (or as quickly as reasonable) understand it.

// Continue

// Continue is a magic word that allows us to skip a single iteration of a for loop.

// Print only every other iteration of the loop.

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// This time instead of the anti-pattern being on the CONDITION, our anti pattern is affecting the UPDATE.
// We already had a tool that defines how often we should run - and how we should get to the next run. We should leverage and we shouldnt come up with our own.

// There are, as there always are - edge cases with any code. There are and Ive seen them - moments where continue and break may maybe make sense if youve explored every other alterantive in the world. YOU will not be dealing with code so complex you need to consider for a long time. If you find one somehow during this course, Id love to see it, and we can discuss it as a class, and i will send you a pizza on the last day.

// Debugging















