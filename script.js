#!/usr/bin/env /usr/local/bin/node

// strings and template literals
// let job = "engineer";
// let firstName = "bhavika";
// let description = `I am ${firstName} and my profession is ${job}`;
// console.log(description);

// if/else statements
// const age = 14;
// const able = age >= 18;
// if (able) {
//   console.log("he/She can drive 😁");
// } else {
//   let yearsRemaining = 18 - age;
//   console.log(`still ${yearsRemaining} years are left 😕`);
// }

//type coercion
// console.log("23" + 10);
// console.log(10 + 20 + "33");
// console.log("1" + 1 - 1);
// console.log(2 + "2" * "2");

// there are 5 falsy values in js => 0, ' ', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("bhavika"));
// console.log(Boolean({}));

// const hasIssue = 0;
// if (hasIssue) {
//   console.log("No issues");
// } else {
//   console.log("has issues");
// }

// Logical operators
// const hasBook = true;
// const canRead = false;

// if (hasBook && canRead) {
//   console.log("He can read");
// } else {
//   console.log("He cannot read");
// }

// if (hasBook || canRead) {
//   console.log("he can read");
// } else {
//   console.log("he cannot read");
// }

// Challenge 3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// } else {
//   console.log("Koalas win the trophy");
// }

// Functions
// function Juice(apple, oranges) {
//   const result = `This is juice of ${apple} apples and ${oranges} oranges. Enjoy It🥤`;
//   return result;
// }
// console.log(Juice(2, 2));

// function calculateAge1(birthYear) {
//   const age = `Your age is ${2023 - birthYear} years old.`;
//   return age;
// }
// // console.log(calculateAge1(2001));

// const calculateAge = function (birthYear) {
//   const age = `Your age is ${2024 - birthYear} years old.`;
//   return age;
// };
// console.log(calculateAge1(2001), calculateAge(2001));

// Arrow Functions
// const age = (birthYear) => 2023 - birthYear;
// console.log(`Your age is ${age(2001)} years old.`);

// const retireAge = (birthYear) => {
//   const age = 2023 - birthYear;
//   const yearsToRetire = 65 - age;
//   return yearsToRetire;
// };
// console.log(
//   `Your age is ${age(2001)} years old and in retirement ${retireAge(
//     2001
//   )} years are left.`
// );

// Arrays
// const friends = [
//   "friend0",
//   "friend1",
//   "friend2",
//   "friend3",
//   "friend4",
//   "friend5",
//   "friend6",
//   "friend7",
//   "friend8",
// ];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// // basic arrays method length, indexOf

// // 1. push
// friends.push("friend9");
// console.log(friends);
// // 2. unshift
// friends.unshift("friend9");
// console.log(friends);
// // 3. pop
// friends.pop();
// console.log(friends);
// // 4. includes
// console.log(friends.includes("friend11"));

// Objects
// const info = {
//   firstName: "Bhavika",
//   lastName: "Thawani",
//   age: 22,
//   job: "Front-end developer",
//   friends: ["A", "B", "C"],
//   birthYear: 2001,
//   fullName: function () {
//     return this.firstName + " " + this.lastName; // this keyword
//   },
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },
// };
// console.log(info.fullName());
// alert("Hi" + " " + info.fullName());
// console.log(
//   `${info.firstName} has ${
//     info.friends.length
//   } friends, and her best friend is ${
//     info.friends[0]
//   } and she is ${info.calcAge()} years old.`
// );
// dot and bracket notation for accessing object properties
// console.log(info.job);
// console.log(info["age"]);
// const nameKey = "Name";
// console.log(info["first" + nameKey]);
// console.log(info["last" + nameKey]);
// const interested = prompt("What info you want firstName,lastName,age,job");
// console.log(info[interested]);

// for Loop keeps running while condition is true
// for (let x = 1; x <= 20; x++) {
//   console.log(`Bhavika ${x}`);
// }

// Looping arrays
// const friends = [
//   "friend0",
//   "friend1",
//   "friend2",
//   "friend3",
//   "friend4",
//   "friend5",
//   "friend6",
//   "friend7",
//   "friend8",
//   "friend9",
// ];
// for (let i = 0; i < 9; i++) {
//   console.log(friends[i]);
// }
// for (let i = 1; i < 4; i++) {
//   console.log(`class ${i}`);
//   for (let j = 1; j < 11; j++) {
//     console.log(`student ${j}`);
//   }
// }
// const currentUrl = window.location.href;
// console.log(currentUrl);
// const host = window.location.host;
// console.log(host);
// const pathname = window.location.pathname;
// console.log(pathname);
// const search = window.location.search;
// console.log(search);
// const hash = window.location.hash;
// console.log(hash);
// Hoisting and TDZ
// console.log(me);
// console.log(job);
// console.log(birthYear);
// var me = "Bhavika";
// let job = "Engineer";
// const birthYear = 2001;

// console.log(add(2, 3));
// console.log(sub(5, 1));
// console.log(mul(2, 3));
// function add(a, b) {
//   return a + b;
// }
// const sub = function (a, b) {
//   return a - b;
// };
// const mul = (a, b) => a * b;

// this keyword
// const bhavika = {
//   age: 22,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// console.log(bhavika.calcAge());
// console.log(this);

// Destructuring array and objects
// const restaurant = {
//   hotelName: "Classico Italiano",
//   hotelLocation: "italy",
//   categories: ["Italian", "Pizzeria", "vegetarian", "organic"],
//   starters: ["focaccia", "pizza", "garlic bread"],
//   mainMenu: ["Pasta", "Risotto", "sandwich"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 10,
//       close: 24,
//     },
//   },
//   orderFood: function (starterFood, mainFood) {
//     return [this.starters[starterFood], this.mainMenu[mainFood]];
//   },
//   orderDelivered: function ({ starterFood, mainFood, time, address }) {
//     console.log(
//       `Order received ${this.starters[starterFood]} and ${this.mainMenu[mainFood]} will be delivered at ${address} by ${time}!`
//     );
//     return starterFood, mainFood, time, address;
//   },
//   madePasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// Looping object keys, values and entire
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }
// for (const values of Object.values(restaurant.openingHours)) {
//   console.log(values);
// }

// console.log(restaurant.openingHours.sat.open);
// restaurant.orderPizza("paneer", "olives", "corn", "onion");
// restaurant.orderDelivered({
//   time: 18,
//   address: "Binori Square II",
//   starterFood: 1,
//   mainFood: 0,
// });
// const ingredients = [
//   prompt("let's make pasta! Ingredient1?"),
//   prompt("ingredient2?"),
//   prompt("ingredient3"),
// ];
// restaurant.madePasta(...ingredients);
// const { hotelName, hotelLocation, openingHours } = restaurant;
// console.log(hotelName, hotelLocation, openingHours);
// const { categories = [], starterMenu: starters = [] } = restaurant;
// console.log(categories, starters);
// let [first, second] = restaurant.starters;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);
// let [starterItem, mainItem] = restaurant.orderFood(1, 0);
// console.log(starterItem, mainItem);

// spread operator (...)
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5, 6];
// console.log(newArr);
// const moreStarters = [...restaurant.starters, "nachos"];
// console.log(moreStarters);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//----Challenge1---
// // Task1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // Task2
// const [goalKeeper, ...restTeam] = players1;
// console.log(goalKeeper, restTeam);
// // Task3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // Task4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// // Task5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // Task6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(game.scored);
// // Task7
// team1 < team2 && console.log("Team 1 is more likely to win");

// ------Challenge2-------
// // Task1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// // Task2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // Task3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Sets
// const food = ["pizza", "pasta", "fruits", "pizza", "veggies", "fruits", "soup"];
// console.log(food);
// const uniqueFood = [...new Set(food)];
// console.log(uniqueFood);
// console.log(
//   new Set(["pizza", "pasta", "fruits", "pizza", "veggies", "fruits", "soup"])
//     .size
// );

// Maps
// const question = new Map([
//   ["question", "Which is the best programming language in the world?"],
//   [1, "C"],
//   [2, "python"],
//   [3, "java"],
//   ["correct", 3],
//   [true, "correct.."],
//   [false, "Try Again!!"],
// ]);
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// ----Challenge 3-----
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);
// // Task1
// const events = new Set(gameEvents.values());
// console.log(events);
// //TAsk2
// gameEvents.delete(64);
// //Task3
// console.log(`An event happened, on
// average, every ${92 / gameEvents.size} minutes`);
// // Task4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// ----Strings---  are immutable and every method returns a new string
// const airline = "SpiceJet";
// const plane = "A123";
// // 1. this is to treat strings as array another method is chartAt(index)
// console.log(plane[2]);
// console.log(plane.charAt(0));
// // 2. indexOf() to know the index of characters
// console.log(airline.indexOf("J"));
// // 3. slice(start,end) this takes indexes and slice the string from start to end but end will not included in result
// console.log(airline.slice(2, 5));
// // 4. toLowerCase(), toUpperCase(), trim() this removes whitespaces from both side of the string
// const email = "  Hello@Gmail.Com";
// const newEmail = email.toLowerCase().trim();
// console.log(newEmail);
// // 5. replace() to replace a string with another string
// const str = "Hell#";
// const newStr = str.replace("#", "o");
// console.log(newStr);
// // 6. includes() returns a boolean value if a strings contains a particular value also startsWith() & endsWith()
// const info = "I am a developer";
// console.log(info.includes("developer"));
// const data = "Welcome to Airbnb";
// if (data.startsWith("Welcome") && data.endsWith("Airbnb")) {
//   console.log("Thank You!!");
// }
// // 7. split() converts the string to an array of strings and we have to mention from where we want to split string
// const hello = "hello world";
// console.log(hello.split(" "));
// console.log(hello.split("l"));
// // 8. padStart()/padEnd pads a string from start/end; 1st parameter is length and 2nd is what you want to pad
// const num = "9";
// console.log(num.padStart(3, 0));
// console.log(num.padEnd(6, 1));
// const maskNumber = function (number) {
//   const str = number + "";
//   const lastFour = str.slice(-4);
//   const maskedNum = lastFour.padStart(str.length, "*");
//   return maskedNum;
// };
// console.log(maskNumber(84375304893));
// console.log(maskNumber(7832384234990423));
// // 9. repeat() this repeats the strings
// const strRepeat = "Hi Bhavika";
// console.log(strRepeat.repeat(9));

// ----Challenge4---
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").addEventListener("click", function () {
//   const names = document.querySelector("textarea").value;
//   const nameNewLine = names.split("\n");
//   for (const camelCase of nameNewLine) {
//     const [fisrtN, secondN] = camelCase.toLowerCase().trim().split("_");
//     const finalN = `${fisrtN}${secondN.replace(
//       secondN[0],
//       secondN[0].toUpperCase()
//     )}`;
//     console.log(finalN);
//   }
// });

// strings methods usecase
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

// default parameters
// const bookings = [];
// const createBooking = function (fightNum, numPassengers = 1, price = 1500) {
//   const booking = {
//     fightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH1234");
// createBooking("LH1234", 2, 3000);

// const flight = "BH1234";
// const bhavi = {
//   name: "Bhavika Thawani",
//   pssprtNum: 53673592374,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH1234";
//   passenger.name = "Ms." + passenger.name;
// };
// checkIn(flight, bhavi);
// console.log(flight);
// console.log(bhavi);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperWord = function (str) {
//   const [fisrtWord, ...otherWords] = str.split(" ");
//   return [fisrtWord.toUpperCase(), ...otherWords].join(" ");
// };
// // this is higher order function which takes two functions as parameters
// const transformerFn = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };
// transformerFn("javascript is the best", upperWord);

// const lufthansa = {
//   airline: "Lufthansa",
//   iatacode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//   },
// };
// const eurowings = {
//   airline: "Eurowings",
//   iatacode: "EW",
//   bookings: [],
// };
// const swiss = {
//   airline: "Swiss",
//   iatacode: "SW",
//   bookings: [],
// };
// lufthansa.book(239, "Bhavika");
// const bookFlight = lufthansa.book;

// // call() method to use same method on different objects and takes arguments separately
// bookFlight.call(lufthansa, 123, "Bhavika");
// bookFlight.call(eurowings, 789, "Bhavesh");
// bookFlight.call(swiss, 675, "John");

// // apply() this is same as call method only difference is it takes arguments in array
// bookFlight.apply(eurowings, [839, "marry"]);
// bookFlight.apply(swiss, [564, "paul"]);

// // bind() this binds a method in object
// const flightBook = bookFlight.bind(eurowings);
// flightBook(587, "bhavika");

// ----Poll game---
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0:Javascript", "1:Python", "2: Rust", "3:C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// ---- Array Methods---
// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
// let arr1 = ["i", "j", "k", "l", "m", "n", "o", "p"];

// 1. SLice method(takes two arguments) is to take a part of array i.e. slices out a piece of array into new array
// console.log(arr.slice(3)); // this slice the array from  position 3 upto end
// console.log(arr.slice(1, 4));

// 2. Splice() to add/remove elements specified position and this mutate the original array(takes 2/3 arguments)
// console.log(arr.splice(2));
// const arr1 = arr.splice(3, 2);
// console.log(arr1);
// console.log(arr);
// 3. reverse() this method reverse the original array
// console.log(arr.reverse());
// 4. concat() merge two arrays and returns a new array
// console.log(arr.concat(arr1).join(","));
// at() to get element of specified index of array
// console.log(arr.at(2));

// ---- foreach----
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (mov, i, array) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposit ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
//   }
// });
// // ---forEach with map---
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//----challenge 4------
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ---map() method is same as forEach method takes a callback fn but in this it creates a new array i.e. it doesn't mutate the original one
// const movementsUSD = movements.map((movement) => movement * 1.1);
// console.log(movementsUSD);

// filter() method(takes a callback fn) filtered out the original array with those values that pass the test case and creates a new array
// const deposit = movements.filter((mov) => mov > 0);
// console.log(deposit);

// reduce() method
// const balance = movements.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(balance);
// Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// ----challenge 5-----
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// const obj1 = {
//   name: "bhavika",
//   name: "thawani",
// };
// console.log(obj1);

// find() method returns the value of the first array element that passes the condition
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(movements.findLast((mov) => mov < 0));

// some and every method
// const anyDeposits = movements.some((mov) => mov > 5000);
// console.log(anyDeposits);
// EVERY =>  if every element passes the test of callback fn then only it returns true

// console.log(movements.every((mov) => mov > 0));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// flat() method to flatten an array
// console.log(arr.flat());
// flatMap() maps all the elements of array and then  creates a new array by flatten the array

// ------sorting arrays-------
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(movements.sort());

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// -------------Array methods practice---------------
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const bankDeposit = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDeposit);

// const numDeposits = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits);

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// const conevrtTitleCase = function (title) {
//   const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(" ");
//   return titleCase;
// };
// console.log(conevrtTitleCase("this is nice title"));
// console.log(conevrtTitleCase("this is long but with a small cap"));

// -----challenge 4-------
// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // 1.
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // 2.
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? "much" : "little"
//   } `
// );

// // 3.
// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// // 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// // 6.
// const checkEatingOkay = (dog) =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // 7.
// console.log(dogs.filter(checkEatingOkay));

// // 8.
// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

// --------------Numbers,dates and timers--------------

// conversion
// console.log(Number("2379"));
// const abc = +"23";
// console.log(typeof abc);
// console.log(typeof NaN);

// parsing
// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseInt("e34", 10));
// console.log(Number.isNaN(20));

// checking if value is a number
// console.log(Number.isFinite(30));
// console.log(Number.isFinite("30"));

// ----math and rounding----

// math funcs do type coercion but not parsing
// console.log(Math.sqrt(81));
// console.log(Math.max(485, 2383, 84, 8, 3947, 93283, 9990)); // min and max fn to find minimum and maximum value
// const randomNum = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomNum(20, 50));

// // -----rounding integers------

// // 1. Math.trunc() returns the integer part of number
// console.log(Math.trunc(57.324));
// console.log(Math.trunc(83.829382));
// // 2. Math.round() returns rounded value to its nearest value
// console.log(Math.round(583.4848));
// console.log(Math.round(658.8997));
// // 3. Math.floor() returns rounded down value to its nearest value
// console.log(Math.floor(45.33));
// // 4. Mat.ceil() returns rounded up value to its nearest value
// console.log(Math.ceil(78.68));

// --- tofixed() converts a number to string, rounded to a specified no. of decimal
// console.log((43.4853).toFixed(3));

// -----remainder operator----
// console.log(8 % 5);

// ----numeric separators----
// Numeric Separators in javascript, enables underscore as a separator in numeric literals to improve readability.
// const hello = 5479_7348_892;
// console.log(hello);

// ----------BigInt------
// this variable is used to store big integer values
// console.log(BigInt(4832948435372854482084324278262873199));

// -----Dates----
// new Date() constructor is  used to create date objects

// const date = new Date();
// console.log(date);
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(Date.now());
// date.setFullYear(2025);
// date.setMonth(3);
// date.setDate(13);
// console.log(date);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const remainDays = calcDaysPassed(new Date(2024, 1, 24), new Date(2024, 1, 27));
console.log(remainDays);
