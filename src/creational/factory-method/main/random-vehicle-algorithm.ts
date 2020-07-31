import { Vehicle } from '../vehicle/vehicle';
import { CarFactory } from '../factories/car-factory';
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle = bicycleFactory.getVehicle('Bicycle');
  const cars = [car1, car2, bicycle];
  return cars[randomNumbers(cars.length)];
}
