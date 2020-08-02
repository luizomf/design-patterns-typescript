# Abstract Factory - Creational (Criação)

## Intenção

*Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.*

---

## Sobre o Abstract Factory

O Abstract Factory é usado para garantir que uma família de produtos relacionados ou dependentes trabalhem sempre juntos (*veja aplicabilidade para mais casos de uso*).  

Por exemplo, imagine que está criando um sistema de interfaces gráficas que deva funcionar em Linux, Windows e Mac. É natural termos várias classes representando elementos como Janela, Botão, Input e assim por diante. Também é natural usarmos composição entre os elementos, já que um botão pode estar dentro de uma janela ou formulário. Além disso, os sistemas operacionais também precisam de implementações diferentes das classes de interface gráfica.  

Nesse caso, temos uma separação de famílias de objetos. Exemplo:

- UIWindows, ButtonWindows, InputWindows, etc...
- UILinux, ButtonLinux, InputLinux, etc...
- UIMac, ButtonMac, InputMac, etc...

O Abstract Factory ajuda a garantir que classes de mesma família trabalhem sempre juntas. Você não quer que classes `ButtonWindows` se misturem com `UILinux`, não é? Por isso focamos em família de objetos relacionados ou dependentes.

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

Observação importante: objetos criados por um fábricas tendem a ser chamados de "Product" (produto)

1. **Crie uma interface em comum para todas as factories concretas:** essa interface define métodos que retornam famílias de produtos diferentes em um nível mais abstrato. Esses produtos podem colaborar entre si caso necessário.
2. **Crie fábricas concretas:** essas fábricas implementam os métodos da fábrica abstrata e retornam os produtos concretos. A assinatura dos métodos nas fábricas concretas retornam a mesma família da fábrica abstrata, porém o retorno são produtos concretos que implementam essa interface. 
3. **Crie interfaces correspondentes para cada família de produto:** essas interfaces definem os tipos dos objetos a serem retornados pela fábrica abstrata e fábricas concretas.
4. **Crie os produtos concretos:** crie os produtos concretos que implementam as interfaces de produtos. Note que produtos de interfaces diferentes podem colaborar entre si.

## Consequências

O que é bom ou ruim no Abstract Factory:

**Bom:**
- working

**Ruim:**
- working
