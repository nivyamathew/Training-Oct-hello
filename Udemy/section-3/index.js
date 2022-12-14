'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive : D'); 

// const interface = 'audio';
// function logger(){
//     console.log('My name is Nivya');
// }
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
//     return juice;
// }
//  const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// logger();
// function calcAge1(birthYear){
//     // const age = 2037 - birthYear;
//     // return age;
//     return 2037 - birthYear;
// }
//  const age1 = calcAge1(1991);
//  console.log(age1);
//   const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
//  }
//  const age2 = calcAge2(1992);
//  console.log(age1, age2);
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(2000, 'Neon'));
// console.log(yearsUntilRetirement(1991, 'Bob'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// };

// // const cutPieces = function(fruit){
// //     return fruit * 4;
// // };
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = (`Juice with ${applePieces} apples and ${orangePieces} oranges.`);
//     return juice;
// } 
// console.log(fruitProcessor(2,3));
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     if(retirement >0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Neon'));
// console.log(yearsUntilRetirement(1970, 'Bob'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKolas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKolas);
// const checkwinner = function (avgDolphins, avgKolas) {
//     if (avgDolphins >= 2 * avgKolas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKolas})`);
//     } else if (avgKolas >= 2 * avgDolphins) {
//         console.log(`Kolas win 🏆 (${avgKolas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkwinner(scoreDolphins, scoreKolas);
// checkwinner(576, 111);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKolas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKolas);
// checkwinner(scoreDolphins, scoreKolas);

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Micheal', 'Steven', 'Peter'];
// friends.push('Jay');
// friends.unshift('Sam');
// const newLength = friends.push('John');
// console.log(friends);
// console.log(newLength);
// console.log(friends.indexOf('Steven'));
// if (friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

// const calcTip = function(bills){
//     return bills >= 50 && 300 ? bills * 0.15:
//     bills * 0.2;
// }
// const bills = [125, 555, 44];
// const tips0 = [calcTip(bills[0]), calcTip(bills[1]),
// calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1, bills[2] + tips[2]]]
// console.log(bills, tips, totals);
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann'
//     2037 - 1991
//     'teacher'
//     ['Micheal', 'Peter','Steven']
// ];

// const josnas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['job']);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// const interestedIn = prompt('what you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // console.log(interestedIn);
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemdtnn12';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

// calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
// },

// getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} -year old 
//     ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas['calcAge'](199));

// console.log(jonas.calcAge());

// console.log(jonas.getSummary());

// const mark ={
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// const john = {
//    fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi})
//     is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi})
//     is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// // }
// console.log('Lifting weights repetition 1  🏋️‍♀️');
// console.log('lifting weights repetition 2  🏋️‍♀️');
// console.log('lifting weights repetition 3  🏋️‍♀️');
// console.log('Lifting weights repetition 4  🏋️‍♀️');
// console.log('lifting weights repetition 5  🏋️‍♀️');
// console.log('lifting weights repetition 6  🏋️‍♀️');
// console.log('Lifting weights repetition 7  🏋️‍♀️');
// console.log('lifting weights repetition 8  🏋️‍♀️');
// console.log('lifting weights repetition 9  🏋️‍♀️');
// console.log('Lifting weights repetition 10  🏋️‍♀️');

// for(let rep = 5; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

const jonas = [
    'jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];
const types = []
for(let i = 0;i< jonas.length ;i++){
    console.log(jonas[i], typeof jonas[i]);
    types[i] = typeof jonas[i];
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
    ages.push(2037 -years[i]);
}
console.log(ages);

console.log('---ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') break;
    console.log(jonas[i], typeof jonas[i]);
}



























































