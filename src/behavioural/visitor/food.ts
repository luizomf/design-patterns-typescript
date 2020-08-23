import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
