"use strict";
//DAY 1
//Q2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person_name = "sarfraz";
console.log(`Hello, ${person_name} would you like to learn some Python today?`);
//Q3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
person_name = "saud";
console.log(person_name.toUpperCase(), person_name.toLowerCase(), person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
