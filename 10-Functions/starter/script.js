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
