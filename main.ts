//DAY 1
//Q2) Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let person_name: string = "sarfraz";
console.log(`Hello, ${person_name} would you like to learn some Python today?`);

//Q3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

person_name = "saud";
console.log(
  person_name.toUpperCase(),
  person_name.toLowerCase(),
  person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()
);



//DAY 2
//Q4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:

console.log(
  `Quaid-e-Azam once said, "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."`
);

//Q5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let quote: string =
  '"A person who never made a mistake never tried anything new."';

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

let favorite_number: number = 7;
console.log(`My favorite number is "${favorite_number}"`);

// DAY 4

//10)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, just 
//add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

person_name = "sarfraz";
//this program print a personal msg
console.log(`Hello, ${person_name} would you like to learn some Python today?`);

//11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element
// in the list, one at a time.

let friends_list: string[] = ["sajjad", "waseem", "danish", "sumair"];

for (let i = 0; i <= 3; i++) {
  console.log(friends_list[i]);
}

// 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

for (let name of friends_list) {
  console.log(`Hello ${name} would you like to learn some typesript today?`);
}

// DAY 5

//13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several
// examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["car", "bike", "train", "bus"];
for (let trans of transportation) {
  console.log(`i would like to own ${trans}`);
}

//14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your 
//list to print a message to each person, inviting them to dinner.

let Guest: string[] = ["sarfraz", "sajjad", "muzammil", "danish"];
Guest.forEach((guest) => {
  console.log(
    `Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`
  );
});

//15) Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let unable_to_attend = "sajjad";
console.log(`${unable_to_attend} can't make to dinner. `);

let new_guest: string = "ahsan"; //new guest
Guest[Guest.indexOf(unable_to_attend)] = new_guest;

//new invitation
Guest.forEach((guest) => {
  console.log(
    `Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`
  );
});


