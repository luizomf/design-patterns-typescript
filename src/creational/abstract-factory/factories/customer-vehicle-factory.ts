import { Customer } from '../customer/customer';
import { Vehicle } from '../../factory-method/vehicle/vehicle';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
