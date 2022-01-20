'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deilvered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
//#region

const [first, , second, third] = restaurant.categories;
console.log(first, second, third);

let [x, y] = [1, 2];
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// receive two return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 1;
let b = 2;
const obj = { a: 10, b: 20 };
({ a, b } = obj);
console.log(a, b);

//Nested Object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'here',
  mainIndex: 2,
  starterIndex: 2,
});
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [1, 2, 3, ...arr2];
console.log(...arr3);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
newMenu[0] = 'test';
console.log(restaurant.mainMenu);

// Copy array
const mainMenucopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);
const ingredients = ['Dough', 'Sauce', 'Cheese'];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  worth: 100,
  ...restaurant,
  founder: 'Guiseppe',
  coundedIn: 1998,
};

console.log(newRestaurant);
console.clear();

const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(otherFood);

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);

let xx = [23, 4, 5];
add(...xx);
// logical operators
// use ANY dta type, return ANY data typoe, short-circuting
console.log(3 || 'Jonas');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// rest2.numGuests = rest1.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ||= 10;

// console.log(rest2, rest1);

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const [team1, draw, team2] = game.odds;

// const printGoals = function (...printGoals) {
//   for (let i = 0; i < printGoals.length; i++) {
//     console.log(printGoals[i]);
//     console.log(i);
//   }
// };

// team1 < team2 && console.log('team1 favored');
// team2 < team1 && console.log('team2 favored');

const arr4 = [1, 2, 3, 4, 5];

for (const [i, e] of arr4.entries()) {
  console.log(i, e);
}

console.log(restaurant.openingHours?.mon?.open);

const dayys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of dayys) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open;
  console.log(
    `On ${day}, we are ${open ? `open at ${open}!` : `not open, sorry :(`}`
  );
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderFood?.(0, 1) ?? 'Method does not exist');

const users = [{ name: 'Danny', email: 'danny@protonmail.com' }];

console.log(users[2]?.name ?? 'User array empty');

console.log(users[3]);

let str = '';
// Looping over objects
for (const day of Object.keys(openingHours)) {
  str += `${day}`;
}
console.log(str);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let scorers = {};
for (const [index, player] of Object.entries(game.scored)) {
  console.log(`Goal ${index}: ${player}`);
  scorers[player] ?? (scorers[player] = 0);
  scorers[player] += 1;
}
console.log(scorers);
let sum_odds = 0;
for (const [indexx, oddss] of Object.entries(game.odds)) {
  if (indexx != 'x') {
    console.log(`Odds of victory ${game[indexx]}: ${oddss}`);
  } else {
    console.log(`Odds of draw: ${oddss}`);
  }
  sum_odds += oddss;
}
console.log(`Average odd: ${sum_odds}`);

const ordersSet = new Set(['a', 'b', 'a']);
console.log(ordersSet);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Italy');
rest.set(2, 'Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Open!')
  .set(false, 'Closed!');
console.log(rest);
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.set([1, 2], 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// Setting elements in DOM as values of map and then manipulating
rest.set('Heading', document.querySelector('h1'));
//rest.get('Heading').textContent = 'test';
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language of all time?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct ✅'],
  [false, 'Try Again!'],
]);
console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') == answer));
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
for (const [minute, event] of gameEvents) {
  const strEvent = minute <= 45 ? '[FIRST HALF]' : '[LAST HALF]';
  console.log(`${strEvent} ${minute}: ${event}`);
}
console.log(events);
gameEvents.delete(64);
console.log(
  `An event happend on average every ${90 / gameEvents.size} minutes`
);
const time_ = [...gameEvents.keys()].pop();
console.log(time_);
console.log(
  `An event happened, on average, every ${time_ / gameEvents.size} minutes`
);
//#endregion
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const names = document.querySelector('textarea').value;
  const rows = names.split('\n');
  let c = 0;
  for (const name of rows) {
    c += 1;
    const [firstName, lastName] = name.trim().split('_');
    const camelCaseName =
      firstName.toLowerCase() +
      lastName[0].toUpperCase() +
      lastName.slice(1).toLowerCase();
    console.log(camelCaseName.padEnd(30, ' ') + `${'✅'.repeat(c)}`);
  }
});
// camelCaseConverter(`underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`);
