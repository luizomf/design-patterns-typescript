import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
