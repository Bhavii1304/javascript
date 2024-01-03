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
