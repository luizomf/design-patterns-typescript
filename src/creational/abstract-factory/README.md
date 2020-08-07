# Abstract Factory - Creational (Criação)

## Intenção

*Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.*

---

## Sobre o Abstract Factory

Em vídeo: https://www.youtube.com/watch?v=UPSuHqNsNs4&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=12

O Abstract Factory é usado para garantir que uma família de produtos relacionados ou dependentes trabalhem sempre juntos (*veja aplicabilidade para mais casos de uso*).  

Por exemplo: imagine que está criando um sistema de interfaces gráficas que deva funcionar em Linux, Windows e Mac. É natural termos várias classes representando elementos como Janela, Botão, Input e assim por diante. Também é natural usarmos composição entre os elementos, já que um botão pode estar dentro de uma janela ou formulário (não é um requisito para o padrão, mas pode acontecer). Além disso, os sistemas operacionais também precisam de implementações diferentes das classes de interface gráfica.  

Nesse caso teríamos famílias de classes de elementos gráficos separadas por grupos de sistemas operacionais (Windows, Linux, Mac, e assim por diante). Deixe-me especificar isso usando nomes de classes e talvez você entenda melhor meu ponto de vista:

- Nomes de classes para Windows: 
  - UIWindows
  - ButtonWindows
  - InputWindows
  - ...
- Nomes de classes para Linux: 
  - UILinux
  - ButtonLinux
  - InputLinux
  - ...
- Nomes de classes para Mac: 
  - UIMac
  - ButtonMac
  - InputMac
  - ...

O Abstract Factory ajuda a garantir que classes de mesma família trabalhem sempre juntas. Você não quer que classes `ButtonWindows` se misturem com `UILinux`, não é? Por isso focamos em família de objetos relacionados ou dependentes.

No meu exemplo, poderíamos ter uma fábrica abstrata (`UIFactory`) com os métodos abstratos `createUI`, `createButton` e `createInput`. Agora podemos implementar fábricas concretas que estendem `UIFactory` e implementam esses métodos, seriam elas: `UIWindowsFactory`, `UILinuxFactory` e `UIMacFactory`. Cada fábrica concreta fica responsável pode retornar objetos da sua própria família.

Imagine essa hierarquia descrita assim (se preferir diagramas, veja a pasta diagramas):

- `UIFactory` (fábrica abstrata)
  - `UIWindowsFactory` (fábrica concreta): 
    - `createUI(): UI` -> `UIWindows`
    - `createButton(): Button` -> `ButtonWindows`
    - `createInput(): Input` -> `InputWindows`
    - ...
  - `UILinuxFactory` (fábrica concreta): 
    - `createUI(): UI` -> `UILinux`
    - `createButton(): Button` -> `ButtonLinux`
    - `createInput(): Input` -> `InputLinux`
    - ...
  - `UIMacFactory` (fábrica concreta): 
    - `createUI(): UI` -> `UIMac`
    - `createButton(): Button` -> `ButtonMac`
    - `createInput(): Input` -> `InputMac`
    - ...

A única coisa que também precisamos, mas que eu não mencionei até aqui é uma interface em comum para todos os produtos finais. Todos os produtos devem seguir a mesma interface. 

No meu exemplo as interfaces de produtos seriam: `UI`, `Button` e `Input` (mencionei isso com *`: Interface`* logo após a assinatura dos métodos no exemplo acima).

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o padrão Abstract Factory quando:

- um sistema deve ser independente de como seus produtos são criados, compostos ou representados
- um sistema deve ser configurado como um produto de família de múltiplos produtos
- uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
- você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações

## Implementação - Teoria

Observação importante: objetos criados por um fábricas tendem a ser chamados de "Product" (produto). Veja os diagramas na pasta "diagramas" para melhor entendimento.

1. **Crie uma interface em comum para todas as factories concretas:** essa interface define métodos que retornam famílias de produtos diferentes em um nível mais abstrato. Esses produtos podem colaborar entre si caso necessário. Esses métodos devem ser implementados por todas as fábricas concretas.
2. **Crie fábricas concretas:** essas fábricas implementam os métodos da fábrica abstrata e retornam os produtos concretos. A assinatura dos métodos nas fábricas concretas retornam a mesma família da fábrica abstrata, porém o retorno são produtos concretos que implementam a interface da família de produtos retornados pela fábrica abstrata. 
3. **Crie interfaces correspondentes para cada família de produto:** essas interfaces definem os tipos dos objetos a serem retornados pela fábrica abstrata. Essas interfaces são os retornos dos métodos fábrica na fábrica abstrata.
4. **Crie os produtos concretos:** crie os produtos concretos que implementam as interfaces de produtos. Note que produtos de interfaces diferentes podem colaborar entre si por composição. Esses produtos são os retornos dos métodos fábrica nas fábricas concretas.

## Consequências

O que é bom ou ruim no Abstract Factory:

**Bom:**
- Os produtos sempre serão compatíveis entre si
- Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos
- Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

**Ruim:**
- Muitas classes e maior complexidade será introduzida no código
