'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

const VehicleClass= require ('./vehicle-class');
// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

let truck = new VehicleClass.Car('Big Truck');
console.log(truck.name, truck.drive(),truck.stop());

let bike = new VehicleClass.Motorcycle('Big Bike');
console.log(bike.name, bike.wheelie(), bike.stop());
// Your code here ....