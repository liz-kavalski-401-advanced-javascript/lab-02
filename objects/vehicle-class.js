'use strict';

class Vehicle {
  constructor(name){
    this.name = name;
    }
  drive = () => 'Moving Forward';
  stop = () => 'Stopping';
};

class Car extends Vehicle {
 constructor(wheel){
   this.wheel= 4;
 };
};

class Motorcycle extends Vehicle {
  constructor(wheel){
    this.wheel= 2;
  };
  wheelie= ()=> 'Wheee!';
};

module.exports = Car;
module.exports = Motorcycle;