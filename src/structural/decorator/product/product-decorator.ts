import { ProductProtocol } from './product-protocol';

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
