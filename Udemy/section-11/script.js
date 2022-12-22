'use strict'
// BANKIST APP

// DATA
const account1 = {
    owner: 'Nivya Mathew',
    movements: [200, 450, -400, 3000, -650, -130,70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2 = {
    owner: 'Anusha VS',
    movements: [5000, 3400, -15, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Aparna',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Hisham',
    movements: [430,1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_inpt--pin');
const inputTransferTo = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_input--loan-amount');
const inputCloseUsername = document.querySelector('.form_input--user');
const inputClosePin = document.querySelector('.form_input--pin');

const dispalyMovements = function(movements, sort = false){
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;
    
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements_row">
        <div class="movements_type movements_type--${type}">${i + 1} ${type}</div>
        <div class = "movements_value">${mov}</div>
        </div>
          `;
          containerMovements.insertAdjacentHTML('afterbegin', html); 
    });
}; 

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}#`;
  };
const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}#`;

    const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
     labelSumOut.textContent = `${Math.abs(out)}#`;

}
// const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * 1.2)/ 100)
/*// displayMovements(account1.movements)
const calcDisplaySummary = function ()
const createUsernames = function (user){
    accounts.forEach(function(acc){
        acc.username = user.owner
    
//   const username = user
  .toLowerCase()
  .split('')
  .map(name => name[0])
// (function(name){
//     return name[0];  
// })
.join('');
return Username;
    });
};
createUsernames(accounts);
const calcPrintBalance = function(movements){
    const balance = movements.reduce((acc,mov) => acc + mov, 0);

}*/
// console.log(accounts);
// const user = 'Steven Thomas Williams';

// console.log(username);
// console.log(containerMovements.innerHTML);
/*// LECTURES
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
  currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
  });
//   SET
const currenciesUnique = new Set(['USD', 'GBP','USD','EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});*/


// Event handler
/*btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    accounts.find(acc => acc.owner === inputLoginUsername.value);
    console.log('currentAccount');
    if(currentAccount.pin === Number(inputLoginPin.value)){
        labelWelcomr.textContent = `Welcome back. ${
            currentAccount.owner.split('')[0]
        }`;
        containerApp.getElementsByClassName.opacity = 100;
        dispalyMovements(currentAccount.movements);
        console.log('LOGIN')
    }
});*/
/*btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const recieverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value);
        inputTransferAmount.valur

        console.log(amount, recieverAcc);
        if(amount > 0 && currentAccount.balance >= amount &&
            receiverAcc?.username !== currentAccount.username){
                currentAccount.movements.push(-amount);
                receiverAcc.movevments.push(amount);
                // console.log('Transfer valid');
                updateUI(currentAccount);
                
            }
        });*/
        btnLoan.addEventListener('click', function (e){
            e.preventDefault();
            const amount = Number(inputLoanAmount.value);
            if (amount > 0 && currentAccount.movements.some(
                mov => mov => amount * 0.1 )){
                    currentAccount.movements.push(amount);
                }
        });
       /* btnClose.addEventListener('click', function(e){
            e.preventDefault();
            if(
                inputCloseUsername.value === currentAccount.username &&
                Number(inputClaosePin.value) === currentAccount.pin
            ){
                const index = accounts.findIndex(
                    acc => acc.username === currentAccount.useerename
                );
                console.log(index);
                // .inddexOf(23)
                // DELETE ACCOUNT
                accounts.splice(index, 1);
                // HIDE UI
                containerApp.style.opacity = 0;
            }
            inputCloseUsername.value = inputClosePin.value = '';
        })*/
       /* let sorted = false;
        btnSort.addEventListener('click', function(e){
            e.preventDefault();
            dispalyMovements(currentAccount.movements, !sorted);
            sorted = !sorted;
        });*/
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////

/*let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i', 'h', 'g', 'f'];
console.log(arr2.reverse()); 
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(letters.join(' _ '));
*/

/*const arr =[23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*// for (const movement of movements){
    for(const [i, movement] of movements.entries()){
    if(movements > 0){
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
}
movements.forEach(function(movement, index,array){
    if(movements > 0){
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
}); */
// ////CODE CHALLENGE 1

/*const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1,3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function(dog, i){
        if(dog >= 3){
            console.log(`Dog number $(i + 1) is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still  a puppy `);
        }
    });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1 , 4])*/ 
/*// THE MAP METHOD
const eurToUSD = 1.1;
// const movementsUSD = movements.map(function(mov){
    // return mov * eurToUSD;
    // return 23;
// });
const movementsUSD = movements.map(mov => mov * eurToUSD);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];
for(const mov of movements) movementsUSD.push(mov * eurToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
    `Movement ${i + 1}: You  ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
    
);
console.log(movementsDescriptions)*/

/*const deposits = movements.filter(function (mov){
    return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);*/

/*console.log(movements);
// accumulator(acc) is like a snow ball
//  const balance = movements.reduce(function(acc, cur, i, arr){
    // console.log(`Iteration ${i}: ${acc}`)
    // return acc + cur 
//  }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
 console.log(balance);
 let balance2 = 0;
 for (const mov of movements) balance2 += mov;
 console.log(balance2);
//  Maximum value
   const max = movements.reduce((acc, mov) => {
    if(acc > mov)
    return acc;
    else
    return mov;
   }, movements[0]);
   console.log(max);
*/
//  CODING CHALLANGE 2
/*const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);
    const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
    return average
};
 const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
 const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 console.log(avg1, avg2);
 */

 /*const eurToUSD = 1.1; 
//  PIPELINE 
 const totalDepositsUSD = movements
 .filter(mov => mov < 0)
//  .map(mov => mov * eurToUSD)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * eurToUSD;
    })
 .reduce((acc,mov) => acc + mov, 0);
 console.log(totalDepositsUSD);*/

// CODING CHALLANGE 3
 /*const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0)/ adults.length;
    
};
 const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
 const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 console.log(avg1, avg2);*/


 /*const firstWithdrawal = movements.find(mov => mov < 0);
 console.log(movements);
 console.log(firstWithdrawal);
 console.log(accounts);
 const account = accounts.find(acc => acc.owner === 'Anusha VS');
 console.log(account);*/

 /*console.log(movements);
 console.log(movements.includes(-130));
 console.log(movements.some(mov => mov === -130));

 const anyDeposits = movements.some(mov => mov > 1500);
 console.log(anyDeposits);
 console.log(movements.every(mov => mov > 0));
 console.log(account4.movements.every(mov => mov > 0));

 const deposit = mov => mov > 0;
 console.log(movements.some(deposit));
 console.log(movements.every(deposit));*/

/*const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeap = [[[1,2], 3], [4,[5,6]], 7, 8];
console.log(arrDeap.flat(2));
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// console.log(allMovements);
// const overBalance = allMovements.resuce((acc,mov) => acc + mov, 0);
const overBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

const overalBalance =accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);*/

/*const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());
// NUMBERS
console.log(movements);
console.log(movements.sort());
// movements.sort((a,b) => {
//     if (a > b)
//     return 1;
//     if(a < b) return -1;
// });
movements.sort((a, b) => a-b)
console.log(movements);
// movements.sort((a,b) => {
//     if (a > b) return -1;
//     if(a < b) return 1;
// });
movements.sort((a,b) => b-a)
console.log(movements);*/

/*const arr = ([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1,3, 5);

console.log(x)

arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({length: 7}, () => 1);
console.log(y);
const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function(){

    const movementsUI = Array.from(document.querySelectorAll('.movements_value'),
    el => Number(el.textContent.replace('$', '')));
    console.log(movementsUI);
    const movementsUI2 = [...document.querySelectorAll
    ('.movements_value')];
});*/

/*// 1
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// prefixed ++ operator
let a = 10;
console.log(a++);
console.log(a);

// 3.
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) =>{
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals:']
    return sums;
}, {
    deposits: 0, withdrawals: 0}
);
console.log(deposits, withdrawals);

// 4
// this is a nice title - This Is a Nice Title
const convertTitleCase = function(title){
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
const exceptions  = ['a', 'an', 'the', 'but', 'or', 'on', 'in','with'];
const titleCase = title
.toLowerCase()
.split(' ')
.map(word => exceptions.includes(word) ? word : capitalize(word))
    .join('');
return titleCase;
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMP*/

/*const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood:275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Micheal']},
] ;
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah);
// console.log(`Sarah's dog is eating ${dogSarah.recFood ? 'much': 'litle'}`);3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners)
.flat();
console.log(ownersEatTooMuch);

// 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too little!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6
console.log(dogs.some(dog => dog.curFood * 0.9 && dog.curFood < dog.recFood * 1.1));


const checkEatingOkay = dog =>
dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);*/

