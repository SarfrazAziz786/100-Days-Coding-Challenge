"use strict";
//DAY 1
//Q2) Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name = "sarfraz";
console.log(`Hello, ${person_name} would you like to learn some Python today?`);
//Q3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
person_name = "saud";
console.log(person_name.toUpperCase(), person_name.toLowerCase(), person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
//DAY 2
//Q4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
console.log(`Quaid-e-Azam once said, "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."`);
//Q5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let quote = '"A person who never made a mistake never tried anything new."';
console.log(`${famous_person}, ${quote}`);
//Q6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure 
//you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
person_name = "\tsarfraz aziz\n";
console.log(person_name);
console.log(person_name.trim());
//DAY 3
//7)Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
//8) Question 8: You should create four lines that look like this:console.log(5 + 3)
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//9) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
// Print that message.
let favorite_number = 7;
console.log(`My favorite number is "${favorite_number}"`);
