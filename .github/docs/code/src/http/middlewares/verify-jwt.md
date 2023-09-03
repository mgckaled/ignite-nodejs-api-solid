# `http/middlewares/verify-jwt.ts`

## Função

Definir uma função chamada `verifyJwt`, que recebe dois parâmetros: `request` (do tipo `FastifyRequest`) e `reply` (do tipo `FastifyReply`). A principal funcionalidade desse código é verificar um token JWT (JSON Web Token) incluído na solicitação HTTP e, se a verificação for bem-sucedida, permitir que a solicitação prossiga. Caso contrário, retorna uma resposta HTTP 401 (Unauthorized).

## Análise e Informações

1. **Importações**:

   ```typescript
   import { FastifyReply, FastifyRequest } from 'fastify'
   ```

   - O código começa com a importação de dois tipos do módulo 'fastify': `FastifyReply` e `FastifyRequest`. Esses tipos são usados para descrever os objetos de solicitação e resposta que o Fastify usa para lidar com solicitações HTTP.

2. **Definição da função `verifyJwt`**:

   ```typescript
   export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
   ```

   - Aqui, estamos exportando uma função assíncrona chamada `verifyJwt`. Essa função recebe dois parâmetros: `request` (do tipo `FastifyRequest`) e `reply` (do tipo `FastifyReply`). Esses parâmetros são usados para manipular a solicitação HTTP e a resposta HTTP que chegam ao servidor.

3. **Bloco `try-catch`**:

   ```typescript
   try {
     await request.jwtVerify()
   } catch (err) {
     return reply.status(401).send({ message: 'Unauthorized.' })
   }
   ```

   - Dentro do bloco `try`, o código tenta executar a função `jwtVerify()` no objeto `request`. A função `jwtVerify()` é usada para verificar a validade de um token JWT incluído na solicitação. Se a verificação for bem-sucedida (o token é válido), o código não gerará uma exceção e continuará a execução normal.

   - No bloco `catch`, o código captura qualquer exceção que possa ser gerada durante a verificação do token JWT. Isso é usado para tratar o caso em que a verificação falha, indicando que o token é inválido ou ausente.

   - Se ocorrer uma exceção (verificação do token falhar), a função `reply.status(401)` é usada para definir o código de status HTTP da resposta como 401 (Unauthorized) e `reply.send({ message: 'Unauthorized.' })` é usado para enviar uma resposta JSON com a mensagem "Unauthorized." de volta ao cliente.

> Voltar para o [`index`](../../../../index.md)
