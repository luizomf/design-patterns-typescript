import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
