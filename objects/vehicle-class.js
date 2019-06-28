'use strict';

class Vehicle {
  constructor(name,wheel){
    this.name = name;
    this.wheel = wheel;
    }
  drive = () => 'Moving Forward';
  stop = () => 'Stopping'
}
class Car extends Vehicle {
 
}


module.exports = Car;