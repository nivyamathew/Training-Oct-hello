'use strict'
/*const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function (){
    console.log('Hey there');
    console.log(this);
};
Person.hey();*/


/*// Protoypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));*/

/*// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);*/

/*const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    },
};
console.log(account.latest);

account.latest =  50;
console.log(account.movements);*/

/*// class declaration
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;        
    }

    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);
    }
    get age(){
        return 2037 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes('')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }
    get fullName() {
        return this._fullName;
    }
    // static method
    static hey(){
        console.log('Hey there');
        console.log(this);
    }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__=== PersonCl.prototype);

jessica.greet();

const walter = new PersonCl('walter', 1965);
const account = { 
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
}
// get latest(){
//     return this.movements.slice(-1).pop();
// }

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthyear = 2002;
steven.calcAge(); 
console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();*/

/*// CODING CHALLENGE 1

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function (){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();*/

// class expression
// const PersonCl = class {}

// Class Declaration
/*class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Methods will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prortotype);

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();*/

/*// Coding Challenge 2

class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);*/
 

/*// Inheritance Between "classes": constructor Functions

const Person = function(firstName, birthYear){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};
const Student = function(firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(firstName, birthYear);
    this.course = course;
};
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
// mike.calcAge();
console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);*/

// Coding Challange 3

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function (){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.speed = speed
};
// }link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
};
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, 
    with a charge of ${this.charge}`);

}
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
