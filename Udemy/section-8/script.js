'use strict'

// const myName = 'Jonas';

// if (age >= 30){
//     const decade = 3;
//     var millenial = true;
// }
// function second(){
//     const job = 'teacher';
//     console.log(`${myName} is a ${age}-old ${job}`)
// }
// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     // console.log(firstName);
//     function printAge(){
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true;
//             const firstName = 'Steven';
//             const output = 'NEW OUTPUT!';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//             function add(a, b){
//                 return a + b;
//             }
//             console.log(millenial);
//             // add(2,3);
//             console.log(output);
//         }
//     }
//     printAge();

//     return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

// 18/12/2022

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2,3));
// console.log(addArrow);
// console.log(addExpr(2,3));
// function addDecl(a,b){
//     return a + b;
// }
// const addExpr = function(a,b){
//     return a + b;
// };
// var addArrow = (a, b) => a + b;

// if(!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('All products deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;
// console.log (x === window.x);
// console.log (y === window.y);
// console.log (z === window.z);

// console.log(this);
// const calcAge = function(birthYear) {
//     // console.log(2037 - birthYear);
//     // console.log(this);
// }
// calcAge(1991);
// const calcAgeArrow = function (birthYear){
//     // console.log(2037 - birthYear);
//     // console.log(this);
// };
// calcAgeArrow(1980);
// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();
// const matilda = {
//     year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';
// const jonas = {
//     firstName: 'jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(2037 - this.year);
        // const self = this;
        // console.log(this);
        // // console.log(2037 - this.year);
        // const isMillenial = function(){
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // const self = this;
//         const isMillenial = function () {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
    // },
//     greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();
// // console.log(this.firstName);
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
// var addArrow = (a,b) => a + b;

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge)

// const me = {
//     name: 'Nivya',
//     age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('friend:', friend);
// console.log('Me', me);
// let lastName = 'Williams';
// let oldLastName = lastName;git ststus

// lastName = 'Davis';
// console.log(lastName, oldLastName);
// const jessica = {
//     firstName: 'Jessiaca',
//     lastName: 'Williams',
//     age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// };
// const jessicaCopy = Object.assign({},jessica2);
// // jessicaCopy.lastName = 'Davis';
// // console.log('Before marriage', jessica2);
// // console.log('After marriage', jessicaCopy);
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);




