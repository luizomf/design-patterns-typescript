import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
