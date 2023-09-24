# `use-cases/errors`

## Função

Classes que representam erros específicos dentro do contexto das *use-cases*. Sua função é diferenciar os erros conforme cada situação, lançando-as dentro das *use-cases* para melhor performance das regras de negócio.

## Análise do Código

- `extendes Error`: classe pai.
- `constructor()`: um construtor é chamado quando uma nova instância da classe é criada.
- `super()`: inicializar a classe `Error` com uma mensagem de erro específica

 Dentro do construtor, chamamos o construtor da classe pai (ou seja, a classe Error) usando super(). O construtor da classe pai espera uma mensagem de erro como argumento, passando uma string como mensagem de erro padrão para esse tipo específico de erro. Isso significa que, quando uma instância é criada, ela terá automaticamente a associada a ela.

> Voltar para o [`index`](../../../index.md)
