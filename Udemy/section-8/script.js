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
function calcAge(birthYear){
    const age = 2037 - birthYear;
    // console.log(firstName);
    function printAge(){
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven';
            const output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            function add(a, b){
                return a + b;
            }
            console.log(millenial);
            // add(2,3);
            console.log(output);
        }
    }
    printAge();

    return age;
}
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();