const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// Functions as Objects
// Higher Order Functions (HOF)

// Functions are just objects like all other objects, we can pass references to their values around, we can mutate them, we can even pass them in as arguments into other functions to be called at a later time.

const callAFunc = (aFunc) => {
  aFunc();
}

const anotherFunc = () => {
  console.log('I ran!');
}

// callAFunc(anotherFunc);

const returnAFunc = (aFunc) => {
  return aFunc;
}

const returnedFunc = returnAFunc(anotherFunc);
// returnedFunc();

// What is scope?
// Scope is how far you can reach to grab a value.
// Scope is the context in which we refer to data.

// let someThing = 'a';

// const anotherThing = () => {
//   let someThing = 'b';

//   console.log(someThing);
// }

// anotherThing();

// 1. Functions create scope.
// 2. We always grab the data from the scope 'closest' to us.

// const scopeBreakingExample = () => {
//   const privateData = 'most secret secret you can ever imagine.';

//   const publicFunction = () => {
//     console.log('Hi im a public function!');
//     console.log('Here is a secret i shouldnt tell you: ', privateData);
//   }

//   return publicFunction;
// }

// const savedPublicFunction = scopeBreakingExample();

// savedPublicFunction();

// We have a clash of rules: 1. scope is private to functions. 2. we can return functions from functions.
// Is the function we return from a function allowed to show us the private scope that it came from?

// Closure is a purposeful breaking of the rules.

// Closure

// // Scope 0

// const scopeBreakingExample = () => {
//   // Scope 1
//   // privateData is part of scope 1.
//   const privateData = 'most secret secret you can ever imagine.';

//   const publicFunction = () => {
//     // Scope 2
//     console.log('Hi im a public function!');
//     // But in scope 2, WHERE WE HAVE ACCESS TO SCOPE 1, we ask for that data.
//     // This is entirely allowed at this moment.
//     console.log('Here is a secret i shouldnt tell you: ', privateData);
//   }

//   // But now, we use the one word in javascript, that allows us to return a thing from one scope to another.
//   return publicFunction;
// }

// // We store the thing we return, which at one point had access to scope 1.
// const savedPublicFunction = scopeBreakingExample();

// // Then when we call it we see that it can STILL ACCESS SCOPE 1.
// savedPublicFunction();

// References
// All things on a computer exist in a real place.
// We give those places addresses.
// privateData is in fact a place - and weve shared its address with another thing, that we later return to ourselves. So we kind of know about the address in a sense...
// If you went out in college/high school and your friend was like "i know this cool place" - you might not know the address, but simply being around your friend that does, is enough. You can find your way there.
// We can think about the publicFunction as that friend.

const garbageFunc = () => {
  let aThing = 'a thing';
  console.log(aThing);
}

// garbageFunc();

// Does aThing exist on line 118?
// Didnt we make a place and put that thing there?
// Yeah heck yeah we did that.

// Garbage Collection
// When does a language know to get rid of data, and give that memory back to the computer?
// Its implemented in so many various ways that we cant begin to think we know how its always going to work.
// In some languages its manual - e.g. you have to literally say "clear 0x0001";
// Have you ever done that in JS?
// Operating Systems.

// JavaScript has the most simple Garbage Collection you can imagine: "If there are no more references left in the file on the current line of code I am on to a thing - I will give that memory back to the computer."

// The only reason closure works, is becaus we trick the garbage collector.

// Closure Example

// Counter
// Write a function that counts up from 0.

// Has to run all at once
// const counter = (ceiling) => {
//   for (let i = 0; i <= ceiling; ++i) {
//     console.log(i);
//   }
// }

// counter(10);

// Closure does not
const createCounter = () => {
  let counter = 0;

  const incrementFunction = () => {
    counter++;
    console.log(counter);
  }

  return incrementFunction;
}

// const counterOne = createCounter();
// counterOne();
// counterOne();
// counterOne();

// console.log('Hey there bob!');

// counterOne();

// I just made a function have its own private memory.

// const increment = () => {
//   let counter = 0;

//   counter++;

//   console.log(counter);
// }

// increment();
// increment();
// increment();

// Whats the value of closure?
// We want our code to built of independent units.
// If things work in isolation, then we can trust that they perform their job when combined.
// If functions DONT rely on data from outside of them, we can have a larger degree of faith in them performing their job.
// Secondly, privatizing data is a really powerful ability.

// We want to build a function that can perform all sorts of behaviors against data, IN PREDEFINED WAYS.
// API.
// Application Programming Interface
// I have a bunch of data, and I want you to be able to perform actions against it. but not any action...
// Facebook doesnt want you to be able to change someone elses name.
// Banks dont want you to be able to add money to your account without actually depositing cash.
// You dont want someone looking in your user account on your computer.
// Data is on our computer regardless, so how can we define the ways people or software interact with it?

const createBank = () => {
  const bank = {};

  return {
    createAnAccount: (name, initialDepost) => {
      if (!bank[name]) {
        bank[name] = {
          balance: initialDepost,
        };
        console.log(`Bank account for ${name} successfully created. Current value is $${initialDepost}.`);
      } else {
        console.log(`Bank account for ${name} already exists.`);
      }
    },
    depositMoney: (name, amount) => {
      if (bank[name]) {
        bank[name].balance += amount;

        console.log(`Deposit for $${amount} successful, new balance is $${bank[name].balance}.`);
      } else {
        console.log('Account not found.');
      }
    },
    // withdrawMoney: (name, amount) => {
    //   if (bank[name]) {
    //     if (bank[name].balance > amount) {
    //       bank[name].balanace -= amount;
    //       console.log(`Withdraw for $${amount} successful, thanks for using BANKS R' US!`);
    //     } else {
    //       console.log('Not enough funds, please get richer.');
    //     }
    //   } else {
    //     console.log('Account not found.');
    //   }
    // },
    viewAccount: (name) => {
      if (bank[name]) {
        console.log(bank[name]);
      } else {
        console.log('Account not found.');
      }
    }
  }
}


const banksRUs = createBank();

banksRUs.createAnAccount('Dusty', 1000000);
banksRUs.createAnAccount('Adam', .27);
banksRUs.createAnAccount('Barry', 150);

banksRUs.depositMoney('Dusty', 5000000);
// banksRUs.withdrawMoney('Adam', .26);
banksRUs.viewAccount('Barry');

// If I remove withdraw money, how do I withdraw my money from my account?

// console.log(banksRUs.bank);

// The only things you can perform against a bank, are the actions I define as a bank. If I say you can deposit and createAnAccount, then thats all you can do. That data about your money, and your money is mine - IT IS PRIVATE.

// banksRUs.Barry.balance = 10000000000000000000000000000000000000000000000000000000000;

// The trick to closure isnt just that its private data, its that we as programmers ARE DEFINING THE WAYS IN WHICH YOU INTERACT WITH THAT DATA.




































