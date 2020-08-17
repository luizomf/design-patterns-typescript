import { ShoppingOrderState } from './shopping-order-state';
import { ShoppingOrder } from './shopping-order';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porque o pedido foi recusado.');
  }

  rejectPayment(): void {
    console.log(
      'Não posso recusar o pagamento porque o pedido já está recusado.',
    );
  }

  waitPayment(): void {
    console.log('Não posso mover para pendente porque o pedido foi recusado.');
  }

  shipOrder(): void {
    console.log('Não posso enviar um pedido com pagamento recusado.');
  }
}
