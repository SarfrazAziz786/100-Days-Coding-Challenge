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


//DAY 6
//16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log("Good News, i found a bigger dining table");
Guest.unshift("saud");
Guest.splice(3, 0, "waseem", "abid"); //3 array index , 0 mean not deleted any name , add name

Guest.forEach((guest) => {
  console.log(
    `Dear Mr. ${guest} I would like to invite you to dinner at ABC Restaurant`
  );
});

//17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

console.log("i can only invite some people due to dining table issue");

while (Guest.length > 2) {
  let remove_guest = Guest.pop();
  console.log(`sorry, ${remove_guest} i can't invite you to dinner`);
}

Guest.forEach((Guest) => {
  console.log(`Dear, ${Guest} you are still invited to dinner`);
});

Guest.splice(0, Guest.length);     
console.log(Guest);            //EMPTY ARRAY

//18)Seeing the World: Think of at least five places in the world you’d like to visit.
let place: string[] = ["Madina", "Makka", "Dubai", "London", "Egypt"];
console.log("original order: ", place);
console.log("Alphabatical order:", [...place].sort());    

console.log("original order: ", place);
console.log("Reverse alphabatical order:", [...place].sort().reverse());

console.log("original order: ", place);
console.log("Reverse alphabatical order:", [...place].reverse());


console.log("\n");


place.reverse();
console.log("Reverse alphabatical order:", place);   

place.reverse();
console.log("Reverse to ori alphabatical order:", place);
console.log("\n");

place.sort();
console.log("alphabatical order:", place);

place.reverse();
console.log("sort in Reverse alphabatical order:", place);

// //DAY 7
//19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list: string[] = ["sarfraz", "sajjad", "muzammil", "danish"];

console.log(
  `i'm inviting ${guest_list.length} people to Dinner at ABC Restaurant`
);
guest_list.forEach((guest_list) => {
  console.log(guest_list);
});

//20)Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let places: string[] = [
  "Madina",
  "Makka",
  "Dubai",
  "London",
  "Egypt",
  "Malaysia",
];
console.log(`i want to go in all of these places.`);
places.sort();
places.forEach((place) => {
  console.log(place);
});

//21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let project: { title: string; auther: string; published_year: number } = {
  title: "CLI",
  auther: "Sarfraz",
  published_year: 2024,
};

console.log(
  `Author ${project.auther} , Project info ${project.title} ,  is published in ${project.published_year}`
);

 //DAY 8

//22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\n");


//let guest_list:string[] = ['sarfraz', 'sajjad' , 'muzammil' , 'danish']

console.log(guest_list[5]); //undefined array index

console.log(guest_list[2]); // correct

//23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for 
//the results of each test
console.log("\n");

let car1: string[] = [
  "subaru",
  "Ford Mustang",
  "Chevrolet Corvette",
  "Porsche",
  "Lamborghini Aventador",
  "Ferrari 458 Italia",
  "BMW M3",
  "Mercedes-Benz S-Class",
  "Audi R8",
  "Tesla Model S",
  "Toyota Prius",
];

let predictions = [
  { index: 0, value: "subaru", prediction: true },
  { index: 1, value: "subaru", prediction: false },
  { index: 2, value: "Chevrolet Corvette", prediction: true },
  { index: 3, value: "subaru", prediction: false },
  { index: 4, value: "Lamborghini Aventador", prediction: true },
  { index: 5, value: "subaru", prediction: false },
  { index: 6, value: "BMW M3", prediction: true },
  { index: 7, value: "subaru", prediction: false },
  { index: 8, value: "Audi R8", prediction: true },
  { index: 9, value: "subaru", prediction: false },
];

// Loop through the predictions array
for (let i = 0; i < predictions.length; i++) {
  let item = predictions[i];
  console.log(`Is car[${item.index}] == '${item.value}'? I predict ${item.prediction}.`);

   console.log(car1[item.index] == item.value);
}


//24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
//write more tests.

//Equality with strings
console.log("\n");

console.log("Testing equality & inequality of strings:");
console.log("apple" == "apple"); // True
//console.log("apple" == "Apple"); // False

//lowercase testing
console.log("lowercase testing");

console.log("APPLE".toLowerCase() == "apple");

//equality, inquality ,greaterthan, lessthan, greaterthan or equal to,lessthan or equal to
console.log("numerical testing");

console.log(4 == 4); //true
console.log(5 !== 5); //false
console.log(7 > 5); //true
console.log(10 < 5); //false
console.log(20 >= 20); //true
console.log(10 <= 5); //false

// and  , or && ||
console.log("And Or Operator");

console.log(true && true); //if both operant are true && show true

console.log(true || false); //if any operant is true it shows true

console.log("item is in a array");

//let guest_list:string[] = ['sarfraz', 'sajjad' , 'muzammil' , 'danish']
console.log(guest_list.includes("sajjad")); //true

console.log("item isn't in a array");

console.log(guest_list.includes("ameen")); //false

//DAY 9
//25) Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color: string = "yellow";

console.log("condition true thatswhy player earned points");

if (alien_color == "yellow") {
  console.log("Congratulation you earned 5 points");
}

if (alien_color == "red") {
  console.log("no output because condition false");
}

//26) Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

alien_color = "green";
if (alien_color == "red") {
  console.log("you earned 5 points for shooting the alien");
} else {
  console.log("you just earned 10 points");
}

//27) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

console.log("THERE IS A THREE CONDITION OF ALIEN COLOR");

alien_color = "red";

if (alien_color == "green") {
  console.log("you earned 5 points");
} else if (alien_color == "yellow") {
  console.log("you earned 10 points");
} else if (alien_color == "red") {
  console.log("you earned 15 points");
}

//DAY 10

//28) Stages of Life: Write an if-else chain that determines a person’s stage of life

let age: number = 50;
if (age < 2) {
  console.log("Person is a baby");
} else if (age >= 2 && age < 4) {
  console.log("Person is a toddler");
} else if (age >= 4 && age < 13) {
  console.log("Person is a Kid");
} else if (age >= 13 && age < 20) {
  console.log("Person is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("Person is a adult");
} else if (age >= 65) {
  console.log("Person is a elder");
}

//29) Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruit: string[] = ["Apple", "Banana", "Peach"];
if (favorite_fruit.includes("Apple")) {
  console.log("you really like apple");
}
if (favorite_fruit.includes("Banana")) {
  console.log("you really like banana");
}
if (favorite_fruit.includes("Peach")) {
  console.log("you really like peach");
}

//30)  Hello Admin: Greet users differently, especially 'admin'.

let user_name: string[] = ["Admin", "Sajjad", "Waseem", "Abid", "Muzammil"];

user_name.forEach((user_name) => {
  if (user_name.includes("Admin")) {
    console.log("Hello Admin would you like to see a status report?");
  } else {
    console.log(`Thank you ${user_name} for login again`);
  }
});

//DAY 11
//31) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let user: string[] = [];
if (user.length === 0) {
  console.log("we need to find some users! ");
}

//32) * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_user_name: string[] = [
  "Sarfraz",
  "Saud",
  "Saad",
  "Sajjad",
  "Suleman",
];

let new_user_name: string[] = ["Sarfraz", "Saud", "Danish", "Riaz", "Danial"];

new_user_name.forEach((new_user_name) => {
  if (
    current_user_name.some(
      (current_user_name) =>
        current_user_name.toLowerCase() ===
        new_user_name.toLowerCase()
    )
  ) {
    console.log(`${new_user_name} will need to enter a new new user name`);
  } else {
    console.log(`${new_user_name} is available`);
  }
});

//33) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.

let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((num) => {
  let ordinal_num = "th";
  if (num === 1) {
    ordinal_num = "st";
  }
  else if (num === 2) {
    ordinal_num = "nd";
  }
  else if (num === 3) {
    ordinal_num = "rd";
  }
  console.log(`${num}${ordinal_num}`);
});

//DAY 12
//34) Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.

let pizza_name: string[] = [
  "kabab pizza",
  "fajita pizza",
  "cheezy pizza",
  "spicy beef pizza",
  "creamy tikka pizza",
];

pizza_name.forEach((pizza_name) => {
  console.log(`i like ${pizza_name}`);
});

console.log("i really love pizza!");

//35) Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

let animal: string[] = ["Cow", "Goat", "Horse"];
animal.forEach((animal) => {
  console.log(`A ${animal} would make a great pet`);
});
console.log("Any of these animals would make a great pet!");

//36) T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt
console.log("making shirt and print msg on shirt");

function make_shirt(size: string, message: string) {
  console.log(
    `The size of shirt ${size}, with a message printed on it "${message}"`
  );
}

make_shirt("Medium", "Code is life");


//DAY 13

//37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("making shirt and print msg on different size shirt");

function make_shirt1(
  size: string = "large",
  message: string = "I love typescript"
) {
  console.log(
    `The size of shirt ${size}, with a message printed on it "${message}"`
  );
}
make_shirt1();
make_shirt1("Medium", "Code is life");
make_shirt1("Small", "i love html");

//38) Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Dubai", "UAE");

//39) City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string

let city_country = (city: string, country: string) => {
  console.log(`"${city}, ${country}"`);
};
city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Tokyo", "Japan");

//DAY 14
//40) * Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album (artist_name:string , album_title:string ,track? :number ){
  let album = {artist_name, album_title, track};
  if (track===undefined) {
    album["track"] = track;  
  }
  
  
return album;

}

console.log(make_album("Artist One" , "The first album" ));
console.log(make_album("Artist Second" , "The Second album" ));
console.log(make_album("Artist Third" , "The Third album" , 34 ));


//41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

console.log("\n");


let magician_names:string[]=['Harry Houdini', 'David Copperfield', 'David Blaine']

function show_magicians (magician_names:string[]){
magician_names.forEach(magician_names => { 
console.log(magician_names);
  
});
}
show_magicians(magician_names)


//42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.
console.log("\n");

//let magician_names:string[]=['Harry Houdini', 'David Copperfield', 'David Blaine']
function make_great (magician_names:string[] ){
for (let i = 0; i < magician_names.length; i++) {
  console.log(`The Great ${magician_names[i]}`);  
}
}

make_great(magician_names);


//DAY 15
//43)  *  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great_mag(magician_names:string[]):string[] {
let great_magician:string[]=[];
magician_names.forEach(magician_names => {
  great_magician.push(`The Great ${magician_names}`)
});
return great_magician;
}

let great_magician = make_great_mag(magician_names.slice());
console.log("Original Magicians");
show_magicians(magician_names);
console.log("Great Magician");
show_magicians(great_magician)









//44) * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.

console.log("\n");


function sandwich(...items:string[]){
  console.log(`Making a sanwich with: ${items.join(',')}.`);
}

sandwich('cheese' , 'spicy');
sandwich ('Egg' , 'Mayo');
sandwich('garlic' , 'tomato' ,'mustard');





//Q45) Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
//and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required 
//information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.


console.log("\n");


function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
  let car:any= { manufacturer, model};
  options.forEach(([key, value]) => car[key] = value);    //  car[value1] = value2) for adding new property in object  car
  return car;
}


console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

console.log("\n");

// //  for understanding above code
// interface Tstu {name: string;age:number;period:[string,string][], father_name?: string}
// let student:Tstu={
//   name: "sarfraz",
//   age: 29,
//   period: [["english" , "math"] , ["urdu","islamiat"]] 
// }
// student.period.forEach(([value, value2])=> console.log(value + "                   "  + value2 +   "   " + "period"))
// console.log(student.name)
// console.log(student['age'])

// student["father_name"]="abdul aziz"   // adding new property in object  student

// console.log(student);


// type car = {
//   manufacture:string;
//   model: string;
//   [key: string]:any
// }
// function make_car(manufacture: string, model: string, optional:Record<string,any>):car {
// return
// {
//   manufacture,
//   model,
//   ...optional
// }

// }

// const mycar:car= make_car("toyota", "corolla", {color: "silver",year: "2024"})
// console.log(mycar);






// //DAY 16

// //Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method 
//describe() that logs a sentence about the laptop.

console.log('\n');


let laptop = {
  brand: "HP",
  model: "Probook",
  ram: 8,
  storage: 256,
  price: 45000,
  discribe: function () {
      console.log(
          `Brand: ${laptop.brand}, Model: ${laptop.model}, Ram: ${laptop.ram}, Storage: ${laptop.storage}, Price: ${laptop.price}`,
      );
  },
};

laptop.discribe();

//ques 47  Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, 
//model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
console.log('\n');

let laptops = [
  {
      brand: "HP",
      model: "Probook",
      year: 2020,
  },
  {
      brand: "lenovo",
      model: "Thinkpad",
      year: 2021,
  },
];

let [laptop1, laptop2] = laptops;

console.log(laptop1);
console.log(laptop2);

//QUES 48
//Combining Arrays with Spread Operator: Suppose you're comparing prices of two
// different sets of laptops. Use the spread operator to combine these arrays into a single array
// sorted in ascending order, then log the result.
console.log('\n');

let price1: number[] = [2000, 4000, 3000, 5000];
let price2: number[] = [6000, 9000, 8000, 7000, 10000];

//every single array converting to string
//sort function sort only 1 number ex 2 instead of 2000 , 6 instead of 6000 
//If a is less than b, a - b returns a negative number, placing a before b.
//If a is equal to b, a - b returns 0, leaving a and b in the same position relative to each other.
//If a is greater than b, a - b returns a positive number, placing a after b


console.log(
  ...price1.sort(),
  ...price2.sort(function (a, b) {
    
    return a - b;
      
      
  }),
);


// // DAY 17 
// //ques 49
//Function with Rest Parameters: Write a function that takes a rest parameter representing 
//multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
console.log('\n');
function hobbies(...hobby: string[]) {
  for (let i = 0; i < hobby.length; i++) {
      console.log(`i like ${hobby[i]}`);
  }
}

hobbies("reading", "writing", "playing", "singing");

// //ques 50
// // Multiline Template Literals: Use template literals to create a multiline string that 
//describes your ideal day. Include at least three different activities.
console.log('\n');
let day_ideal = `My ideal day:
1. wake up at 8 am.
2. go to work.
3. go home and learning.`;

console.log(day_ideal);

// //Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area
// of a rectangle and refactor it into an arrow function.
console.log('\n');
let rantangle_size = (width: number, height: number): number => width * height;

let area = rantangle_size(10, 4);
console.log(area);

// //day 18

// //Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
// Include its brand, model, and other key features like how much storage it has, the size of its screen,
// and how long its battery lasts.
console.log('\n');
let smart_phone = {
  brand: "LG",
  model: "V60",
  spec: {
      storage: 128,
      screen: 6,
      battery: 5000,
  },
};

console.log(smart_phone);





 //⭐// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
// programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from 
//this list and show them.
console.log('\n');
let developer_skill = {
  language: ["Javascript", "Typescript", "Python"],
  framework: ["React", "Angular", "Vue"],
  tool: ["Git", "Webpack", "Docker"],
};

//Destructure the Object: obj key convert to variable of array
let {language , framework,tool}=developer_skill;


for ( let i=0; i<language.length; i++){
console.log(`language: ${language[i]} , Framework: ${framework[i]} , tool: ${tool[i]}`)
}


// //Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change
// the name of each section based on what you need at that moment, like adjusting labels based on user choices.
console.log('\n');

function dynamic_object(key:string , value:string){
  // let obj:{
  //   [key:string]:string
  // }={};
  // obj[key]=value
let obj={
  [key]:value
}
  return obj;
  
}
let user1=dynamic_object("theme" , "dark")
console.log(user1)



// //DAY 19

// //Question 55: Double Numbers in an Array: Make a list of numbers. Then, 
//use a trick to make a new list where each number is twice its original value.
console.log('\n');
let number:number[]=[1,2,3,4,5,6]
//double number 
let double_number=number.map((value,index,arr)=>
  {console.log(value,index,arr)
  return value * 2})

console.log (double_number);


// //Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
console.log('\n');
let mix_type =['sarfraz', 23, "sajid" , 88, 3];
let str=mix_type.filter(val=> typeof val  === "string");
console.log(str);


// //Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
console.log('\n');
let grade:number[]=[70,80,20];
let avg_func=(val1:number, val2:number)=>{return val1+val2}

let avg_sum:number=grade.reduce(avg_func)/grade.length;

console.log(avg_sum);


// //DAY 20

// //Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
console.log('\n');
function avg_score(...scores:number[]):number{
let total=scores.reduce((sum,score)=>sum+score,0)
   return total/scores.length
  
}

console.log(avg_score(100,300,50,40))



//⭐// //Question 59: Add a Special Number: Make a program that creates custom adders. 
//These adders can add a specific number to any other number you give them later.
console.log('\n');
function addNumber(addNum:number):(number:number)=>number{
return function(num:number){
  return addNum + num
}
}


let value= addNumber(5)
console.log(value(10));


// Question 60
//⭐ Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the users name and age.
console.log('\n');

let userProfile=(function(){
let userName:string="sarfraz";
let age:number=19;
return {
//The IIFE returns an object with a method displayInfo.
//The displayInfo method has access to the userName and age variables due to closure.
displayInfo:function(){     
  console.log(`User Name : ${userName} , Age: ${age} `);  
}

};
})();

userProfile.displayInfo()


// Day 21
// Question 61
// Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks, 
//and motorcycles using enums, and show one example.
console.log('\n');
enum vehiclesCategory {
  car=1,
  trucks=2,
  motorcycle=3
}

console.log(vehiclesCategory[3]);



// Question 62

// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they are taking, and then fill in this blueprint with an example student.
console.log("\n");
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
  subject: string[];
}

let student: Student = {
  id: 73,
  name: "sarfraz",
  age: 25,
  gender: "male",
  subject: ["english", "islamiat", "science"],
};

console.log(student);

// Question 63

// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
console.log("\n");
type Tcircle = {
  dia: number;
};
type Tshape = {
  shape: "rectangle" | "circle";
  height?: number;
  width?: number;
  radius?: number;
};

let circle: Tshape = {
  shape: "circle",
  radius: 12,
};

let rectangle: Tshape = {
  shape: "rectangle",
  height: 5,
  width: 12,
};

console.log(rectangle);
console.log(circle);

// Day 22
// Question 64

// Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with Age: and 30, it should give back Age: 30.
console.log("\n");

function data(name: string, age: number) {
  console.log(name + age);
}

data("ali ", 20);

// Question 65

// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the `%` sign. For example, `remainder(5, 2)` should give `1`.
console.log("\n");
function reminder(n1: number, n2: number) {
  return n1 % n2;
}
let balance = reminder(5, 2);
console.log(balance);

// Question 66

// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true` if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.
console.log("\n");

function checkBoolean(a: boolean, b: boolean): boolean {
  return a && b;
}
let checkBoolean1 = checkBoolean(true, false);
console.log(checkBoolean1);

// Day 23
// Question 67

// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `5`). Return their sum as a number.
console.log("\n");

function sum(a: number, b: string) {
  return a + Number(b);
}
let total = sum(5, "6");
console.log(total);

// Question 68

// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
console.log("\n");
let multiply = (a: number, b: number) => {
  console.log(Math.round(a * b));
};

multiply(6.5, 3.8);

// Question 69

// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
console.log("\n");
function divide(num1: number, num2: number) {
  let quotient = Math.floor(num1 / num2);
  let remainder = num1 % num2;
  console.log(
    `${num1} and ${num2} of quotient: ${quotient}  and remainder: ${remainder} `,
  );
}

divide(10, 3);

// Day 24
// Question 70

// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
console.log("\n");

function loop(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  //console.log(i)
}
loop(5);

// console.log(i)
//we can't access i because it is declare in for loop scope

//Question 71

// Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not. Try to reassign a `const`-declared variable and catch the error.
console.log("\n");

let amount: number = 45000;
const accountNumber: number = 45678;

amount = 50000;
//accountNumber=12345;
//Cannot assign to 'accountNumber' because it is a constant

// let variable we able to reassign its vale but const we can't change variable value

// Question 72

// Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.
console.log("\n");

{
  let blockLet = "access only block";
  const blockConst = "access only block";
  // console.log(blockLet)
  // console.log(blockConst)
}

try {
  // console.log(blockLet);
} catch (error) {
  console.log("`blockLet` is not accessible outside the block.");
}

try {
  // console.log(blockConst);
} catch (error) {
  console.log("`blockConst` is not accessible outside the block.");
}

// Day 25
// Question 73

// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
console.log("\n");

function amountFunc() {
  let amount = 5000;
  console.log(amount);
  amount = 6000;
  console.log(amount);
}

amountFunc();

// Question 74
//⭐
// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.
console.log("\n");
function swapValue() {
  let a: number = 5;
  let b: number = 10;
  console.log(`Before swap a: ${a} and b:${b}`);
  let tempVariable = a;
  a = b;
  b = tempVariable;

  console.log(`After swap a: ${a} and b:${b}`);
}

swapValue();

// Question 75
//⭐
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.
console.log("\n");
function compoundAssignmentOperators() {
  let x = 5;
  x += 5;
  console.log(`add 5 in x now x value is ${x}`);

  x -= 1;
  console.log(`minus 1 in x now x value is ${x}`);

  x *= 8;
  console.log(`multipy by 8  now x value is ${x}`);

  x /= 5;
  Math.round(x);
  console.log(`divide by 5 now x value is ${x}`);
}

compoundAssignmentOperators();

// Day 26
// Question 76

// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
console.log("\n");

let addition = (num1: number, num2: number): number => {
  //calculate num1 and num2 and return addition
  return num1 + num2;
};

let result = addition(5, 3); //function invocation
console.log(result);

// Question 77

// Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello. If no name is given, it should greet an anonymous user.
console.log("\n");

function greeting(name: string = "Sir / Madam"): void {
  console.log(`Hello, Dear ${name}`);
}

greeting("Sarfraz");
greeting();

// Question 78

// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
console.log("\n");

let functionExpressions = function (num: number): number {
  return num * num;
};

function declarations(num: number): number {
  return num * num;
}

console.log(functionExpressions(4));
console.log(declarations(4));

// Day 27
// Question 79

// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
console.log("\n");

let car :any= {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

console.log(car.model);
console.log(car["year"]);

// Question 80

// Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`. Show how to perform these operations.
console.log("\n");
//car["color"]= "White"     //add new property in car object
car["color"]= "black";
car.year = 2021; //update property
console.log(car);

// Question 81

// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
console.log("\n");

function objProperty(obj: {[key:string]:any}) {
  for (let property in obj) {
    console.log(`${property} : ${obj[property]} `);
  }
}

objProperty({ make: "Honda", model: "Civic", year: 2020 });

// Day 28
// Question 82

// Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

console.log("\n");

function stringLength(value: string): number {
  return value.length;
}
let length = stringLength("Sarfraz Aziz");
console.log(length);

// Question 84
//⭐
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word `JavaScript` with `TypeScript`.
console.log("\n");

let replacingText = (sentence: string): string => {
  //return sentence.replace("JavaScript", "TypeScript")
  return sentence.replace(/JavaScript/g, "TypeScript");
  //Uses a regular expression with the 'g' flag for a global replacement
};

console.log(
  replacingText(
    "JavaScript is a scripting language used to develop web pages. I love JavaScript and JavaScript is awesome!",
  ),
);

// Day 29
// Question 85

// Finding the Position of a Substring: Write a function that locates the first occurrence of the word `code` within any given string and returns its position.
console.log("\n");

function findingWord(sentence: string): number {
  return sentence.indexOf("Coding");
}

console.log(
  findingWord(
    "TypeScript Coding allows programmers to build programs, such as websites and apps.",
  ),
);

// Question 86

// Checking for Text Presence: Create a function that checks if the word `JavaScript` is present in a given string. It should return `true` if found, otherwise `false`.
console.log("\n");

function isPresence(sentence: string): boolean {
  return sentence.includes("JavaScript");
}

//console.log(isPresence("I love JavaScript and JavaScript is awesome!"))
console.log(isPresence("I love TypeScript and TypeScript is awesome!"));

// Question 87

// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
console.log("\n");
function extractText(sentence: string): string {
  return sentence.substring(0, 17);
  // return sentence.slice(0,17)
}
console.log(extractText("I love TypeScript and TypeScript is awesome!"));

// Day 30
// Question 88

// Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., `123`) and converts it into an actual number type.
console.log("\n");

function strToNum(value: string): number {
  //return Number(value)
  return parseInt(value);
}
let value1 = strToNum("78");
console.log(value1);

// Question 89

// Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) and rounds it to two decimal places.
console.log("\n");
let decNum = (num: number) => {
  let value = num.toFixed(2); //tofixed methor return string
  return Number(value);
};
let decimalNumber = decNum(3.14159);
console.log(decimalNumber);
console.log(typeof decimalNumber);

// Question 90

// Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
console.log("\n");

function randomNumber() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

randomNumber();

// Day 31
// Question 91

// Create an array of your three favorite fruits and add a new fruit to the end of the array.
console.log("\n");

let favFruit: string[] = ["Mango", "Apple", "Banana"];
favFruit.push("Orange");
console.log(favFruit);

// Question 92

// Write a function to remove the last element from an array and return the removed element.
console.log("\n");
let studentArray: string[] = ["sarfraz", "waseem", "sajjad"];
console.log(studentArray);
function removeFromArray(remove: string[]) {
  remove.pop();
}
removeFromArray(studentArray);
console.log(studentArray);

// Question 93

// Find the index of `Banana` in an array of fruits and replace it with `Mango`.
console.log("\n");
let fruitList: string[] = ["Apple", "Banana", "Orange"];

console.log(fruitList);

fruitList[fruitList.indexOf("Banana")] = "Mango";

console.log(fruitList);

// Day 32
// Question 94

// Use the .map() method to create a new array that contains the length of each word from an array of words.
console.log("\n");

let employee: string[] = ["sarfraz", "waseem", "sajjad"];

function elementLength(array: string[]): number[] {
  return array.map((element) => element.length);
}
let arrayLength = elementLength(employee);
console.log(arrayLength);

// Question 95

// Write a function that uses the .filter() method to return an array of numbers greater than 10.
console.log("\n");
let favNumber: number[] = [45, 2, 1, 3, 35, 17];

function greaterNumber(numberArray: number[]) {
  return numberArray.filter((element) => element > 10);
}
console.log(greaterNumber(favNumber));

// Question 96

// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
console.log("\n");

let numbers: number[] = [45, 2, 1, 3, 35, 17];

function sumOfArray(numberArray: number[]): number {
  return numberArray.reduce(
    (accumulatedValue, currentValue) => accumulatedValue + currentValue,
    0,
  );
}
console.log(sumOfArray(numbers));
//⭐
// Day 33
// Question 97

// Write a function that returns the current date in the format `DD-MM-YYYY`.
console.log("\n");
function currentDate() {
  const now = new Date()
  let date = String(now.getDate()).padStart(2,"0")
  let month = String(now.getMonth()+1).padStart(2,"0")
  let year = String(now.getFullYear())
return console.log(`${date}/${month}/${year}`)
  
}

currentDate();


// Question 98
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
console.log("\n");
function remainingDaysOfNewYear(){
let today = new Date()

let newYear= new Date(today.getFullYear()+1,0,1) 
  //+1 ,0 JAN,1 1ST JAN

const diff=newYear.getTime()-today.getTime()

const day=Math.ceil(diff/(1000*60*60*24))
return day
}

console.log(remainingDaysOfNewYear()  + "days until new year")



// Question 99

// Generate a date object representing your next birthday and log it to the console.
console.log("\n")
function nextBirthDay(month:number , day:number){
let today=new Date()
let year=today.getFullYear()
let birthday= new Date(year , month -1 ,day)
if (today>birthday){
  birthday.setFullYear(year+1)
} 
  return birthday
}


let birthday=nextBirthDay(3,4)
console.log(`next birthday on ${birthday.toLocaleDateString()}` )

// Day 34
// Question 100

// Use the JavaScript Math object to find the square root of 144.
console.log("\n")
function squareRoot(n:number){
let square=Math.sqrt(n)
return square
  
}
console.log(squareRoot(144))

// Question 101
// Generate a random integer between 1 and 10.
console.log("\n")
console.log("randon number")
function randomNumber1(){
  
    return Math.floor(Math.random()*10)+1
  
}
console.log(randomNumber1())

// Question 102
// Calculate and log the absolute difference between the number -5 and 5.
console.log("\n")
const diff= Math.abs(-5+5)
console.log(diff)  // sign ignoring in result

// Day 35
// Question 103
// Write a function that returns a random boolean value, true or false.
console.log("\n")

function randomBoolean ():boolean{
  return Math.random() < 0.5
}

console.log(randomBoolean())

// Question 104
// Create a function that generates a random hexadecimal color code.
console.log("\n")

// function randomHexaColor(){
//   //.tostring (16) for hexcolor
// let color= "#" + Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0")
//   return color
// }

// console.log(randomHexaColor())

function randomHexaColor(){
  
let color= `#${Math.random().toString(16).slice(2,8).padEnd(6,"0")}`
  return color
}

console.log(randomHexaColor())

// Question 105

// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
console.log("\n")

function dice (){
  let dice=Math.floor( Math.random()*6)+1
  return dice
}

console.log(dice())


// Day 36
// Question 106

// Determine if a given year is a leap year using comparison operators.
console.log("\n")
function leapYear(year: number):boolean{
  let leapYear=year%4 ===0 && year%100 !== 0 || year% 400===0;
  return leapYear
}
console.log(leapYear(1900))


// Question 107

// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
console.log("\n")

function divBy2And3(n:number):boolean{
  return n%2===0 && n%3===0  
}

console.log(divBy2And3(12))
console.log(divBy2And3(8))


// Question 108

// Compare two strings to check if they are identical, ignoring case sensitivity.
console.log("\n")

function isequal(a:string, b:string):boolean{
  // Converts both strings to lowercase before comparison
  return a.toLowerCase()===b.toLowerCase()
}

console.log(isequal("sarfraz", "Sarfraz"))
console.log(isequal("sarfraz", "Habib"))

// Day 37
// Question 109

// Write an if statement that logs `Good Morning` if the current time is before 12 PM.
console.log("\n")
function greeting1(){

let currentTime= new Date()
  if (currentTime.getHours()<12){
     console.log("Good Morning")
  }else{
     console.log("Hello")
  }
}

greeting1()


// Question 110

// Create a function that assigns a grade (A, B, C, D, F) based on a students score.
console.log("\n")
let grade1=(score:number):string=>{
  if (score>=70){
     return "A";
  }else if(score>=60){
   return  "B";
  }else if(score>=50){
    return "C";
    
  }else if(score>=40){
     return "D"
    
  }else {
     return "F"

    }
};

console.log(`Your grade is ${grade1(80)}`)




