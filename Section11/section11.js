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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((neighbourData) => renderCountry(neighbourData));
};
getCountryData("bharat");
