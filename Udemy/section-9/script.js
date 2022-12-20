'use strict';
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
// },
// [`day-${2 + 4}`]: {
//         open: 0, close: 24,
//     },
// };
// const restaurant = {
//     name: 'Classico Italino',
//     location: 'Vis Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Itallian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// openingHours,
// openingHours: {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 24,
//     },
//     sat: {
//         open: 0,
//         close: 24,
//     },
//  },

//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//     orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//         console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered
//         to ${address} at ${time}`);
//     },
//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
//     },
//     orderPizza: function (mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     }
// // };

console.log('a+very+nice+string'.split('+'));
console.log('Jonas schmedtmann'.split(''));
const[firstName, lastName] = 'Jonas Schmedtmann'.split('');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');
console.log(newName);
const capitalizeName = function(name){
    const names = name.split('');
    const namesUpper = [];
    for(const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(''))
}
const passenger = 'jessica ann smith davis'
capitalizeName('jonas schmedtmann');
const messsage = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));

/*onst airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)
//comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail)
console.log(email === normalEmail);
//replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '#');
console.log(priceUS);
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
//BOOleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the New Airbus family');
}
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome abroad!');
    }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');*/

// const airline = 'TAP  Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.indexOf('portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf('')+ 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// const checkMiddleSeat = function(seat){
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E')
//     console.log('You got the middle seat');
//     else console.log('You got Lucky');  
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// console.log(new String('jonas'));
// console.log(typeof new String ('jonas'));
// console.log(typeof new String('jonas').slice(1));

/*// MAPS ITERATIONS
const question = new Map([
    ['question', 'what is the best programming language in the world?'],
    [1, 'c'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
]);
console.log(question);
//converting object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log('Answer $ {key}: ${value}');
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*// MAPs: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')
console.log(rest.set(2, 'Lisbon, Portugal'));
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11).set('close',23)
.set(true, 'we are open: D')
.set(false, 'we are closed: C');
console.log(rest.get(true));
console.log(rest.get('name'));
console.log(rest.get(1));
const time = 11 ;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1,2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.set([1,2], 'Test'));*/


/*// SET
const orderSet = new  Set ([
    'Pasta',
    'Pizza',
    'Pizza',
    'Rissotto',
    'Pasta',
    'Pizza'
]);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Sandwich');
console.log(orderSet);
orderSet.delete('Pizza');
console.log(orderSet);
for (const order of orderSet)
// const staff = ['waiter', 'chef', 'waiter', 'Manager', 'Chef', 'waiter'];
// const staffUnigue = [...new Set (staff)];
// console.log (staffUnique);
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'manager', 'Chef', 'waiter']).size
);
console.log(staff)*/



// const properties = Object.keys(openingHours);
// console.log(properties);
//  let openStr = (`We are open on ${properties.length}`);
// for (const day of properties) {
//     openStr += `${day},`;
// }
// console.log(openStr);
// const values = Object.values(openingHours);
// console.log(values);
// const entries = Object.entries(openingHours);
// console.log(entries);
// for(const [key, {open, close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//  if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);
// //with optional chain
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open
//     console.log(`On ${day}, we open at ${open}`);
// }
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
// //Arrays
// // const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()){
//     console.log(item);
// }
// for (const [i, el] of menu.entries()){
//     console.log(`${i + 1}; ${el}`);
// }
// console.log(menu.entries())
//     console.log(`${item[0] + 1}: ${item[1]}`)

// const rest1 = {
//     name: 'Capri',
//     numGuests:0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };
// rest1.numGuests = rest2.numberGuests || 10;
// rest2.numGuests = rest2.nuGuests || 10;

// rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANOYMOUS>';
// rest1.owner &&= '<ANOYMOUS>';
// rest2.owner &&= '<ANOYMOUS>';

// console.log(rest1);
// console.log(rest2);
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


// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davices',
//             'Kimmich', 
//             'Goretzka',
//             'Coman',
//             'Mullar',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Hazard',
//             'Brandit',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewendoswki', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2.
// const[gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// //5.
// const{odds: {team1, x: draw, team2},} = game;
// console.log(team1, draw, team2);
// const printGoals = function(...players){
//     console.log(players);
//     console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(game.scored);

// //7
// team1 < team2 && console.log(' team 1 is more likely to win');
// team2 > team1 && console .log('Team 2 is more likely to win');


//1.
// for(const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// // for (const odd of Object.values(game.odds))
// for(const odd of odds) average += odd;
// average += odds;
// average /=  odds.length;
// console.log(average);

// // 3.
// for(const [team,odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${odd}`);
// }
// const gameEvents = new Map([
//     [17, '⚽️ Goal'],
//     [36, ' 🔄 Substitution'],
//     [47, '⚽️ Goal'],
//     [61, '🔄 Substitution'],
//     [64, ' 🔶 Yellow card'],
//     [69, ' 🔴 Red Card'],
//     [70, '🔄 Substitution'],
//     [72, '🔄 Substitution'],
//     [76, '⚽️ Goal'],
//     [80, '⚽️ Goal'],
//     [92, '🔶 Yellow Card'],
// ]);
// // console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2,
// gameEvents.delete(64);
// console.log(gameEvents)

// //3.
// console.log(`An event happened , on average, every ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened , on average, every ${time / gameEvents.Size} minutes`);
// //4.
// for (const [min, event] of gameEvents) {
//     const half = min <= 45? 'FIRST' : 'SECOND';
//     console.log(`[ HALF ] ${min}: ${event}`);
// }