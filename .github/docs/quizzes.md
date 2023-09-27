# `Quizzes`

> Voltar para o [`index`](./index.md)

- [`Quizzes`](#quizzes)
  - [Quiz - Estrutura do projeto](#quiz---estrutura-do-projeto)
  - [Quiz - Integração com Prisma ORM](#quiz---integração-com-prisma-orm)
  - [Quiz - Caso de uso e design patterns](#quiz---caso-de-uso-e-design-patterns)
  - [Quiz - Design Patterns \& Testes](#quiz---design-patterns--testes)
  - [Quiz - Implementando casos de uso](#quiz---implementando-casos-de-uso)
  - [Quiz - Controllers \& Testes E2E](#quiz---controllers--testes-e2e)
  - [Quiz - Refresh Token \& RBAC](#quiz---refresh-token--rbac)

## Quiz - Estrutura do projeto

1. O que é um alias de importação no TypeScript? **Resposta**: Uma forma de importar arquivos no projeto com um nome mais curto
2. Qual o benefício de se utilizar um alias de importação no TypeScript? **Resposta**: Melhor legibilidade e organização do código, através da utilização de apelidos mais descritivos para caminhos de importação complexos
3. Para que serve o "save-exact" no arquivo .npmrc? **Resposta**: Uma opção para salvar a versão exata de um pacote instalado

## Quiz - Integração com Prisma ORM

1. O que é o Prisma Client? **Resposta**: Uma biblioteca de acesso ao banco de dados gerada automaticamente a partir do schema do Prisma
2. Qual o comando do Prisma utilizado para gerar um novo arquivo de migração? **Resposta**: `prisma migrate dev`
3. Qual o comando do Prisma utilizado para atualizar o esquema do banco de dados de produção? **Resposta**: `prisma migrate deploy`
4. O que é um contêiner Docker? **Resposta**: Uma aplicação isolada com suas dependências
5. Como os contêineres Docker diferem das máquinas virtuais? **Resposta**: Os contêineres compartilham o kernel do host, enquanto as máquinas virtuais têm um kernel próprio
6. Qual comando é usado para criar um novo contêiner Docker a partir de uma imagem? **Resposta**: `docker run`
7. O que é o Docker Compose? **Resposta**: Uma ferramenta de gerenciamento de containers que faz parte do Docker
8. Qual comando é usado para criar os containers pela primeira vez pelo Docker Compose? **Resposta**: `docker-compose up`
9. Como é representado um relacionamento N para N em um banco de dados relacional? **Resposta**: Com uma tabela intermediária que registra as associações entre os registros nas duas tabelas.

## Quiz - Caso de uso e design patterns

1. Para que servem os casos de uso? **Resposta**: Para orquestrar as entidades e regras da aplicação
2. Quais a principais responsabilidades dos Controllers? **Resposta**: Intermediar a requisição, repassar os dados para os casos de uso e retornar dados quando necessário.
3. Qual é o fator de custo no Bcrypt? **Resposta**: O número de iterações usadas na função de hash
4. O que é um "salt" no contexto de hashing de senha? **Resposta**: Um valor aleatório adicionado à senha antes de gerar o hash
5. Para que serve o padrão Repository? **Resposta**: Para abstrair a persistência de dados
6. No SOLID, para que serve a Inversão de dependência? **Resposta**: Para evitar acoplamento e tornar a aplicação mais flexível
7. Qual é o principal benefício da utilização de interfaces de contrato na inversão de dependência? **Resposta**: Permitir a substituição de implementações sem modificar o código cliente
8. Ao utilizarmos uma interface para um repositório, é correto afirmar que: **Resposta**: Nossa aplicação dependerá de uma abstração e isso a tornará mais flexível e menos acoplada
9. No Fastify, qual o método que nos auxilia a criarmos erros globais? **Resposta**: `setErrorHandler`

## Quiz - Design Patterns & Testes

1. Quais são as vantagens de usar um InMemoryDatabase em testes? **Resposta**: Reduz a complexidade dos testes, Permite testar sem se preocupar com dados da produção, Oferece um desempenho melhor do que um banco de dados real.
2. O que é um "falso" InMemoryTestDatabase? **Resposta**: Um banco de dados que armazena os dados em memória, mas também usa o disco para armazenar os dados permanentemente.
3. Qual é a principal razão para medir a cobertura de testes? **Resposta**: Identificar fluxos no código que não foram testados

## Quiz - Implementando casos de uso

1. Qual é o objetivo principal de limpar o contexto dos repositórios entre os testes unitários? **Resposta**: Evitar interferências de testes anteriores nos testes subsequentes
2. Seguindo a aula, em qual fase do ciclo de vida dos testes unitários deve ocorrer a limpeza do contexto? **Resposta**: Antes de cada teste
3. Em que tipo de testes a limpeza de contexto é especialmente importante? **Resposta**: Testes de unidade
4. Para que serve o padrão Factory Pattern? **Resposta**: Para abstrair a criação de objetos sem expor a lógica de criação beneficiando a reutilização
5. O que é TDD? **Resposta**: Um método de desenvolvimento de software que envolve escrever testes antes do código
6. Quais os ciclos do TDD? **Resposta**: Red, Green, Refactor
7. O que é o mocking? **Resposta**: Uma técnica para simular a execução de funções ou objetos

## Quiz - Controllers & Testes E2E

## Quiz - Refresh Token & RBAC

> Voltar para o [`index`](./index.md)
