'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const API = 'https://restcountries.com/v2/';
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', API + `name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//   });
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', API + `name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     console.log(JSON.parse(this.responseText));

//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', API + `alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       console.log(JSON.parse(this.responseText));
//       const data = JSON.parse(this.responseText);
//       // console.log(data);

//       // Render country 1
//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountryData('Portugal');
// getCountryData('United States of America');
// getCountryData('germany');
// getCountryAndNeighbour('United States of America');
// getCountryAndNeighbour('Portugal');

// Fetch and Promises

let country = 'United States of America';
const request = fetch(API + `name/${country}`);

const getCountryData = function (country) {
  // Country 1
  fetch(API + `name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      // Country 2
      if (!neighbour) return;
      return fetch(API + `alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(err));
// };

// btn.addEventListener('click', whereAmI);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);

// Queue starving
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => {
//   for (let i = 0; i < 100; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// Promises from scratch
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery started');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(Math.random() * 1_000_000_000);
//     }
//     reject('You lost your money');
//   }, 2000);
// });

// lotteryPromise.then(resp => console.log(resp));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
    // img.addEventListener('error', reject);
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

// ASYNC AWAIT
function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

const whereAmI = async function (country) {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  getCountryData(dataGeo.country);
  return 'test';
};

// console.log('Start');
// whereAmI('portugal');
// console.log('End');
// btn.addEventListener('click', whereAmI);
const get3Countries = async function (c1, c2, c3) {
  const data = await Promise.all([
    getJSON(API + `name/${c1}`),
    getJSON(API + `name/${c2}`),
    getJSON(API + `name/${c3}`),
  ]);
  console.log(data);
  // const [data2] = await getJSON(API + `name/${c2}`);
  // const [data1] = await getJSON(API + `name/${c1}`);
  // const [data3] = await getJSON(API + `name/${c3}`);
  // console.log([data1.capital, data2.capital, data3.capital]);
};
// get3Countries('portugal', 'canada', 'tanzania');

const imgLoader = async function (...imgs) {
  const img1 = await createImage(imgs[0]);
  currentImg = img1;
  console.log('Image 1 loaded');
  await wait(2);
  currentImg.style.display = 'none';
  const img2 = await createImage(imgs[1]);
  currentImg = img2;
  console.log('Image 2 loaded');
  await wait(2);
  currentImg.style.display = 'none';
};

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage(img));
  const imgsEl = await Promise.all(imgs);
  console.log(imgsEl);
};

// const loadAll = async function (imgArr) {
//   const imgs = imgArr.map(async img => await createImage(img));
//   const imgsEl = await Promise.all(imgs);
//   console.log(imgsEl);
//   imgsEl.forEach(img => img.classList.add('parallel'));
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
// imgLoader('img/img-1.jpg', 'img/img-2.jpg');
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const sleep1 = ms => new Promise(r => setTimeout(r, ms));

const primes = async function () {
  await sleep1(1);

  console.log('Primes start');
  for (let i = 2; i < 10; i++) {
    let prime = 1;
    for (let j = 2; j < i; j++) {
      if (Number.isInteger(i / j)) prime = 0;
    }
    if (prime) console.log('Prime', i);
    await sleep1(4);
  }
};

const fib = async function () {
  await sleep1(1);
  let n1 = 1;
  let n2 = 1;
  console.log('Fib start');
  for (let i = 2; i < 10; i++) {
    [n1, n2] = [n2, n1 + n2];
    console.log('Fib', n2);
    await sleep1(1);
  }
};
console.log('Start async');
primes();
fib();
console.log('Finish async');
