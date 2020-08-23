import { Food } from './food';
import { Cigarette } from './cigarette';
import { AlcoholicDrink } from './alcoholic-drink';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
