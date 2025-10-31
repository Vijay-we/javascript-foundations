# JavaScript Foundations

This repository documents my daily progress while learning JavaScript fundamentals through FreeCodeCamp and other practical resources.  
The goal is to build a strong foundation in programming before moving into Solidity and smart contract development.

---

## About This Repository

I’m using this space to track what I learn each day, write small code examples, and keep notes that will help me understand JavaScript deeply.  
All code here is written by me while completing exercises, experimenting, and building small projects.

---

## My Learning Goals
- Build a clear understanding of JavaScript syntax and logic.  
- Learn how to work with variables, functions, arrays, and objects.  
- Write simple projects using DOM manipulation and events.  
- Prepare for Solidity smart contract development.

---

## Daily Progress (short summary)

**Oct 25–26, 2025**  
I completed my first two days of FreeCodeCamp’s Basic JavaScript section.  
Learned how variables work, practiced assignment and arithmetic operators, and worked with simple string concatenations.  
Also practiced using `console.log()` to print and debug code.

---

# Week 1 - JavaScript Basics (FreeCodeCamp Units #11–16)

This section covers the basic arithmetic operators in JavaScript, including addition, subtraction, multiplication, division, and increment/decrement operations.

## Lessons Completed
1. Add Two Numbers (+)
2. Subtract One Number from Another (-)
3. Multiply Two Numbers (*)
4. Divide One Number by Another (/)
5. Increment a Number (++)
6. Decrement a Number (--)

Completion Date: October 27, 2025  
Next Goal: Work with decimals, remainders, and compound assignments (Units #17–22)

## Key Takeaways
- Learned to use arithmetic operators in JavaScript.
- Practiced increment and decrement syntax.
- Verified results using console.log().
- Built a foundation for numeric logic in JavaScript.

## How to Run
```bash
node index.js
----
Expected Output
Sum: 15
Difference: 12
Product: 80
Quotient: 2
After Increment: 88
After Decrement: 9
----
Reflection 
This exercise helped reinforce how JavaScript handles arithmetic operations and variable updates.


## FreeCodeCamp JavaScript Progress – Lessons 17–18

**Topics Covered**
- Working with decimal (floating point) numbers
- Performing arithmetic with decimals (multiply/divide)
- Using the modulus (%) operator to find remainders

**Example Output**
```bash
{ myDecimal: 2.5, product: 5, quotient: 2.2, remainder: 2 }


FCC #19–22: Compound Assignment Operators (+=, −=, *=, /=)

Today I practiced the compound (augmented) assignment operators in JavaScript.
These operators are shorthand ways to update variable values without rewriting the variable name on both sides of the expression.

I worked through four main exercises:

+= (Augmented Addition) – adds and reassigns the result.

−= (Augmented Subtraction) – subtracts and reassigns.

*= (Augmented Multiplication) – multiplies and reassigns.

/= (Augmented Division) – divides and reassigns.

Each operation helps make code cleaner and easier to maintain.

What I Learned

How to use arithmetic shorthand to write more efficient code.

The difference between normal assignment (x = x + y) and compound assignment (x += y).

Practiced reading console outputs to verify updated variable values.

let a = 10;
a += 5;   // 15

let b = 20;
b -= 4;   // 16

let c = 3;
c *= 7;   // 21

let d = 40;
d /= 5;   // 8

console.log({ a, b, c, d });

Console Output:

{ a: 15, b: 16, c: 21, d: 8 }

Date Completed
 October 29, 2025


###  FCC #23–29: Escape Sequences, Quotes, and String Concatenation

Today I practiced handling text and quotes inside JavaScript strings, and learned how escape characters make strings more flexible and readable.

####  What I Learned
- How to use **escape sequences** like `\n`, `\t`, and `\\` to format text.
- The difference between using **single ('')** and **double ("")** quotes.
- How to **concatenate** strings using `+` and `+=`.
- How to build multi-line strings that display correctly in the console.
- Why consistent formatting and escaping are critical when writing long smart-contract logs or data outputs.

####  Example Code
```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

let quoteStr = "I am a 'Web3 Developer' and I love learning \"JavaScript\" daily.";
let concatStr = "Learning JavaScript " + "step by step is powerful!";
let extendedStr = "This journey " += "will take me to Solidity mastery.";

console.log(myStr);
console.log(quoteStr);
console.log(concatStr);
console.log(extendedStr);

Date Completed

October 30, 2025

## Personal Reflection

This section helped me understand how JavaScript handles text at a deeper level — something that will later help me format smart-contract messages and user-facing strings. Every FCC exercise adds another piece to my foundation for becoming a professional Solidity developer.



