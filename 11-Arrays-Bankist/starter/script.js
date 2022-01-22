'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
for (const movement of movements) {
  console.log(`${movement}`);
}

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
  console.log(`${i}`);
});

//const accounts = [account1, account2, account3, account4];

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-1, 1);
  const dogs = [...dogsJuliaCopy, ...dogsKate];
  for (const [i, dog] of dogs.entries()) {
    const str =
      dog >= 3
        ? `Dog number ${i} is an adult, and is ${dog} years old`
        : `Dog number ${i} is still a puppy 🐶`;
    console.log(str);
  }
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const test = [1, 2, 3];

test.forEach(function (t) {
  console.log('here');
});

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'depsosited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// Doing work, not creating a new return value
const computeUsername = accounts => {
  accounts.forEach(
    account =>
      (account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(word => word[0])
        .join(''))
  );
};

computeUsername(accounts);

const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov <= 0);

const average = array => array.reduce((a, b) => a + b) / array.length;
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18);
//   const averageAge = average(humanAges);
//   console.log(averageAge);
// };
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, e, i, arr) => acc + e / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let currentAccount;

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, e) => acc + e);
  account.balance = balance;
  labelBalance.textContent = balance + '€';
};

const calcDisplaySummary = function (account) {
  labelSumIn.textContent =
    currentAccount.movements.filter(x => x > 0).reduce((x, y) => x + y) + '€';
  labelSumOut.textContent =
    currentAccount.movements.filter(x => x < 0).reduce((x, y) => x + y) * -1 +
    '€';
  labelSumInterest.textContent =
    currentAccount.movements
      .filter(x => x > 0)
      .map(x => (x * currentAccount.interestRate) / 100)
      .filter(x => x > 1)
      .reduce((x, y) => x + y) + '€';
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(currentAccount);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

// Event Handlers
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  // 'Enter' is default click button for input in a form
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    updateUI(currentAccount);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(x => x >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const account = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (currentAccount.username === account && currentAccount.pin === pin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((x, y) => x + y);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const isEatingHealthy = function (dog) {
  if (
    dog.recommendedFood * 0.9 < dog.curFood &&
    dog.recommendedFood * 1.1 > dog.curFood
  ) {
    return true;
  }
  return false;
};

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
  if (dog.owners.includes('Sarah')) {
    const lowerBound = dog.recommendedFood * 0.9;
    const upperBound = dog.recommendedFood * 1.1;
    if (lowerBound > dog.curFood) {
      console.log(`Sarah's dog is eating too little!`);
    } else if (upperBound < dog.curFood) {
      console.log(`Sarah's dog is eating too much!`);
    } else {
      console.log(`Sarah's dog is eating just right.`);
    }
  }
});

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .map(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .map(dog => dog.owners);
console.log(`${ownersEatTooLittle.flat().join(', ')}'s dogs eat too little.`);
console.log(`${ownersEatTooMuch.flat().join(', ')}'s dogs eat too much.`);
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
const goodDog = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

const sortedDogs = dogs
  .slice()
  .sort((a, b) => Number(a.recommendedFood) - Number(b.recommendedFood));
console.log(sortedDogs);
