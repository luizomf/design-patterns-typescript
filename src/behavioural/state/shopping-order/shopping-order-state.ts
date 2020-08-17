export interface ShoppingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}
