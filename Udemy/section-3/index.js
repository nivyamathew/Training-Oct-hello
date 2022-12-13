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
function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}
//  const age1 = calcAge1(1991);
//  console.log(age1);
//   const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
//  }
//  const age2 = calcAge2(1992);
//  console.log(age1, age2);
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2000, 'Neon'));
console.log(yearsUntilRetirement(1991, 'Bob'));