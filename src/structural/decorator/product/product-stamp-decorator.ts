import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (Estampada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
