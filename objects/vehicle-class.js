'use strict';

class Vehicle {
  constructor(name){
    this.name = name;
    }
  drive() {return 'Moving Forward'};
  stop() { return 'Stopping';}
};

class Car extends Vehicle {
 constructor(wheel){
   this.wheel= '4';
 };
};

class Motorcycle extends Vehicle {
  constructor(wheel){
    this.wheel= '2';
  };
  wheelie() {return 'Wheee!'};
};

module.exports = Car;
module.exports = Motorcycle;