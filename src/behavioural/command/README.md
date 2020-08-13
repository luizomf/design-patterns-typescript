# Command - Behavioural (Comportamental)

## Intenção

*Encapsular uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.*

---

## Sobre o Command

Em vídeo: https://www.youtube.com/watch?v=WwDnYXr7jqk&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=29

Command é um padrão de projeto que tem a intenção de encapsular um comando diretamente em um objeto. Na verdade é um padrão bem simples, por ser a versão orientada a objetos para funções de callback, ou seja, se você conhece funções de callback, conhece o padrão command.

Por exemplo, se você tem um botão na sua aplicação e deseja que esse botão mande solicitações (comandos) para outro objeto (digamos um widget na tela), ao invés de encaminhar a chamada diretamente para o widget, criaríamos um objeto específico relacionado com este comando. 

Suponha que a classe `DisplayMessageCommand`, fosse o nosso comando. Essa classe precisa ter um campo para fazer referência ao *receiver* (o widget). Nesse caso, nosso botão encaminha uma solicitação ao `DisplayMessageCommand`, que conhece a classe do widget, que sabe como executar o comando. Mais ou menos assim:

```
Button (invoker) -> DisplayMessageCommand (command) -> Widget (receiver)
```

Perceba que `invoker` é quem solicita a ação, no nosso caso o botão, `command` é o nosso comando e receiver é o objeto que sabe executar a ação (nosso widget). O `command` funciona como uma função de callback, porém aqui estamos falando de programação orientada a objetos, então ele é uma classe normal (um objeto).

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o Command quando:

- você quer desacoplar o objeto que envia a solicitação do objeto que a receberá 
- você quer tratar um comando como um objeto (com a possibilidade de armazenar, agendar, enfileirar,  fazer log, agendar execuções, ou fazer qualquer coisa que pode ser feita com um objeto)
- você quer permitir que solicitações possam ser feitas e desfeitas


## Implementação

Veja o código e os diagramas dessa pasta para entender como o Command é implementado.

## Consequências

O que é bom ou ruim no Command:

**Bom:**
- você pode criar comandos simples e complexos (ou até compostos de outros comandos)
- você pode implementar fazer e desfazer
comandos são objetos normais, portanto podem fazer tudo que objetos normais fazem
- desacopla o objeto que envia do objeto que recebe a solicitação

**Ruim:**
- Muitas classes podem tornar o sistema mais complexo.
