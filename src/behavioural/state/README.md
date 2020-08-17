# State - Behavioural (Comportamental)

## Intenção

*Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe*

---

## Sobre o State

Em vídeo: https://www.youtube.com/watch?v=tSTPS2oHDmw&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=33

O State é um padrão de projeto que permite que o estado de um objeto em contexto também possa ser representado como um objeto. Isso permite usarmos polimorfismo ao invés de condicionais para mudar o comportamento do objeto contexto baseando-se no seu estado atual.

### Problema

Imagine que você tem um pedido de um e-commerce (`Order`). Esse pedido pode estar em três estados de pagamento diferentes: Aprovado (`Approved`), Recusado (`Rejected`) ou Pendente (`Pending`).

Baseando-se no estado atual do pagamento do pedido, podemos adicionar algumas regras:

- O pedido só pode ser enviado ao cliente se seu estado de pagamento for aprovado
- Os estados podem transitar de aprovado para pendente e pendente para aprovado. Também de aprovado para recusado e pendente para recusado.
- Após recusado, o estado do pagamento não poderá mais ser alterado

Essas regras são apenas para exemplo, mas você pode perceber que mesmo sendo regras simples, poderíamos terminar com condicionais horríveis dentro da nossa classe `Order`, certo? Algo como:

```typescript
if (order.paymentState === 'Approved') {
  doSomething();
} else if (order.paymentState === 'Pending') {
  doAnotherThing();
} else if (order.paymentState === 'Rejected') {
  doAnotherThing();
}
```

E isso só tende a piorar de acordo com o aumento das regras. Além de quebrarmos o princípio do aberto/fechado, nosso código tende a ficar cada vez mais complexo.

### Solução - State

O State sugere que movamos o estado da classe `Order` para objetos de estado. Como Aprovado (`Approved`), Recusado (`Rejected`) ou Pendente (`Pending`).

Todos esses estados teriam uma interface em comum com métodos para aprovar, recusar ou mover o pagamento para pendente: `approvePayment(order: Order)`, `rejectPayment(order: Order)` e `waitPayment(order: Order)`. Além disso, também poderíamos adicionar métodos referentes aos estados, por exemplo, um método `shipOrder` também caberia na interface de estados.

Esses métodos se comportam de maneiras diferentes em cada uma das classes de estado concreto. Por exemplo: o método `shipOrder` só vai enviar o pedido se a classe de estado for `Approved`. Nas classes `Rejected` ou `Pending` o mesmo método pode solicitar o pagamento ou algo do tipo.

Além disso, os métodos também podem receber o próprio objeto de contexto via parâmetro ou construtor, dessa forma os objetos de estado também podem manipular dados do contexto. Por exemplo, na classe `Approved`, chamar o método `approvePayment(order: Order)` não precisaria fazer nada, mas o método `rejectPayment(order: Order)` deve trocar o estado atual de `Order` para `Rejected`.

Dessa forma, ao invés de condicionais estamos usando polimorfismo para mudar o comportamento dos objetos. Você pode escrever todo o código que descrevi acima sem o uso de nenhuma condicional.

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o State quando:

- o seu objeto pode se comportar de maneira diferente dependendo do seu estado atual
- você quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores dos seus campos

## Implementação

Veja o código e os diagramas dessa pasta para entender como o State é implementado.

## Consequências

O que é bom ou ruim no State:

**Bom:**
- desacopla a lógica de um estado da classe de contexto
- permite a criação de novos estados apenas adicionando novas classes
- elimina condicionais complexas da classe de contexto

**Ruim:**
- se você tem apenas poucas condicionais simples, aplicar este padrão pode deixar o seu código mais complexo do que o necessário