# Anotações importantes

## Dicas

O arquivo `.npmrc` é usado para configurar as opções do npm, o gerenciador de pacotes JavaScript, em um projeto específico. A propriedade `save-exact` não é uma configuração direta do `.npmrc`, mas sim uma opção que pode ser usada com comandos npm específicos, como `npm install`.

## Conceitos

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
