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
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}
