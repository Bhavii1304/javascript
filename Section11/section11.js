// "use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// ////////////////////

const renderCountry = function (data) {
  const html = `
   <article class="country">
      <img class="country__img" src="${data.flags.png}" />
       <div class="country__data">
         <h3 class="country__name">${data.name.common}</h3>
         <h4 class="country__region">${data.region}</h4>
         <p class="country__row"><span>👫</span>${(
           +data.population / 1000000
         ).toFixed(1)} people</p>
         <p class="country__row"><span>🗣️</span>${
           Object.values(data.languages)[0]
         }</p>
         <p class="country__row"><span>💰</span>${
           Object.values(data.currencies)[0].name
         }</p>
       </div>
     </article>

   `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// const getJson = function (url, errorMessage = "something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
//   });
// };

const getJson = function (url, errorMessage = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json(); // Parse JSON data
  });
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country data
//     renderCountry(data);

//     // get neighbour country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2);
//     });
//   });
// };

// // getCountryAndNeighbour("portugal");
// // getCountryAndNeighbour("usa");
// getCountryAndNeighbour("bharat");
// getCountryAndNeighbour("canada");

// const request = fetch("https://restcountries.com/v3.1/name/bharat");
// console.log(request);

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v3.1/name/${country}`, "country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders?.[0];
//       if (!neighbour) throw new Error("No neighbour found");

//       return getJson(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "country not found"
//       );
//     })
//     .then((neighbourData) => renderCountry(neighbourData))
//     .catch((err) => {
//       console.log(`${err} 👀`);
//       renderError(`Something  went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener("click", function () {
//   getCountryData("bharat");
// });

// -------------Coding challenge 1-------------
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };
// whereAmI(23.066221, 72.636199);
// whereAmI(19.037, 72.873);
// whereAmI(23.31609, 72.4312);

// ---------------- Event loop practice------------
// console.log("test start"); // ---- this will print 1st
// setTimeout(() => console.log("timer in cb"), 0); // this 5th
// Promise.resolve("resolved promise").then((res) => console.log(res)); // this 3rd
// Promise.resolve("resolved again").then((res) => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// }); // this 4th
// console.log("test end"); // this 2nd

// ------------Creating promises using Promise constructor------------

// const lottery = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("you gain money");
//   } else {
//     reject("you lose money");
//   }
// });
// lottery.then((res) => console.log(res)).catch((err) => console.log(err));

// const wait = function (seconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("i waited for 1 sec"));

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "bhavika", passwrd: "abc123" });
//     } else {
//       reject("some error occured");
//     }
//   }, 1000);
// });

// promise2
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => console.log(username))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally resolved"));

// -------- promisifying geolocation api--------

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

// btn.addEventListener("click", whereAmI);

// // ---------------challenge 2-------------

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", function () {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// let currentImg;

// createImage("/Section11/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("/Section11/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
//     const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
//     const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);

//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.log(err);
//   }
// };
// get3Countries("bharat", "greenland", "china");

const GITHUB_API = "https://api.github.com/users/bhavii1304";
const user = fetch(GITHUB_API);
console.log(user);
