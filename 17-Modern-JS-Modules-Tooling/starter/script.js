// Importing Module
import * as shoppingCart from './shoppingCart.js';

console.log('Importing shopping cart');
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();

// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();

// console.log('Done!');
// console.log(lastPost.then(l => console.log(l)));

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es'

// const state = { cart: [{ product: 'bread' }] };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
// stateDeepClone.cart.product = 'test';
// console.log(state);

console.log(shoppingCart.cart.length);

if (module.hot) {
  module.hot.acc;
}
