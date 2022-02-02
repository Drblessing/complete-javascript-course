'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
Person.prototype.species = 'Homo Sapiens';

const jonas = new Person('Jonas', 1991);

// console.log(jonas);
// const test = function () {
//   console.log('test this!');
// };
// const arr = [1, 2, 3, 4];
// const map = new Map();
// map[test] = 'asdf;lkj';

// for (let i = 0; i < 2; i++) {
//   const test1 = function () {};
//   console.dir(test1);
// }

// console.dir(test.__proto__.__proto__.__proto__);
jonas.calcAge();

// Coding Challenge 1
console.log('Coding challenge 1');

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is going ${this.speed}km/h.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is going ${this.speed}km/h.`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
  species = 'hominids';
}

const danny = new PersonCl('danny blessing', 1998);
const danny2 = new PersonCl('danny blessing', 1998);
danny.species = 'martian';
console.log('Coding Challenge 2');

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going ${this.speed}km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going ${this.speed}km/h.`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

focus = new CarCl('Ford', 120);

focus.accelerate();
focus.brake();
console.log(focus.speedUS);
focus.speedUS = 100;
focus.accelerate();

console.log('Coding Challenge #3');

// class EV extends CarCl {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }
// Public Interface

//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.charge *= 0.99;
//     console.log(
//       `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
//     );
//   }
// }

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge *= 0.99;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const roadster = new EV('tesla', 120, 23);
roadster.accelerate();
roadster.brake();
roadster.chargeBattery(90);
roadster.accelerate();

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    //this.#movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log('Coding Challenge 4');

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge *= 0.99;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);

car1.chargeBattery(100);

car1
  .chargeBattery(100)
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake();
