import { CustomerBudget } from './customer-budget';

export abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}
