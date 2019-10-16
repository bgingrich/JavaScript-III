/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - if this is used in the global scope, the value of this will be the console object.
* 2. Implicit Binding - when a function is called by a preceding dot, the object before the dot will be this.
* 3. New Binding -  using constructor function, this is the specific instance of the object that will be created and returned by the constructor function.
* 4. Explicit Binding - this is explicitly defined when using JS call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(hello) {
    console.log(this);
    return hello;
}
sayHello("Bonjour");

// Principle 2

// code example for Implicit Binding

let myCar = {
  name: 'Telluride',
  make: 'KIA',
  car: function(){
    console.log(this.name);
  }
}
myCar.car();

// Principle 3

// code example for New Binding

function twoStudents(answer) {
    this.question = '1 + 1? ='
    this.answer = answer;
    this.raisehand = function() {
        console.log(this.question + this.answer);
        console.log(this);
    };
}

const bobby = new twoStudents('2');
const jimmy = new twoStudents('4');

jimmy.raisehand();
bobby.raisehand();

// Principle 4

// code example for Explicit Binding

function car(){
  console.log(this.make);
}
let hisCar = {
  name: 'Escalade',
  make: 'Cadillac'
}
let herCar = {
  name: 'S550',
  make: 'Mercedes'
}
car.call(hisCar);
car.call(herCar);


