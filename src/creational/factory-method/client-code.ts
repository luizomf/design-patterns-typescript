import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
