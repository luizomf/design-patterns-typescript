# Memento - Behavioural (Comportamental)

## Intenção

*Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.*

---

## Sobre o Memento

Em vídeo: https://www.youtube.com/watch?v=crmLq8_FtLc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=31

O Memento é um padrão de projeto que visa delegar a tarefa de salvar e restaurar o estado de um objeto para outro chamado de `Caretaker` (ou zelador). Isso seria algo bem simples de se fazer, porém precisamos tomar cuidado com o encapsulamento dos dados.

Por exemplo, imagine um editor de imagens (`ImageEditor`) que tem os campos privados `filePath` e `fileFormat` (apenas para simplificação do exemplo). Não seria possível delegar para outro objeto zelador (`Caretaker`) a tarefa de salvar ou restaurar o estado porque este objeto não teria acesso aos campos privados do `ImageEditor`. Uma solução possível seria tornar os campos do `ImageEditor` públicos ao invés de privados, porém estaríamos violando o encapsulamento.

Para solucionar este problema, o Memento diz que devemos ter métodos públicos para backup dentro do `ImageEditor`, como `save()` (para salvar o estado atual) e `restore()` (para restaurar um estado antigo). Com isso podemos delegar a tarefa de gerenciar o estado do `ImageEditor` para o `CareTaker` sem violar o encapsulamento de dados.

O `CareTaker` precisa conhecer o `ImageEditor`. Porém, ele não deve expor ou alterar nenhum dado do estado. Ele poderá salvar snapshots do `ImageEditor` em uma estrutura de dados qualquer ou restaurá-los quando necessário usando os métodos `save()` e `restore()` do próprio `ImageEditor`.

Você pode usar quaisquer artifícios da linguagem de programação escolhida ou interfaces para prevenir que o `CareTaker` tenha acesso ou manipule o estado do `ImageEditor`. O importante aqui é não violar o encapsulamento e manter consistência nos dados salvos e ou restaurados.

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o Memento quando:

- você quer ter a possibilidade de salvar e restaurar o estado atual de um objeto sem violar o encapsulamento
- você deseja implementar a função "desfazer" e "refazer" no seu sistema


## Implementação

Veja o código e os diagramas dessa pasta para entender como o Memento é implementado.

## Consequências

O que é bom ou ruim no Memento:

**Bom:**
- desacopla a responsabilidade de tomar conta do backup da classe original
- é fácil salvar e restaurar um backup de uma classe

**Ruim:**
- quanto mais backups, maior o consumo de memória da sua aplicação
- as classes zeladoras precisam acompanhar as mudanças nas classes originadoras
- pode ser desafiador garantir o encapsulamento em algumas linguagens de programação