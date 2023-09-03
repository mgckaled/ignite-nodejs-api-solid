# `fastify-jwt.d.ts`

## Função

O código utiliza o módulo `@fastify/jwt` para adicionar funcionalidades de autenticação JWT (JSON Web Tokens) no Fastify. Isso torna mais fácil para a aplicação Fastify manipular e verificar as informações do usuário autenticado durante a execução.

## Análise Informações

1. `import '@fastify/jwt'`: importação do módulo `@fastify/jwt`. É um plugin do Fastify que permite autenticar e autorizar usuários usando tokens JWT.

2. `declare module '@fastify/jwt'`: Esta linha está declarando um módulo do TypeScript para estender a definição de tipos do `@fastify/jwt`. Isso permite adicionar propriedades personalizadas ao objeto `FastifyJWT`.

3. `export interface FastifyJWT`: Isso define uma interface TypeScript chamada `FastifyJWT` que estende as definições do `@fastify/jwt`.

4. `user`: Esta é uma propriedade personalizada que está sendo adicionada à interface `FastifyJWT`. Ela representa as informações do usuário contidas em um token JWT após a autenticação.

5. `role: 'ADMIN' | 'MEMBER'`: Aqui, está definido um campo `role` que deve ser uma string que pode ser apenas 'ADMIN' ou 'MEMBER'. Isso provavelmente indica o papel ou função do usuário autenticado, sendo 'ADMIN' para administradores e 'MEMBER' para membros comuns.

6. `sub: string`: Esta é outra propriedade personalizada da interface `FastifyJWT`. O campo `sub` é uma string que geralmente representa o identificador único do usuário no sistema. É comum que a parte "sub" (subject) de um token JWT contenha o ID do usuário.

> Voltar para o [`index`](../../../index.md)
