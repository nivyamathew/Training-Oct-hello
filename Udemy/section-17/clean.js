'use strict';
const budget = Object.freeze([
    { value: 250, description: 'Sold old Tv 📺', user: 'nivya' },
    { value: -45, description: 'Groceries 🥑', user: 'nivya' },
    { value: 3500, description: 'Monthly Salary 👩‍💻', user: 'nivya' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'nivya' },
    { value: -1100, description: 'New iPhone 📱', user: 'nivya' },
    { value: -20, description: 'Candy 🍭', user: 'ann' },
    { value: -125, description: 'Toys 🚂', user: 'ann' },
    { value: -1800, description: 'New Laptop 💻', user: 'nivya' },
]);

// budget[0].value = 10000;
// budget[9] = 'nivya';

const spendingLimits = Object.freeze({
    nivya: 1500,
    ann: 100,
});
// spendingLimits.sam = 200;
// console.log(spendingLimits);


const getLimit = (limits, user) => limits?.[user] ?? 0;

// PURE FUNCTIONS
const addExpense = function (state, limits, value, description, user = 'jonas') {
    // if (!user) user = 'nivya';
    const cleanUser = user.toLowerCase();
    // let lim;
    // if (spendingLimits[user]) {
    //     lim = spendingLimits[user];
    // } else {
    //     lim = 0;
    // }
    // const limit = spendingLimits[user] ? spendingLimits[user]: 0;
    // const limit = spendingLimits?.[user]?? 0;
    // const limit = getLimit(user);
    return value <= getLimit(limits, cleanUser) ?
        [...state, { value: -value, description, user: cleanUser }] : state;
    // budget.push({ value: -value, description: description, user: cleanUser };
};
// };
const newBudget1 = addExpense(budget, spendingLimits, 10,'Pizza 🍕', );
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'ann');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'sam');
// console.log(budget);
console.log(newBudget1);
console.log(newBudget2);



/*const checkExpenses1 = function (state, limits) {
    return state.map(entry => {
        return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'}
        : entry;
    })
    // for (const entry of newBudget3) {
        // const limit = spendingLimits?.[entry.user] ?? 0;
        // let lim;
        // if (spendingLimits[entry.user]) {
        //     lim = spendingLimits[entry.user];
        // } else {
        //     lim = 0;
        // }
    //     
};
// checkExpenses1;*/

const checkExpenses = (state, limits) =>
state.map(entry => 
    entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'}
    : entry 
    );
const finalBudget = checkExpenses(newBudget3, spendingLimits);
// console.log(newBudget3);
// console.log(budget);
console.log(finalBudget);

const logBigExpenses = function ( state, bigLimit) {
    const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
    // .reduce((str, cur) => `${str} ${cur.description.slice(-2)}`, ' ' )

    console.log(bigExpenses);
    // let output = '';
    // for (const entry of budget)
    //     output += `${entry.description.slice(-2)} /`;
    // output += entry.value <= -bigLimit ?
    // if (entry.value <= -bigLimit) {
    //     // output += el.description.slice(-2) + ' / ';
    //     output += `${entry.description.slice(-2)} /`;
    // }

    // output = output.slice(0, -2);
    // console.log(output);
};
// console.log(budget);
logBigExpenses(finalBudget, 500);