# Anotações importantes

> Voltar para o [`index`](./index.md)

## Sumário

- [Anotações importantes](#anotações-importantes)
  - [Sumário](#sumário)
  - [Dicas](#dicas)
  - [Conceitos](#conceitos)
    - [O que é SOLID?](#o-que-é-solid)
    - [O que é o PRISMA?](#o-que-é-o-prisma)
    - [O que é Docker](#o-que-é-docker)
    - [O que é DockerHub?](#o-que-é-dockerhub)
    - [O que é um *controller*?](#o-que-é-um-controller)
    - [O que é um hash?](#o-que-é-um-hash)
    - [O que é *use case*?](#o-que-é-use-case)
    - [O que é um Design Pattern?](#o-que-é-um-design-pattern)
    - [Como funciona o Repository Pattern?](#como-funciona-o-repository-pattern)
    - [Como funciona o Factory Pattern?](#como-funciona-o-factory-pattern)
    - [O que é Princípio da Inversão de Dependência (DIP)?](#o-que-é-princípio-da-inversão-de-dependência-dip)
    - [O que são testes E2E?](#o-que-são-testes-e2e)
    - [O que é JWT?](#o-que-é-jwt)
    - [O que é e como funciona o Refresh Token?](#o-que-é-e-como-funciona-o-refresh-token)
    - [O que é e como funciona um RBAC?](#o-que-é-e-como-funciona-um-rbac)
    - [O que é e como funciona um `In-Memory Test Databases`](#o-que-é-e-como-funciona-um-in-memory-test-databases)
    - [O que é *coverage* de testes?](#o-que-é-coverage-de-testes)
    - [O que é Test Driven Development (TDD)?](#o-que-é-test-driven-development-tdd)
    - [O que é Fórmula de Haversine](#o-que-é-fórmula-de-haversine)
    - [O que é Mocking?](#o-que-é-mocking)
    - [O que é Basic Auth?](#o-que-é-basic-auth)
      - [Workflow](#workflow)
      - [Segurança](#segurança)
      - [Quando utilizar?](#quando-utilizar)

## Dicas

- O arquivo `.npmrc` é usado para configurar as opções do npm, o gerenciador de pacotes JavaScript, em um projeto específico. A propriedade `save-exact` não é uma configuração direta do `.npmrc`, mas sim uma opção que pode ser usada com comandos npm específicos, como `npm install`.
- o nome dos relacionamentos nos schemas do prisma estão em *camelcase* para padronizar o código em Javascript
- a função do pacote `vite-tsconfig-paths` é reconhecer o símbolo do `@` dentro das configurações de `path` no `tscongfig.json`
- A partir da versão `0.31.0` do [Vitest UI](https://vitest.dev/guide/coverage.html#vitest-ui) é possível exibir o relatório de *covarage* incluindo a flag `--coverage.enabled=true` junto ao script `vitest --ui`

## Conceitos

### O que é SOLID?

SOLID é um acrônimo que representa cinco princípios de design de software orientado a objetos que foram formulados para criar código mais legível, flexível e fácil de manter. Esses princípios foram introduzidos por Robert C. Martin e são amplamente utilizados no desenvolvimento de software para promover a qualidade do código e a robustez das aplicações. Cada letra do acrônimo SOLID representa um princípio específico:

1. **S - Princípio da Responsabilidade Única (Single Responsibility Principle - SRP)**: Este princípio estabelece que uma classe deve ter apenas uma razão para mudar. Em outras palavras, uma classe deve ter uma única responsabilidade ou tarefa, e qualquer alteração nessa classe deve ser motivada por uma única razão. Isso ajuda a manter o código modular e facilita a manutenção.

2. **O - Princípio do Aberto/Fechado (Open/Closed Principle - OCP)**: O OCP afirma que as entidades de software (como classes, módulos ou funções) devem estar abertas para extensão, mas fechadas para modificação. Isso significa que você deve ser capaz de estender o comportamento de uma classe sem alterar seu código-fonte. Isso promove a reutilização de código e evita a introdução de bugs em partes existentes do sistema.

3. **L - Princípio da Substituição de Liskov (Liskov Substitution Principle - LSP)**: Este princípio é baseado no conceito de herança e afirma que as classes derivadas (subclasses) devem ser substituíveis por suas classes base (superclasses) sem afetar a integridade do programa. Em outras palavras, se uma classe base possui um método específico, suas subclasses devem ser capazes de substituir esse método sem quebrar a funcionalidade.

4. **I - Princípio da Segregação de Interfaces (Interface Segregation Principle - ISP)**: O ISP sugere que as interfaces de uma classe devem ser segregadas em interfaces menores e mais específicas, em vez de ter uma única interface grande. Isso evita que as classes implementem métodos que não são relevantes para elas, promovendo uma melhor coesão e facilitando a manutenção.

5. **D - Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP)**: Este princípio destaca a importância de depender de abstrações em vez de implementações concretas. Em outras palavras, os módulos de alto nível não devem depender de módulos de baixo nível diretamente; ambos devem depender de abstrações. Isso permite maior flexibilidade e facilidade de troca de implementações sem afetar o código de alto nível.

Esses princípios SOLID são diretrizes valiosas para desenvolvedores de software que desejam criar sistemas mais flexíveis, extensíveis e fáceis de manter. Eles são amplamente aplicados em programação orientada a objetos, mas muitos de seus conceitos podem ser adaptados para outros paradigmas de programação também.

> voltar para o [`sumário`](#sumário)

### O que é o PRISMA?

O Prisma é uma ferramenta de mapeamento objeto-relacional (ORM) para desenvolvimento de aplicativos em Node.js e TypeScript. Um ORM é uma biblioteca que facilita a interação com bancos de dados relacionais, como MySQL, PostgreSQL e SQLite, permitindo que os desenvolvedores utilizem uma abordagem mais orientada a objetos para manipular dados em vez de escrever consultas SQL diretamente.

Aqui estão algumas características e funcionalidades principais do Prisma:

1. **Modelagem de Dados Declarativa**: O Prisma permite que você defina seus modelos de dados de forma declarativa usando uma linguagem específica do Prisma (Prisma Schema). Você descreve as entidades do seu banco de dados, seus campos e relacionamentos em um arquivo Prisma Schema.

2. **Geração de Código**: Com base no Prisma Schema, o Prisma gera automaticamente código TypeScript para suas operações de banco de dados, incluindo CRUD (Create, Read, Update, Delete) e consultas personalizadas. Isso elimina a necessidade de escrever manualmente consultas SQL.

3. **Tipagem Segura**: O Prisma oferece forte tipagem estática para os seus modelos de dados, garantindo que você evite erros de tipo em tempo de compilação. Isso torna mais fácil detectar erros em tempo de desenvolvimento, reduzindo os erros em tempo de execução.

4. **Consultas Encadeadas**: O Prisma permite que você construa consultas complexas de forma encadeada, o que torna a construção de consultas mais legível e fácil de manter.

5. **Migrações de Banco de Dados**: O Prisma também oferece suporte para migrações de banco de dados, permitindo que você faça alterações na estrutura do banco de dados de forma controlada e versionada.

6. **Suporte a Diversos Bancos de Dados**: O Prisma suporta vários sistemas de gerenciamento de banco de dados, incluindo PostgreSQL, MySQL, SQLite e SQL Server.

7. **Integração com Frameworks**: Você pode usar o Prisma com diversos frameworks e bibliotecas populares, como Express.js, Fastify e Nest.js.

Em resumo, o Prisma ORM é uma ferramenta poderosa para desenvolvedores que desejam simplificar a interação com bancos de dados relacionais em seus projetos Node.js e TypeScript, tornando o desenvolvimento de aplicativos mais eficiente e seguro.

> voltar para o [`sumário`](#sumário)

### O que é Docker

Docker é uma plataforma de software que permite criar, implantar e executar aplicativos em contêineres virtuais. Ele permite que as aplicações e seus componentes sejam empacotados em um contêiner isolado e portátil, que pode ser executado em qualquer ambiente que tenha o Docker instalado, sem a necessidade de instalar dependências adicionais ou fazer grandes configurações. Com o Docker, é possível ter ambientes de desenvolvimento, teste e produção consistentes, seguros e escaláveis, aumentando a eficiência e a produtividade do desenvolvimento de software.

### O que é DockerHub?

O DockerHub é um serviço de registro de contêineres na nuvem que permite aos desenvolvedores armazenar, compartilhar e distribuir contêineres Docker. O Docker é uma plataforma de virtualização de contêineres que permite que os desenvolvedores empacotem aplicativos e suas dependências em contêineres isolados e portáteis.

O DockerHub desempenha um papel importante no ecossistema Docker, oferecendo os seguintes recursos:

1. Repositório de Contêineres: No DockerHub, você pode criar repositórios públicos ou privados para armazenar suas imagens de contêineres. Isso permite que você compartilhe facilmente seus contêineres com outros desenvolvedores ou equipes de desenvolvimento.

2. Recursos de Colaboração: Você pode convidar outros desenvolvedores para colaborar em seus repositórios, permitindo que eles contribuam com imagens de contêineres ou acessem imagens compartilhadas.

3. Imagens Pré-Construídas: O DockerHub oferece um vasto catálogo de imagens de contêineres pré-construídas que você pode usar como base para seus próprios projetos. Isso economiza tempo e esforço, pois você não precisa criar todas as imagens do zero.

4. Integração com o Docker: O Docker é frequentemente usado em conjunto com o DockerHub. Você pode facilmente fazer push e pull de imagens de contêineres entre sua máquina local e o DockerHub, tornando o processo de distribuição de contêineres mais eficiente.

5. Automação: O DockerHub suporta integração com sistemas de automação e ferramentas de CI/CD (Integração Contínua/Entrega Contínua), o que facilita a implantação automatizada de contêineres em diferentes ambientes.

6. Segurança e Políticas de Acesso: Você pode configurar políticas de acesso e segurança para controlar quem pode acessar e modificar seus repositórios de contêineres, garantindo a conformidade e a segurança de suas imagens.

Em resumo, o DockerHub é uma plataforma essencial para a comunidade de desenvolvedores que utilizam contêineres Docker, pois oferece um local centralizado para armazenar, compartilhar e distribuir imagens de contêineres, simplificando o processo de desenvolvimento e implantação de aplicativos baseados em contêineres.

> voltar para o [`sumário`](#sumário)

### O que é um *controller*?

Um "controller" (controlador) no contexto de desenvolvimento de software para o back-end é uma parte fundamental de uma arquitetura de aplicativo web ou sistema de software. Ele desempenha um papel importante na organização e na gestão das requisições HTTP que chegam ao servidor e na coordenação das operações necessárias para processar essas requisições.

A principal função de um controller no back-end é receber as solicitações HTTP dos clientes (como navegadores web, aplicativos móveis ou outros sistemas) e direcioná-las para o código apropriado que irá processar essas requisições. Isso facilita a separação de preocupações em um aplicativo, tornando-o mais modular e mais fácil de manter.

Aqui estão algumas das responsabilidades típicas de um controller no back-end:

1. Roteamento: O controller decide qual ação ou função do aplicativo deve ser executada com base na rota da URL ou nos parâmetros da requisição HTTP. Isso é frequentemente feito por meio de um sistema de roteamento que mapeia URLs para controladores e ações correspondentes.

2. Processamento de dados: O controller pode ser responsável por validar e processar os dados enviados nas requisições. Isso pode incluir a validação de formulários, a manipulação de dados de entrada e a preparação de dados para serem usados nas operações seguintes.

3. Coordenação de modelos e visualizações: Em muitas arquiteturas de aplicativos, o controller é responsável por chamar modelos (representando os dados) e visualizações (representando a apresentação) para criar uma resposta a ser enviada de volta ao cliente. Isso geralmente está associado a arquiteturas MVC (Model-View-Controller) ou arquiteturas semelhantes.

4. Autenticação e autorização: O controller pode lidar com questões de segurança, como autenticação de usuários e autorização para acessar determinados recursos ou ações no aplicativo.

5. Manipulação de erros: Os controllers frequentemente lidam com erros e exceções que podem ocorrer durante o processamento da requisição, como erros de validação de dados ou erros internos do servidor. Eles podem retornar respostas de erro apropriadas quando necessário.

6. Comunicação com o modelo e a camada de dados: Em muitos casos, o controller se comunica com a camada de modelo (que representa a lógica de negócios) para buscar ou persistir dados no banco de dados.

No geral, um controller no back-end atua como um intermediário entre as requisições HTTP e o código de lógica de negócios do aplicativo, garantindo que as solicitações sejam tratadas de maneira adequada e que as respostas sejam geradas e enviadas de volta aos clientes de acordo com as regras de negócios e os requisitos do aplicativo.

> voltar para o [`sumário`](#sumário)

### O que é um hash?

Um hash é uma função matemática que transforma um conjunto de dados em um valor de comprimento fixo. Esse valor resultante é geralmente uma sequência de números e letras, e é único para cada conjunto de dados de entrada. O objetivo principal de uma função de hash é criar uma representação única e "digitalmente impressa" de um conjunto de dados que possa ser usado para uma variedade de propósitos, como indexação, pesquisa e verificação de integridade dos dados.

Aqui estão algumas características e usos comuns dos hashes:

1. **Tamanho Fixo**: Os hashes têm um tamanho fixo, independentemente do tamanho dos dados de entrada. Isso significa que uma grande quantidade de dados pode ser resumida em um valor de hash relativamente curto.

2. **Determinístico**: A mesma entrada sempre produzirá o mesmo hash. Isso é fundamental para a confiabilidade do processo de hash.

3. **Unidirecional**: É difícil ou impossível (dependendo do algoritmo de hash) reverter um valor de hash para obter os dados originais. Isso fornece uma camada adicional de segurança.

4. **Colisões**: Embora o objetivo seja que cada entrada gere um hash único, colisões (duas entradas diferentes que produzem o mesmo hash) podem ocorrer em casos raros, dependendo do algoritmo de hash utilizado. Portanto, algoritmos de hash são projetados para minimizar a probabilidade de colisões.

Usos comuns de hashes incluem:

1. **Segurança de Senha**: Senhas geralmente não são armazenadas em texto simples, mas sim como hashes no banco de dados. Quando um usuário insere uma senha, o sistema cria um hash da senha inserida e a compara com o hash armazenado no banco de dados.

2. **Verificação de Integridade de Dados**: Os hashes são usados para verificar se os dados foram corrompidos durante a transmissão ou armazenamento. Se o hash dos dados recebidos for o mesmo que o hash original, os dados são considerados íntegros.

3. **Armazenamento de Dados**: Em estruturas de dados como tabelas de dispersão, os hashes são usados para indexar e buscar informações rapidamente.

4. **Criptografia**: Em algoritmos criptográficos, os hashes desempenham um papel importante na criação de chaves de sessão seguras, autenticação e muito mais.

5. **Verificação de Integridade de Arquivos**: Muitas vezes, as organizações fornecem hashes para downloads de arquivos para que os usuários possam verificar se os arquivos foram baixados corretamente e não foram adulterados.

Existem vários algoritmos de hash amplamente utilizados, como MD5, SHA-1, SHA-256, entre outros. No entanto, devido a vulnerabilidades identificadas, algoritmos mais antigos como MD5 e SHA-1 não são mais considerados seguros para aplicações críticas de segurança, e é recomendável o uso de algoritmos mais seguros, como SHA-256 ou SHA-3, para fins de segurança atualmente.

O pacote `bcryptjs` é comumente usado para gerar hashes seguros de senhas em aplicativos Node.js. Aqui está um exemplo de código para gerar um hash de senha usando `bcryptjs`:

```javascript
const bcrypt = require('bcryptjs');

const senhaOriginal = 'minhaSenhaSuperSecreta';

// Gerar um hash de senha
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(senhaOriginal, salt, (err, hash) => {
    if (err) {
      console.error('Erro ao gerar o hash da senha:', err);
    } else {
      console.log('Senha original:', senhaOriginal);
      console.log('Hash da senha:', hash);
      
      // Agora você pode armazenar o "hash" no banco de dados em vez da senha original
    }
  });
});
```

Neste exemplo:

1. Importamos o pacote `bcryptjs`.
2. Definimos a senha original que queremos hash.
3. Usamos `bcrypt.genSalt` para gerar um "sal" aleatório, que é adicionado à senha antes de gerar o hash. O número `10` é o custo do processo de hash, que determina o número de iterações usadas. Valores mais altos tornam o processo de hash mais seguro, mas também mais lento.
4. Usamos `bcrypt.hash` para gerar o hash da senha original usando o sal gerado e o custo especificado. O resultado é o hash da senha, que pode ser armazenado em um banco de dados.

Ao fazer login, você pode usar o mesmo processo para gerar um hash da senha inserida pelo usuário e compará-lo com o hash armazenado no banco de dados para autenticar o usuário. O `bcryptjs` cuida de verificar a senha com o sal apropriado e as iterações, tornando o processo seguro e eficaz.

> voltar para o [`sumário`](#sumário)

### O que é *use case*?

Em programação e engenharia de software, um "caso de uso" (use case, em inglês) é uma técnica que ajuda a descrever como um sistema ou software se comporta em resposta a diferentes interações ou eventos do usuário. Os casos de uso são uma parte importante do processo de especificação de requisitos e design de software. Eles ajudam a capturar e documentar os requisitos funcionais de um sistema de uma maneira que seja compreensível tanto para desenvolvedores quanto para clientes ou stakeholders.

A principal ideia por trás dos casos de uso é identificar e descrever as principais funcionalidades ou comportamentos de um sistema a partir da perspectiva do usuário. Cada caso de uso descreve uma interação específica entre um usuário (que pode ser um humano ou outro sistema) e o sistema em questão. Isso inclui as ações que o usuário realiza e as respostas ou resultados esperados do sistema.

Geralmente, um caso de uso é documentado em um formato que inclui os seguintes elementos:

1. Nome do Caso de Uso: Um nome descritivo que identifica o caso de uso de forma única.

2. Ator(es): Indica quem está interagindo com o sistema (por exemplo, um cliente, um administrador, um sistema externo, etc.).

3. Descrição: Uma breve descrição do que o caso de uso faz e por que ele é importante para o sistema.

4. Pré-condições: Condições que devem ser verdadeiras antes que o caso de uso possa ser iniciado. Por exemplo, um usuário deve estar autenticado antes de acessar sua conta bancária online.

5. Fluxo Principal: Descreve as etapas sequenciais do caso de uso, incluindo as ações do usuário e as respostas do sistema. Isso ajuda a ilustrar como o sistema se comporta em resposta a uma interação específica.

6. Fluxos Alternativos: Caso haja desvios ou caminhos alternativos no caso de uso, eles são documentados aqui.

7. Pós-condições: As condições que devem ser verdadeiras após a conclusão bem-sucedida do caso de uso.

Os casos de uso são uma ferramenta valiosa para comunicar os requisitos de um sistema de maneira clara e concisa, permitindo que desenvolvedores e stakeholders entendam as funcionalidades esperadas e como elas se relacionam com as necessidades do usuário. Eles também podem ser usados como base para testes de aceitação, ajudando a verificar se o sistema atende aos requisitos especificados pelos casos de uso.

> voltar para o [`sumário`](#sumário)

### O que é um Design Pattern?

Um design pattern (padrão de design) em programação é uma solução reutilizável e geral para um problema comum que ocorre durante o desenvolvimento de software. Os design patterns são diretrizes ou modelos que ajudam os desenvolvedores a resolver problemas de forma eficaz, seguindo as melhores práticas de design e arquitetura de software. Eles representam uma abordagem testada e comprovada para lidar com desafios específicos de projeto de software.

Os design patterns não são códigos ou bibliotecas específicas, mas sim descrições genéricas de como resolver um problema recorrente em um contexto particular. Eles podem ser implementados em várias linguagens de programação e em diferentes tecnologias.

Existem vários tipos de design patterns, sendo os mais conhecidos:

1. **Padrões de Criação**: Esses padrões lidam com o processo de criação de objetos, ajudando a torná-lo mais flexível e independente de classes concretas. Exemplos incluem o Singleton, Factory Method e Abstract Factory.

2. **Padrões de Estrutura**: Esses padrões se concentram na composição de classes e objetos para formar estruturas maiores e mais complexas. Exemplos incluem o Adapter, Decorator e Composite.

3. **Padrões de Comportamento**: Esses padrões estão relacionados ao comportamento e comunicação entre objetos. Eles ajudam a definir como objetos interagem e como eles são responsáveis por diferentes comportamentos. Exemplos incluem o Observer, Strategy e Command.

Alguns benefícios do uso de design patterns incluem:

- **Reusabilidade**: Os design patterns fornecem soluções genéricas que podem ser aplicadas em diferentes projetos, economizando tempo e esforço.

- **Manutenção mais fácil**: Como os design patterns promovem a modularidade e a organização do código, eles tornam a manutenção do software mais fácil e menos propensa a erros.

- **Comunicação clara**: Os padrões são uma linguagem comum entre desenvolvedores, o que facilita a comunicação e a compreensão do design do software.

- **Escalabilidade**: Muitos design patterns são projetados para escalar facilmente à medida que os requisitos do sistema mudam.

É importante notar que os design patterns não devem ser aplicados indiscriminadamente. Eles devem ser usados com sabedoria e considerando o contexto específico do problema a ser resolvido. A escolha do design pattern correto depende da natureza do problema e dos requisitos do projeto. Além disso, é importante manter um equilíbrio entre a aplicação de design patterns e a manutenção da simplicidade do código.

> voltar para o [`sumário`](#sumário)

### Como funciona o Repository Pattern?

O Repository Pattern (Padrão de Repositório) é um padrão de projeto de software comumente utilizado na programação orientada a objetos para separar a lógica de acesso aos dados (como bancos de dados) da lógica de negócios de uma aplicação. Ele fornece uma abstração entre a camada de dados e a camada de aplicação, tornando o código mais modular, flexível e testável. Como o Repository Pattern funciona:

1. **Definição de Interfaces**: O Repository Pattern começa definindo interfaces que representam operações de acesso a dados, como criar, ler, atualizar e excluir (CRUD). Isso permite que você crie uma camada de abstração sobre seu sistema de armazenamento de dados, como um banco de dados, para que a lógica de negócios não precise se preocupar com os detalhes específicos do armazenamento de dados.

2. **Implementação de Repositórios**: Após definir as interfaces, você implementa classes concretas chamadas repositórios que fornecem a implementação real das operações definidas nas interfaces. Cada repositório está associado a um tipo de entidade de negócios (por exemplo, um repositório de clientes, um repositório de produtos, etc.).

3. **Injeção de Dependência**: Uma parte importante do Repository Pattern é a injeção de dependência. Os repositórios são injetados nas classes de serviço ou controladores que precisam acessar os dados. Isso permite que você substitua facilmente a implementação do repositório por uma implementação diferente (por exemplo, uma implementação de teste em memória) sem alterar o código que usa os repositórios.

4. **Isolamento de Camadas**: O padrão ajuda a isolar a camada de acesso a dados da camada de negócios. Isso significa que as classes de serviço de negócios não precisam conhecer os detalhes de como os dados são armazenados ou recuperados. Elas simplesmente chamam os métodos nos repositórios para realizar operações de leitura e gravação.

5. **Testabilidade**: Devido à sua natureza desacoplada, o Repository Pattern facilita a criação de testes unitários. Você pode criar implementações de repositório falsas ou mock para testar a lógica de negócios sem depender de um banco de dados real.

6. **Manutenção e Evolução**: O padrão torna mais fácil realizar mudanças na forma como os dados são acessados, uma vez que essas mudanças geralmente podem ser feitas nas implementações dos repositórios, sem afetar o restante da aplicação.

Em resumo, o Repository Pattern promove uma separação clara de responsabilidades entre a lógica de negócios e o acesso aos dados, facilitando a manutenção, teste e evolução do código. Ele é frequentemente usado em conjunto com outros padrões, como o Unit of Work, para criar sistemas robustos e flexíveis.

Segue um exemplo simples em TypeScript para demonstrar como o Repository Pattern pode ser implementado em uma aplicação. Neste exemplo, será criado um sistema de gerenciamento de produtos, onde teremos uma entidade `Product` e um repositório `ProductRepository` para lidar com operações de CRUD.

Primeiro, vamos criar uma interface para representar nossa entidade `Product`:

```typescript
// Product.ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

Em seguida, definimos a interface do repositório que conterá os métodos para interagir com os produtos:

```typescript
// ProductRepository.ts
interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: number): Promise<Product | null>;
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: number): Promise<void>;
}
```

Agora, implementamos a classe concreta `InMemoryProductRepository` que usará uma estrutura de dados em memória para armazenar os produtos:

```typescript
// InMemoryProductRepository.ts
class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async getById(id: number): Promise<Product | null> {
    const product = this.products.find((p) => p.id === id);
    return product || null;
  }

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async update(product: Product): Promise<void> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  async delete(id: number): Promise<void> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
```

Agora, podemos usar essas classes em nossa aplicação:

```typescript
// Main.ts
const productRepository: ProductRepository = new InMemoryProductRepository();

async function main() {
  // Criação de produtos
  await productRepository.create({ id: 1, name: "Produto A", price: 10.0 });
  await productRepository.create({ id: 2, name: "Produto B", price: 20.0 });

  // Listagem de produtos
  const allProducts = await productRepository.getAll();
  console.log("Todos os produtos:", allProducts);

  // Busca por ID
  const productById = await productRepository.getById(1);
  console.log("Produto com ID 1:", productById);

  // Atualização de um produto
  await productRepository.update({ id: 1, name: "Produto Atualizado", price: 15.0 });
  const updatedProduct = await productRepository.getById(1);
  console.log("Produto atualizado:", updatedProduct);

  // Exclusão de um produto
  await productRepository.delete(2);
  const deletedProduct = await productRepository.getById(2);
  console.log("Produto com ID 2 (depois da exclusão):", deletedProduct);
}

main();
```

Este exemplo é simples e usa um repositório em memória para fins de demonstração. Em uma aplicação real, você substituiria `InMemoryProductRepository` por um repositório que interaja com um banco de dados ou outro sistema de armazenamento de dados. O padrão de repositório facilita essa troca sem afetar a lógica de negócios em sua aplicação.

> voltar para o [`sumário`](#sumário)

### Como funciona o Factory Pattern?

O Factory Pattern é um padrão de design de software que pertence à categoria de padrões criacionais. Ele é usado para criar objetos sem especificar explicitamente a classe do objeto que será criada. Em vez disso, o Factory Pattern fornece uma interface para criar objetos, permitindo que as subclasses escolham a classe concreta a ser instanciada.

Aqui está um exemplo em TypeScript que demonstra como o Factory Pattern pode ser implementado:

```typescript
// Interface para a classe que será criada pelo Factory
interface Product {
    operation(): string;
}

// Classes concretas que implementam a interface Product
class ConcreteProduct1 implements Product {
    operation() {
        return 'Product 1';
    }
}

class ConcreteProduct2 implements Product {
    operation() {
        return 'Product 2';
    }
}

// Factory que cria objetos Product
class ProductFactory {
    createProduct(type: number): Product {
        switch (type) {
            case 1:
                return new ConcreteProduct1();
            case 2:
                return new ConcreteProduct2();
            default:
                throw new Error('Tipo de produto desconhecido');
        }
    }
}

// Exemplo de uso do Factory Pattern
const factory = new ProductFactory();

const product1 = factory.createProduct(1);
console.log(product1.operation()); // Saída: "Product 1"

const product2 = factory.createProduct(2);
console.log(product2.operation()); // Saída: "Product 2"
```

Neste exemplo, temos uma interface `Product` que define a operação que os produtos devem realizar. Em seguida, temos duas classes concretas, `ConcreteProduct1` e `ConcreteProduct2`, que implementam essa interface.

O `ProductFactory` é responsável por criar objetos `Product`. Ele possui um método `createProduct` que recebe um tipo como argumento e decide qual classe concreta instanciar com base nesse tipo.

Ao utilizar o Factory Pattern, você pode criar objetos `Product` sem precisar conhecer as classes concretas por trás deles. Isso facilita a manutenção e a extensão do código, pois você pode adicionar novas classes de produtos sem precisar modificar o código que cria os objetos.

> voltar para o [`sumário`](#sumário)

### O que é Princípio da Inversão de Dependência (DIP)?

O Princípio da Inversão de Dependência (DIP) é um dos cinco princípios do SOLID, um conjunto de diretrizes de design de software que visa criar código mais flexível, escalável e fácil de manter. O SOLID é frequentemente associado ao desenvolvimento orientado a objetos, mas muitos de seus princípios podem ser aplicados a outros paradigmas de programação também.

O DIP, especificamente, enfoca a relação entre módulos de software e dependências entre eles. O princípio pode ser resumido da seguinte forma:

> **"Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações."**

Isso implica que, ao projetar sistemas de software, você deve estruturar suas dependências de modo que módulos de alto nível, que representam funcionalidades mais abstratas e de nível superior, não dependam diretamente de módulos de baixo nível, que implementam detalhes concretos. Em vez disso, ambos devem depender de abstrações (interfaces ou classes abstratas), o que torna o sistema mais flexível e facilita a substituição de componentes sem afetar o funcionamento de módulos de alto nível.

O DIP ajuda a alcançar os seguintes benefícios:

1. **Flexibilidade**: Quando você segue o DIP, pode facilmente substituir ou estender módulos de baixo nível sem impactar os módulos de alto nível, desde que a nova implementação cumpra a mesma abstração.

2. **Testabilidade**: É mais fácil criar testes unitários para módulos de alto nível quando eles não dependem diretamente de detalhes de implementação.

3. **Desacoplamento**: O DIP promove um baixo acoplamento entre módulos, o que torna o código mais fácil de manter e estender.

4. **Reutilização de código**: A abstração permite reutilizar módulos de baixo nível em diferentes contextos, desde que eles cumpram a mesma interface.

Para implementar o DIP, você geralmente usa padrões de design como a Injeção de Dependência (Dependency Injection) e a Inversão de Controle (Inversion of Control) para garantir que as dependências sejam injetadas nos módulos de alto nível por meio de interfaces ou classes abstratas, em vez de serem instanciadas diretamente dentro desses módulos. Isso permite que você varie a implementação das dependências sem alterar o código de alto nível.

> voltar para o [`sumário`](#sumário)

### O que são testes E2E?

Testes E2E, ou Testes de Ponta a Ponta (End-to-End Tests em inglês), são um tipo de teste de software que verifica o funcionamento de um aplicativo ou sistema em seu ambiente de produção, simulando a jornada completa do usuário, desde o início até o fim, incluindo todas as interações possíveis entre os componentes e sistemas envolvidos. Esses testes são projetados para garantir que todas as partes do sistema estejam funcionando corretamente juntas e que a aplicação se comporte de acordo com as expectativas do usuário, imitando o uso real que os usuários finais fariam.

Aqui estão algumas características-chave dos testes E2E:

1. **Testam o sistema como um todo:** Os testes E2E abrangem todos os componentes do sistema, desde a interface do usuário até o banco de dados e serviços externos. Eles verificam se todas as partes estão integradas de maneira eficaz.

2. **Simulam cenários de uso real:** Os testes E2E seguem cenários que os usuários reais podem seguir ao usar o software. Isso pode incluir ações como preencher formulários, clicar em botões, navegar por diferentes páginas e interagir com elementos da interface do usuário.

3. **Testam fluxos completos de trabalho:** Em vez de verificar apenas partes isoladas do sistema, os testes E2E testam fluxos completos de trabalho, garantindo que todas as etapas funcionem corretamente em conjunto.

4. **Validam a experiência do usuário:** O principal objetivo dos testes E2E é garantir que o sistema forneça uma experiência de usuário satisfatória e que todas as funcionalidades sejam acessíveis e utilizáveis.

5. **Podem ser automatizados:** Embora os testes E2E possam ser executados manualmente, eles geralmente são automatizados usando ferramentas de automação de testes. Isso permite que eles sejam executados de maneira consistente e repetível, economizando tempo e recursos.

6. **Detectam problemas de integração:** Os testes E2E são eficazes na detecção de problemas de integração entre os diferentes componentes do sistema, como falhas na comunicação entre a interface do usuário e o servidor.

No entanto, os testes E2E também têm desafios, como a complexidade na criação e manutenção dos cenários de teste, a dependência de ambientes de teste semelhantes ao ambiente de produção e o tempo necessário para executar os testes. Portanto, eles são frequentemente combinados com outros tipos de testes, como testes unitários, testes de integração e testes de unidade funcional, para garantir uma cobertura completa dos testes de software.

> voltar para o [`sumário`](#sumário)

### O que é JWT?

JWT, que significa "JSON Web Token", é um formato compacto e autossuficiente para representar informações entre duas partes de forma segura como um objeto JSON. Ele é frequentemente usado para autenticar e verificar a identidade de um usuário durante a comunicação entre um cliente (geralmente um navegador da web ou um aplicativo móvel) e um servidor.

Um JWT é composto por três partes separadas por pontos:

1. **Header (Cabeçalho)**: O cabeçalho geralmente consiste em duas partes: o tipo de token (que é JWT) e o algoritmo de assinatura usado para assinar o token, como HMAC SHA256 ou RSA.

2. **Payload (Carga)**: O payload contém as informações que deseja transmitir, como as reivindicações (claims) do usuário, que podem incluir coisas como o ID do usuário, papel ou função, data de validade e outras informações relevantes. Existem três tipos de reivindicações em um JWT: reivindicações registradas (predefinidas), reivindicações públicas (definidas pelo desenvolvedor) e reivindicações privadas (acordadas entre as partes envolvidas).

3. **Signature (Assinatura)**: A assinatura é usada para verificar que a mensagem não foi alterada durante a transmissão e que a mensagem foi realmente enviada pelo remetente pretendido. A assinatura é calculada usando o cabeçalho, o payload, uma chave secreta e o algoritmo de assinatura especificado no cabeçalho.

O processo de uso de um JWT geralmente envolve as seguintes etapas:

1. **Autenticação**: O usuário faz login e o servidor gera um JWT, incluindo as informações relevantes sobre o usuário.

2. **Emissão**: O servidor emite o JWT para o cliente, que o armazena (geralmente em cookies ou armazenamento local).

3. **Envio**: O cliente envia o JWT em cada solicitação subsequente ao servidor.

4. **Verificação**: O servidor verifica a assinatura do JWT para garantir que ele não foi adulterado. Ele também verifica se o JWT está dentro do prazo de validade.

5. **Autorização**: Com base nas informações no JWT, o servidor pode autorizar ou negar o acesso ao cliente.

JWTs são frequentemente usados em sistemas de autenticação e autorização, como autenticação de API, single sign-on (SSO) e em muitas outras aplicações onde a segurança e a identidade são fundamentais. Eles são populares porque são compactos, fáceis de usar e podem ser verificados sem a necessidade de consultar um banco de dados centralizado, tornando-os escaláveis e eficientes.

> voltar para o [`sumário`](#sumário)

### O que é e como funciona o Refresh Token?

Um "refresh token" (token de atualização) é uma parte importante do sistema de autenticação e autorização usado em muitas aplicações e serviços online para garantir a segurança e a gestão de sessões de usuário de longa duração. Ele é frequentemente associado com o protocolo OAuth 2.0, que é usado para delegar autorização de acesso a recursos protegidos em nome de um usuário.

Como um refresh token funciona:

1. **Autenticação Inicial**: Quando um usuário se autentica em um serviço ou aplicação pela primeira vez (geralmente usando seu nome de usuário e senha), o sistema emite dois tipos de tokens: um "access token" (token de acesso) e um "refresh token" (token de atualização).

2. **Access Token**: O access token é usado para acessar recursos protegidos, como dados do usuário, serviços ou APIs. No entanto, o access token tem um tempo de vida curto, geralmente durando apenas alguns minutos ou horas. Isso é feito por motivos de segurança, para que mesmo que o access token seja interceptado ou roubado, seu uso seja limitado no tempo.

3. **Refresh Token**: O refresh token, por outro lado, tem um tempo de vida mais longo e é usado para obter um novo access token quando o access token anterior expira. Ele é um tipo de credencial de longa duração que permite ao cliente (geralmente um aplicativo ou serviço) solicitar acesso contínuo em nome do usuário sem que o usuário precise fornecer suas credenciais novamente.

4. **Renovação de Tokens**: Quando o access token expira, o cliente pode enviar o refresh token para o servidor de autorização. O servidor verifica se o refresh token é válido e se o cliente ainda tem permissão para agir em nome do usuário. Se tudo estiver correto, o servidor emite um novo access token e, geralmente, um novo refresh token. O novo access token pode ser usado para continuar acessando recursos protegidos.

A principal vantagem do uso de refresh tokens é a segurança. Como os access tokens têm um tempo de vida curto, mesmo que um access token seja comprometido, ele não permanecerá válido por muito tempo. Além disso, os refresh tokens podem ser revogados pelo usuário ou pelo servidor de autorização, o que adiciona uma camada adicional de controle.

Em resumo, um refresh token é uma peça fundamental em sistemas de autenticação e autorização que permite a obtenção de novos access tokens de forma segura e contínua, garantindo a segurança e a praticidade das sessões de usuário em aplicativos e serviços online.

> voltar para o [`sumário`](#sumário)

### O que é e como funciona um RBAC?

RBAC, que significa Role-Based Access Control (Controle de Acesso Baseado em Função), é um modelo de controle de acesso usado em sistemas de segurança da informação para gerenciar e controlar o acesso de usuários a recursos ou informações em um sistema computacional. O RBAC é uma abordagem eficaz para garantir a segurança e a privacidade dos dados, especialmente em ambientes onde há muitos usuários com diferentes níveis de acesso.

Como o RBAC funciona:

1. **Funções (Roles)**: No RBAC, os usuários são atribuídos a funções específicas dentro de uma organização ou sistema. Essas funções são grupos predefinidos que representam diferentes níveis de acesso. Exemplos de funções podem incluir "administrador", "gerente", "funcionário" e assim por diante.

2. **Permissões (Permissions)**: Cada função tem um conjunto de permissões associadas a ela, que define o que os usuários com essa função específica podem fazer no sistema. Essas permissões podem ser ações como "ler", "escrever", "excluir" ou outras operações relacionadas a recursos específicos.

3. **Atribuição de Funções**: Os administradores do sistema atribuem funções aos usuários com base em suas responsabilidades e necessidades de acesso. Por exemplo, um gerente pode receber a função "gerente" que lhe permite acessar e gerenciar recursos específicos, enquanto um funcionário comum pode receber a função "funcionário" com acesso limitado.

4. **Política de Controle de Acesso**: A política de controle de acesso define como as funções e permissões são atribuídas e quais regras governam o acesso. Essa política é a base para determinar quem pode fazer o quê no sistema.

5. **Verificação de Acesso**: Quando um usuário tenta acessar um recurso ou executar uma ação, o sistema verifica se a função do usuário permite essa ação de acordo com a política de controle de acesso. Se a função do usuário tiver as permissões necessárias, o acesso é concedido; caso contrário, é negado.

6. **Auditoria e Monitoramento**: O RBAC geralmente inclui recursos de auditoria e monitoramento para rastrear as atividades dos usuários e garantir conformidade com as políticas de controle de acesso. Isso ajuda a identificar atividades suspeitas ou não autorizadas.

Os benefícios do RBAC incluem uma gestão mais eficaz de privilégios de acesso, redução de riscos de segurança, simplificação da administração de usuários e uma abordagem mais granular para o controle de acesso. Ele é amplamente usado em sistemas de gerenciamento de identidade e acesso, sistemas operacionais, bancos de dados e muitas outras aplicações onde a segurança da informação é uma preocupação.

Segue exemplo simples de implementação de um sistema RBAC em TypeScript. Aqui, vamos criar algumas funções, permissões e um mecanismo de verificação de acesso. Primeiro, deve-se definir algumas funções e permissões:

```typescript
// Defina as funções (roles) no sistema
enum Role {
  Admin = "Admin",
  Manager = "Manager",
  Employee = "Employee",
}

// Defina as permissões associadas a cada função
const rolePermissions: Record<Role, string[]> = {
  [Role.Admin]: ["read", "write", "delete"],
  [Role.Manager]: ["read", "write"],
  [Role.Employee]: ["read"],
};
```

Agora, vamos criar uma função para verificar se um usuário tem permissão para realizar uma determinada ação:

```typescript
// Verifica se o usuário possui permissão para realizar uma ação
function checkPermission(userRole: Role, action: string): boolean {
  const allowedActions = rolePermissions[userRole];
  return allowedActions.includes(action);
}
```

Como usá-lo:

```typescript
const userRole = Role.Employee;

// Verifique se o usuário pode ler (exemplo de ação)
if (checkPermission(userRole, "read")) {
  console.log("Usuário tem permissão para ler.");
} else {
  console.log("Usuário não tem permissão para ler.");
}

// Verifique se o usuário pode escrever (exemplo de ação)
if (checkPermission(userRole, "write")) {
  console.log("Usuário tem permissão para escrever.");
} else {
  console.log("Usuário não tem permissão para escrever.");
}
```

Neste exemplo simples, o sistema RBAC é implementado usando enums para definir funções (roles) e um objeto para associar permissões a essas funções. A função `checkPermission` verifica se um usuário com uma função específica tem permissão para realizar uma ação específica.

Em uma implementação real, teria um sistema de autenticação e um banco de dados que armazenaria as atribuições de função para usuários, juntamente com políticas de controle de acesso mais complexas.

> voltar para o [`sumário`](#sumário)

### O que é e como funciona um `In-Memory Test Databases`

Um "In-Memory Test Database" (Banco de Dados em Memória para Testes) é um tipo de banco de dados que é projetado para ser usado durante o desenvolvimento e execução de testes de software. A principal característica desse tipo de banco de dados é que ele armazena todos os dados em memória RAM, em oposição aos bancos de dados tradicionais que armazenam dados em disco.

Aqui está uma explicação de como um In-Memory Test Database funciona:

1. **Armazenamento em Memória:** Como mencionado anteriormente, um In-Memory Test Database armazena todos os seus dados na memória RAM do sistema em vez de gravá-los em disco. Isso significa que o acesso aos dados é muito mais rápido, pois não há a latência associada à leitura e gravação em disco.

2. **Inicialização Rápida:** Como os dados já estão em memória, a inicialização de um banco de dados em memória é significativamente mais rápida do que a de um banco de dados tradicional. Isso é particularmente útil para cenários de testes automatizados, nos quais você deseja configurar rapidamente um ambiente de teste.

3. **Isolamento de Testes:** Um banco de dados em memória permite que você isole completamente os testes uns dos outros. Cada teste pode começar com um banco de dados limpo e carregar os dados necessários para o cenário de teste específico. Isso ajuda a evitar interferências entre testes, o que pode ser um problema com bancos de dados tradicionais compartilhados.

4. **Facilidade de Configuração:** Os bancos de dados em memória geralmente são muito mais fáceis de configurar para fins de teste, pois não requerem configuração de armazenamento em disco, como a definição de locais de arquivo, tamanhos de cache, etc.

5. **Descartável:** Como os dados são armazenados na memória, é fácil descartar um banco de dados em memória após a conclusão dos testes. Isso é útil para garantir que os testes sejam repetíveis e não deixem resíduos de dados no sistema.

6. **Performance Predizível:** Devido à sua natureza em memória, os bancos de dados em memória oferecem desempenho previsível e consistente para os testes, independentemente da carga do sistema ou das operações de disco.

7. **Redução de Overhead:** Como não há operações de I/O em disco, o overhead associado a essas operações é eliminado, o que pode ser especialmente importante em testes que envolvem grandes volumes de dados.

É importante notar que os bancos de dados em memória são mais adequados para testes unitários e testes de integração que precisam ser rápidos e isolados. Eles podem não ser apropriados para testes de desempenho que precisam simular o uso do banco de dados em um ambiente de produção com armazenamento em disco.

Além disso, a escolha de um banco de dados em memória específico dependerá da linguagem de programação e das tecnologias que você está usando. Muitas linguagens de programação e estruturas de teste têm bibliotecas e ferramentas específicas para criar e gerenciar bancos de dados em memória para fins de teste.

> voltar para o [`sumário`](#sumário)

### O que é *coverage* de testes?

A cobertura de testes (test coverage) é uma técnica usada no desenvolvimento de software para avaliar quão bem seus testes automatizados exercitam o código-fonte de um programa. Ela fornece uma métrica que indica quais partes do código foram executadas pelos testes e quais partes não foram. Isso ajuda os desenvolvedores a identificar áreas do código que não foram testadas e, portanto, podem conter erros não detectados. A cobertura de testes é uma parte essencial das práticas de garantia de qualidade de software. Aqui está como ela funciona:

1. **Instrumentação do Código**: Para medir a cobertura de testes, o código-fonte é instrumentado. Isso significa que o código é modificado de alguma forma para registrar quais partes do código foram executadas. Isso pode ser feito adicionando instruções extras ao código, geralmente no nível de linha ou instrução.

2. **Execução dos Testes**: Os testes automatizados, que são escritos pelos desenvolvedores para verificar o comportamento do código, são executados. Durante a execução dos testes, a ferramenta de cobertura rastreia quais partes do código estão sendo executadas.

3. **Coleta de Dados de Cobertura**: Enquanto os testes são executados, a ferramenta de cobertura coleta informações sobre quais partes do código foram visitadas. Isso geralmente inclui informações sobre linhas específicas de código, instruções ou ramos condicionais que foram executados.

4. **Geração de Relatório**: Após a execução dos testes, a ferramenta de cobertura gera um relatório que mostra a porcentagem de código que foi coberta pelos testes. Essa porcentagem é chamada de "cobertura de código". O relatório pode ser apresentado de várias maneiras, incluindo cobertura de linha, cobertura de instrução e cobertura de ramificação.

   - **Cobertura de Linha**: Isso indica quantas linhas de código foram executadas pelos testes em relação ao número total de linhas no código-fonte.
   - **Cobertura de Instrução**: Isso mede a porcentagem de instruções que foram executadas pelos testes em relação ao número total de instruções.
   - **Cobertura de Ramificação**: Isso avalia a cobertura de todos os caminhos possíveis em estruturas condicionais, como declarações if/else. Ajuda a garantir que todos os ramos do código sejam testados.

5. **Análise dos Resultados**: Os desenvolvedores analisam o relatório de cobertura para identificar áreas do código que não foram testadas ou que têm uma cobertura insuficiente. Isso ajuda a priorizar esforços de teste e correção de bugs.

6. **Iteração**: Com base nos resultados da cobertura de testes, os desenvolvedores podem escrever testes adicionais para aumentar a cobertura ou corrigir problemas identificados nos testes existentes. Isso é um processo iterativo para melhorar a qualidade do software.

Ferramentas populares para medir a cobertura de testes em JavaScript incluem o Istanbul (agora parte do Jest), o nyc (também conhecido como "Istanbul command-line interface") e várias outras bibliotecas e plugins específicos para diferentes estruturas e ambientes de desenvolvimento.

Em resumo, a cobertura de testes é uma técnica importante para avaliar a qualidade dos testes automatizados e garantir que um código seja amplamente testado, o que é fundamental para a entrega de software confiável e de alta qualidade.

> voltar para o [`sumário`](#sumário)

### O que é Test Driven Development (TDD)?

O Test Driven Development (TDD), que significa "Desenvolvimento Orientado a Testes", é uma abordagem de desenvolvimento de software que coloca um forte foco na escrita de testes automatizados antes da implementação do código principal. O TDD segue um ciclo iterativo e consiste em três passos principais:

1. **Especificação dos Testes (Test Specification)**:
   - Começa-se por escrever testes automatizados que descrevem o comportamento desejado do sistema ou da funcionalidade que está sendo desenvolvida. Esses testes são geralmente escritos antes que o código seja escrito.

2. **Implementação Mínima (Minimum Implementation)**:
   - Com os testes em mãos, o próximo passo é escrever o código mínimo necessário para fazer os testes recém-criados passarem. Isso significa que a implementação inicial pode ser simplificada e atender apenas aos requisitos dos testes existentes.

3. **Refatoração (Refactoring)**:
   - Após a implementação inicial, é importante refinar o código, tornando-o mais limpo, eficiente e mantível. Durante esse processo de refatoração, os testes ainda devem ser executados para garantir que nenhuma funcionalidade seja quebrada.

O ciclo de TDD é repetido continuamente, com a adição de novos testes para funcionalidades adicionais e a melhoria do código existente. O objetivo principal do TDD é garantir que o código seja testado de maneira abrangente desde o início do desenvolvimento, o que ajuda a:

- **Melhorar a qualidade do código**: O código é escrito com testes rigorosos, o que ajuda a identificar e corrigir erros mais cedo no processo de desenvolvimento.

- **Documentar o comportamento esperado**: Os testes servem como documentação viva do comportamento do sistema, tornando mais fácil para os desenvolvedores entenderem como as partes do código devem funcionar.

- **Facilitar a manutenção e refatoração**: Com um conjunto sólido de testes, os desenvolvedores podem fazer alterações no código com confiança de que as funcionalidades existentes não estão quebradas.

- **Promover a colaboração**: O TDD incentiva a comunicação e colaboração entre os membros da equipe, pois todos têm uma compreensão clara dos requisitos e do comportamento esperado.

No entanto, o TDD também exige disciplina e pode ser desafiador no início, pois os testes devem ser escritos antes mesmo de se ter uma implementação funcional. No entanto, muitos desenvolvedores acreditam que os benefícios a longo prazo do TDD superam amplamente os desafios iniciais, pois resultam em código mais robusto e confiável.

TDD (Test Driven Development) é uma abordagem de desenvolvimento de software em que os testes são escritos antes do código. Na aula, será explicado o conceito de TDD e aplicado no desenvolvimento da funcionalidade que valida se um usuário já realizou check-in no mesmo dia. Primeiramente, será criado o teste unitário e em seguida, o código será desenvolvido para que esse teste passe.

Red, green and Refactor:

O conceito "red, green and refactor" é uma abordagem do TDD (Test-Driven Development) para desenvolvimento de software. Consiste em três etapas:

- Red (Vermelho): nesta fase, o desenvolvedor escreve um teste que deve falhar, ou seja, ele garante que o teste não passará sem implementar o código necessário.
- Green (Verde): aqui, o desenvolvedor escreve a quantidade mínima de código necessária para fazer o teste passar.
- Refactor (Refatorar): após o teste passar, o desenvolvedor refatora o código para melhorar a qualidade, sem alterar seu comportamento.

Essa abordagem garante que o código seja desenvolvido com base em testes confiáveis, resultando em um código mais limpo, seguro e fácil de manter.

> voltar para o [`sumário`](#sumário)

### O que é Fórmula de Haversine

A fórmula de Haversine é uma equação utilizada para calcular a distância entre dois pontos em uma esfera, como a Terra. Essa fórmula é especialmente útil para calcular a distância entre duas coordenadas geográficas (latitude e longitude) na superfície da Terra, considerando a curvatura da Terra.

Aqui está a fórmula de Haversine:

``` python
a = sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlong/2)
c = 2 * atan2(√a, √(1-a))
distance = R * c
```

Onde:

- `lat1` e `long1` são a latitude e a longitude do primeiro ponto em radianos.
- `lat2` e `long2` são a latitude e a longitude do segundo ponto em radianos.
- `Δlat` é a diferença entre as latitudes (`lat2 - lat1`) em radianos.
- `Δlong` é a diferença entre as longitudes (`long2 - long1`) em radianos.
- `R` é o raio da Terra (em metros, por exemplo, 6371 km para a Terra).
- `distance` é a distância entre os dois pontos.

Aqui está um exemplo de como você pode calcular a distância usando a fórmula de Haversine em TypeScript:

```typescript
function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Raio médio da Terra em quilômetros
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
}

function degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
}

// Exemplo de uso
const lat1 = 52.5200; // Latitude de Berlim, Alemanha
const lon1 = 13.4050; // Longitude de Berlim, Alemanha

const lat2 = 48.8566; // Latitude de Paris, França
const lon2 = 2.3522; // Longitude de Paris, França

const distance = haversine(lat1, lon1, lat2, lon2);
console.log(`A distância entre Berlim e Paris é de ${distance.toFixed(2)} km.`);
```

Neste exemplo, a função `haversine` calcula a distância em quilômetros entre Berlim e Paris usando suas coordenadas geográficas. Certifique-se de que as coordenadas estejam em graus decimais e que a distância seja expressa em quilômetros ou na unidade de sua escolha, ajustando o valor de `R` conforme necessário.

> voltar para o [`sumário`](#sumário)

### O que é Mocking?

No contexto de programação, "mocking" se refere a uma técnica usada em testes de software para simular o comportamento de objetos ou componentes do sistema que ainda não foram implementados ou que têm dependências externas, como bancos de dados, serviços web ou APIs. O objetivo principal do mocking é isolar a unidade de código que está sendo testada, para que você possa verificar se ela funciona corretamente sem depender de partes externas do sistema que podem não estar disponíveis ou podem introduzir complexidade indesejada nos testes.

Aqui estão alguns pontos-chave relacionados ao mocking:

1. **Objetos Falsos (Mocks):** Mocks são objetos falsos que imitam o comportamento de objetos reais, mas são controlados pelo código de teste. Eles são usados para substituir as dependências reais durante os testes.

2. **Dependências Simuladas:** Quando você está testando uma parte específica de um programa, pode criar mocks para simular o comportamento das dependências dessa parte. Por exemplo, se você estiver testando uma função que faz chamadas a um serviço web externo, você pode criar um mock do serviço web que retorna resultados predefinidos em vez de fazer chamadas reais à internet.

3. **Isolamento de Testes:** O uso de mocks permite isolar o código que está sendo testado, garantindo que os resultados dos testes sejam consistentes e previsíveis, independentemente das condições externas.

4. **Rápido e Eficiente:** Usar mocks pode tornar os testes mais rápidos, pois você não precisa esperar por chamadas de serviços externos ou configurações complexas do ambiente de produção.

5. **Bibliotecas de Mocking:** Existem muitas bibliotecas de mocking disponíveis para diferentes linguagens de programação. Exemplos populares incluem Mockito para Java, unittest.mock para Python e sinon.js para JavaScript.

6. **Integração com Testes Unitários:** Mocking é frequentemente usado em conjunto com testes unitários, onde você testa unidades individuais de código, como funções ou classes, de forma isolada.

7. **Test-Driven Development (TDD):** Mocking é uma técnica útil em abordagens de desenvolvimento orientado a testes (TDD), onde os testes são escritos antes da implementação do código real.

Em resumo, o mocking é uma técnica valiosa que ajuda os desenvolvedores a criar testes mais eficientes e confiáveis, permitindo que eles isolem o código que estão testando e simulem o comportamento das dependências externas. Isso ajuda a identificar problemas mais cedo no ciclo de desenvolvimento e a melhorar a qualidade do software.

### O que é Basic Auth?

O Basic Authentication é o sistema de autenticação mais comum do protocolo HTTP. Ele é incluído no header da requisição HTTP dessa maneira:

`Authorization: Basic {credenciais em base 64 no formato usuário:senha}`

Lembre que o [Base 64](https://en.wikipedia.org/wiki/Base64) é um esquema de codificação e não criptografia. Assim sendo, você DEVE utilizá-lo somente com uma conexão HTTPS (TLS). O uso do Base 64 se deve ao padrão [MIME](https://en.wikipedia.org/wiki/MIME).

#### Workflow

O esquema de autenticação funciona assim: o servidor responde ao cliente o código HTTP [`401` (Unauthorized)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) e com um cabeçalho `WWW-Authenticate`, que dá informações de como se autenticar. O cliente manda o *request* com o *header* de autenticação, mostrado acima. Se as credenciais estiverem corretas, receberá uma resposta diferente de [`403` (Forbidden)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403).

![img](../assets/8B6Dh.png)

#### Segurança

O Basic Auth no HTTPS (TLS) é bom, mas não é 100% seguro. Seu uso dependerá do nível de risco dos dados que estiverem transitando. Perceba que a cada requisição você estará enviando as credenciais. A autenticação pode ser permanentemente armazenada no navegador, se requerido pelo usuário (bem difícil acontecer quando se trata de RESTful APIs).

Existem várias ações a serem tomadas para aumentar a segurança do seu serviço. Não vou me alongar, porém destacar um ponto: gere chaves de API que não sejam quebradas facilmente. Dê uma olhada nos [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier).

> voltar para o [`sumário`](#sumário)

#### Quando utilizar?

Só você pode analisar isso. Qual é o nível de sigilo dos dados em trânsito via HTTP? Se for alto, talvez valha a pena investir em outro esquema de autenticação.

Uma grande vantagem do Basic Auth é a simplicidade. Tanto para o cliente quanto para o servidor. Isso vai acelerar o desenvolvimento para os dois lados.

Utilizar esquemas de autenticação mais modernos, como OAuth e OAuth2 trazem suas vantagens, mas tem que se analisar a real necessidade.

1. Está transportando dados sigilosos? Talvez a sua opção não seja nem o OAuth ou OAuth2. De quanta segurança você precisa?
2. Um esquema simples e de rápida implementação resolve seu problema? O Basic Auth parece ser bom.
3. Precisa de funcionalidades como autenticação por outros serviços? O OAuth traz isso e pode ser a opção.

> voltar para o [`sumário`](#sumário)
>
> Voltar para o [`index`](./index.md)
