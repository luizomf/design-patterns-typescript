import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectPayment(); // Daqui não altera mais o estado
order.approvePayment(); // n
order.waitPayment(); // n
order.approvePayment(); // n
order.shipOrder(); // n
