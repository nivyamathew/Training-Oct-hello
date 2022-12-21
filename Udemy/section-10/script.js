'use strict';
/*const bookings = []
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){

    numPassengers = numPassengers || 1;
    price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);*/

/*const flight = 'LH234';
const nivya = {
    name: 'Nivya MAthew',
    passport: 2345678190,    
}
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Ms.' + passenger.name;
    if(passenger.passport === 2345678190) {
    alert('Checked in');
} else {
    alert('Wrong passport!');
}
};
// checkIn(flight, nivya);
// console.log(flight);
// console.log(nivya)
// const flightNum = flight;
// const passenger = nivya
const newPassport = function(person) {
    person.passport = MAth.trunc(Math.random() * 100000000);
}
newPassport(nivya);
checkIn(flight, nivya);*/

/*const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function(str, fn) {
    console.log(`Original string: A${str}`);
console.log(`Transformed string: ${fn(str)}`);
console.log(`Transformed by : ${fn.name}`); 
}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
const high5 = function(){
    console.log('👋');
}
document.body.addEventListener('click', high5)
['Nivya','Anu','Sayooj'].forEach(high5);*/
 /*const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
 }
 const greeterHey = greet('Hey');
 greeterHey('Jonas');
 greeterHey('Steven');
 greet('Hello')('Jonas');
 const greetArr = greeting => name => console.log(`${greeting} ${name}`);
 greet('Hello')('Jonas');
 greetArr('Hi')('Jonas');*/
/* const indigo = {
    airline: 'Indigo',
    iataCode: 'IN',
    bookings: [],
    // book: function
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight:`${this.iataCode}${flightNum}, name`});
    }
 };
 indigo.book(239, 'Nivya Mathew');
 indigo.book(635,'John Smith');
 const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings:[],
 };
 const book = indigo.book;
//  book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(indigo, 239, 'Mary Cooper');
console.log(indigo);
const swiss = {
    airline:  'Swiss Air Lines',
    iataCode: 'LX',
    bookings:[],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss,  ...flightData);

// Bind method 
const bookEW = book.bind(eurowings);
const bookLH = book.bind(indigo);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Willliams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nivya Mathew');
bookEW23('Martha Cooper');

// With EVent Listeners
indigo.planes = 300;
indigo.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy')
.addEventListener('click', indigo.buyPlane);

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(null, 0.23));

const addVAT = addTax.bind(null, 0.23);
 const addVat = addTax.bind(null, 0.23);
console.log(addVAT(200));
console.log(addVAT(23)); 
const addTaxRate =  function(rate) {
    return function(value){
    return value + value * rate}
    }*/
   /* const poll = {
        question: 'What is your favourite programming language?',
        options:['0: JavaScript', '1:Python', '2: Rust', '3: c++'],
        answers: new Array(4).fill(0),
        registerNewAnswer(){
            // const answer
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}('\n(Write option number')`))
        
            console.log(answer);
            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
            this.displayResults();
            this.displayResults('string');
        },
        displayResults(type = 'array'){
            if(type === 'array'){
            console.log(this.answers);
        } else if (type === 'string'){
            console.log(`Poll results are ${this.answers.join('.')}`)
        }
    }
    };
    // poll.registerNewAnswer();
    document.querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
    poll.displayResults.call({answers: [5, 2 ,3]},'string');
    poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
    poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});*/

/*const runOnce = function(){
    console.log('This will never run again');
};
runOnce();
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate)
(() => console.log('This will ALSO never run again'))
();

 {
    const isPrivate = 23;
    var notPrivate = 46;
 }
//  console.log(isPrivate);
 console.log(notPrivate);*/

 /*const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
 }

 const booker = secureBooking();   
   booker();
   booker();
   booker();
   booker();
   booker();
   console.dir(booker);*/
/*// eg 1
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}
const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
}
g();
f();
// Re-assigning f function
h();
f();
console.dir(f);

// eg 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;
    setTimeout(function(){(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);},wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3)

// setTimeout(function(){
//     console.log('TIMER')
// })*/
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();
