'use strict';
const restaurant = {
    name: 'Classico Italino',
    location: 'Vis Angelo Tavanti 23, Firenze, Italy',
    categories: ['Itallian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 24,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00',address}){
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered
        to ${address} at ${time}`)  ;
    },
    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
},
orderPizza: function(mainIngredient, ... otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
}
};
const rest1 = {
    name: 'Capri',
    numGuests:0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
// rest1.numGuests = rest2.numberGuests || 10;
// rest2.numGuests = rest2.nuGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANOYMOUS>';
rest1.owner &&= '<ANOYMOUS>';
rest2.owner &&= '<ANOYMOUS>';

console.log(rest1);
console.log(rest2);
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests);
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// console.log('-----OR-----');
// console.log(3 || 'Jonas');
// console.log(''|| 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || ''|| 'Hello'|| 23 || null);
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-----AND-----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');
// if (restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const arr = [1,2, ...[3,4]];
// const[a, b, ...others] = [1,2, 3, 4, 5];
// console.log(a, b, others);
// const[pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
// const add = function(...numbers){
// let sum = 0;
// for(let i = 0; i< numbers.length; i++)sum += numbers[i];
// console.log(sum);
// };
// add(2,3)
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7]
// add(...x);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ... arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// const mainMenucopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ... restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// // const ingredients = [prompt('Let\'s make Pasta! ingredient 1?'),
// // prompt('Ingredient 2?'),
// // prompt('Ingredient 3?')];

// // console.log(ingredients)s
// // restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
// // restaurant.orderPasta(...ingredients);
// const newRestaurant = {founderIn: 1998, ... restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);
// const restaurantCopy = {...restaurant};
// restaurantCopy.name ='Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);




// // restaurant.orderDelivery({
// //     time: '22:30',
// //     address: 'Via del Sole, 21',
// //     mainIndex: 2,
// //     starterIndex: 1,
// // });
// // restaurant.orderDelivery({
// //     address: 'via del Sole, 21',
// //     starterindex: 2,
// // });
// // const { name, openingHours, categories } = restaurant;

// // const arr = [2,3,4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // const [x,y, z] = arr;
// // console.log(x,y, z);
// // console.log(arr);
// // const [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);
// // // [main, secondary] = [secondary, main]
// // // console.log(main, secondary);
// // const[starter, mainCourse] = restaurant.order(2,0);
// // console.log(starter, maincourse);
// // const nested = [2, 4,[5,6]];
// // // const[i, , j] = n
// // const [i, [j, k]] = nested;
// // console.log(i, j, k);
// // console.log(name, openingHours, categories);
// // const {
// //     name: restaurantName,
// //     openingHours: hours,
// //     categories: tags,

// // } = restaurant;
// // console.log(restaurantName, hours, tags);
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({a, b}  = obj);
// // console.log(a,b);
// // const{fri : {open: o, close: c},} = openingHours;
// // console.log(o, c);