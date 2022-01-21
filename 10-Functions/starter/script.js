'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', undefined, 12);

const flight = 'LH234';
const Danny = {
  name: 'Daniel Blessing',
  passport: 3141592654,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 3141592654) {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};

checkIn(flight, Danny);
console.log(flight, Danny);

const greet = greeting => name => console.log(`${greeting} + ${name}`);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight number ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

const book = lufthansa.book;
lufthansa.book(239, 'Danny B');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book,
};

eurowings.book(232, 'Dr.Seuss');
eurowings.book(2332, 'Kano');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(
    `${this.airline} bought a plane. It now owns ${this.planes} planes.`
  );
};

document
  .querySelector('body > button.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const setRate = rate => taxCalc => taxCalc + taxCalc * rate;

const poll = {
  answers: [0, 0, 0, 0],
  registerNewAnswer() {
    const answer = Number(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );
    if (answer === 0 || answer === 1 || answer === 2 || answer === 3) {
      this.answers[answer]++;
    } else {
      alert(`Pelase select 0,1,2, or 3 :)`);
    }
    this.displayResults('string');
  },
  displayResults(type = 'string') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(`${this.answers}`);
    }
  },
};
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

for (let i = 0; i < 5; i++) {
  const test = `${i}`;
  console.log(test);
  console.log(`test + ${i}`);
}

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount}`);
  };
};

const booker = secureBooking();

booker();
booker();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
    console.log('click');
  });
})();
