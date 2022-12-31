// EXPORTING MODULE
console.log('Exporting module');

// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching users');
const shippigCost = 10;
 export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export{ totalPrice, totalQuantity as tq};

// DEFAULT MODULE

export default function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`);
}

      