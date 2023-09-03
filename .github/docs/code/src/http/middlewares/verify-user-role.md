# `http/middlewares/verify-user-role.ts`

## Função

A função `verifyUserRole` é usada como middleware para verificar se o papel do usuário que faz a solicitação corresponde ao papel esperado (ADMIN ou MEMBER). Se não coincidir, a resposta HTTP será configurada como "Unauthorized". Esta função pode ser utilizada para proteger rotas ou endpoints específicos, garantindo que apenas os usuários com os papéis corretos tenham acesso a eles.

## Análise e Informações

1. **Importações:**

   ```typescript
   import { FastifyReply, FastifyRequest } from 'fastify'
   ```

   Nesta parte, o código importa os tipos `FastifyReply` e `FastifyRequest` do módulo 'fastify'. Esses tipos são usados para descrever objetos que representam uma solicitação HTTP e uma resposta HTTP em um aplicativo Fastify.

2. **Declaração da Função `verifyUserRole`:**

   ```typescript
   export function verifyUserRole(roleToVerify: 'ADMIN' | 'MEMBER') {
     return async (request: FastifyRequest, reply: FastifyReply) => {
       // ... código ...
     }
   }
   ```

   Aqui, é declarada uma função chamada `verifyUserRole` que recebe um parâmetro `roleToVerify` do tipo 'ADMIN' ou 'MEMBER'. A função retorna uma função assíncrona que aceita dois argumentos: `request` (representando a solicitação HTTP) e `reply` (representando a resposta HTTP).

3. **Extração do Papel do Usuário:**

   ```typescript
   const { role } = request.user
   ```

   No interior da função assíncrona, o código extrai a propriedade `role` do objeto `request.user`. Isso sugere que o objeto `request` é esperado para conter informações sobre o usuário atual, incluindo seu papel (role).

4. **Verificação do Papel do Usuário:**

   ```typescript
   if (role !== roleToVerify) {
     return reply.status(401).send({ message: 'Unauthorized.' })
   }
   ```

   Nesta parte, há uma verificação condicional. Ele compara o papel do usuário extraído da solicitação (`role`) com o papel a ser verificado (`roleToVerify`). Se esses papéis não coincidirem, ele retorna uma resposta HTTP com status 401 (Unauthorized) e um corpo JSON contendo a mensagem de erro 'Unauthorized'.

> Voltar para o [`index`](../../../../index.md)
