// Week 1 – Day 1 & 2 (JavaScript Basics)

// Variable declarations and assignments
let studlyCapVar;
let properCamelCase;
let titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Arithmetic practice
let sum = 10 + 5;
let difference = 20 - 10;
let product = 4 * 5;
let quotient = 10 / 2;

// Increment / Decrement
sum++;
product--;

// String practice
let myName = "Vijay";
let greeting = "Hello, " + myName + "!";
console.log(greeting);

// Week 1 - JavaScript Basics
// FreeCodeCamp Units #11–16
// Topics: +, -, *, /, ++, --

// #11: Add Two Numbers
let sum = 10 + 5;
console.log("Sum:", sum); // 15

// #12: Subtract One Number from Another
let difference = 45 - 33;
console.log("Difference:", difference); // 12

// #13: Multiply Two Numbers
let product = 8 * 10;
console.log("Product:", product); // 80

// #14: Divide One Number by Another
let quotient = 66 / 33;
console.log("Quotient:", quotient); // 2

// #15: Increment Operator (++)
let countUp = 87;
countUp++;
console.log("After Increment:", countUp); // 88

// #16: Decrement Operator (--)
let countDown = 10;
countDown--;
console.log("After Decrement:", countDown); // 9

// Summary:
// Practiced basic arithmetic operators and increment/decrement syntax.


// FCC #17–18: Decimals & Remainder

// Create Decimal Numbers with JavaScript
var myDecimal = 2.5;

// Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

// Find the Remainder in JavaScript
const remainder = 14 % 4; // remainder = 2

console.log({ myDecimal, product, quotient, remainder });


// FCC #19–22: Compound (Augmented) Assignment Operators

// +=
let a = 10;
a += 5;   // 15

// -=
let b = 20;
b -= 4;   // 16

// *=
let c = 3;
c *= 7;   // 21

// /=
let d = 40;
d /= 5;   // 8

console.log({ a, b, c, d });

// FCC #23–29: Escape Sequences, Quotes, and String Concatenation
// Author: Vijay Uppala
// Date: October 30, 2025

// Using escape sequences to format text
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Working with quotes inside strings
const quoteStr = "I am a 'Web3 Developer' and I love learning \"JavaScript\" daily.";

// Concatenating strings using + operator
const concatStr = "Learning JavaScript " + "step by step is powerful!";

// Concatenating with += operator
let extendedStr = "This journey ";
extendedStr += "will take me to Solidity mastery.";

// Display all results
console.log("=== Escape Sequences Example ===");
console.log(myStr);
console.log("\n=== Quotes Example ===");
console.log(quoteStr);
console.log("\n=== Concatenation Examples ===");
console.log(concatStr);
console.log(extendedStr);

## Console Output
=== Escape Sequences Example ===
FirstLine
    \SecondLine
ThirdLine

=== Quotes Example ===
I am a 'Web3 Developer' and I love learning "JavaScript" daily.

=== Concatenation Examples ===
Learning JavaScript step by step is powerful!
This journey will take me to Solidity mastery.


