# `http/controllers/check-ins/create.ts`

## Função

Cirar um ponto de entrada para lidar com solicitações HTTP relacionadas a check-ins em academias. Validar os dados da solicitação, executa uma lógica de caso de uso e responde com um código de status apropriado. A arquitetura geral segue os princípios de validação de entrada, separação de preocupações e resposta HTTP adequada.

## Análise e Imformações

1. **Importações:**

   ```javascript
   import { FastifyReply, FastifyRequest } from 'fastify'
   import { z } from 'zod'
   import { makeCheckInUseCase } from '@/use-cases/factories/make-check-in-use.case'
   ```

   - As importações estão trazendo módulos externos necessários para o funcionamento do código.
   - `FastifyReply` e `FastifyRequest` são tipos usados para representar objetos de solicitação e resposta HTTP no Fastify.
   - `z` é um módulo que parece ser usado para definir esquemas de validação de dados.
   - `makeCheckInUseCase` é uma função importada do módulo `'@/use-cases/factories/make-check-in-use.case'`.

2. **Função `create`:**

   ```javascript
   export async function create(request: FastifyRequest, reply: FastifyReply) {
   ```

   - Aqui, está sendo exportada uma função chamada `create` que espera dois argumentos: `request` (objeto de solicitação HTTP) e `reply` (objeto de resposta HTTP).
   - Esta função lida com uma rota específica do servidor web e é provavelmente chamada quando um cliente faz uma solicitação HTTP para essa rota.

3. **Definição de Esquemas de Validação:**

   ```javascript
   const createCheckInParamsSchema = z.object({
     gymId: z.string().uuid(),
   })

   const createCheckInBodySchema = z.object({
     latitude: z.number().refine((value) => {
       return Math.abs(value) <= 90
     }),
     longitude: z.number().refine((value) => {
       return Math.abs(value) <= 180
     }),
   })
   ```

   - Neste trecho de código, estão sendo definidos dois esquemas de validação de dados usando o módulo `zod`. Esses esquemas especificam como os dados da solicitação devem ser validados.
   - `createCheckInParamsSchema` é usado para validar os parâmetros da solicitação, que devem incluir um campo `gymId` que é uma string UUID (identificador único universal).
   - `createCheckInBodySchema` é usado para validar o corpo da solicitação, que deve incluir `latitude` e `longitude` como números dentro de faixas específicas.

4. **Extração de Dados da Solicitação:**

   ```javascript
   const { gymId } = createCheckInParamsSchema.parse(request.params)
   const { latitude, longitude } = createCheckInBodySchema.parse(request.body)
   ```

   - Aqui, os dados da solicitação são extraídos usando os esquemas de validação definidos anteriormente. Isso garante que os dados da solicitação atendam aos critérios especificados nos esquemas.

5. **Criação do Caso de Uso e Execução:**

   ```javascript
   const checkInUseCase = makeCheckInUseCase()

   await checkInUseCase.execute({
     gymId,
     userId: request.user.sub,
     userLatitude: latitude,
     userLongitude: longitude,
   })
   ```

   - Um caso de uso chamado `checkInUseCase` é criado chamando a função `makeCheckInUseCase()`. Isso provavelmente é parte de um design de arquitetura de software em camadas.
   - Em seguida, o caso de uso é executado passando um objeto com várias informações, incluindo `gymId`, `userId` (que parece vir de `request.user.sub`), `userLatitude` e `userLongitude`.
   - A lógica do caso de uso `checkInUseCase` é responsável por realizar alguma ação relacionada ao check-in na academia.

6. **Resposta HTTP:**

   ```javascript
   return reply.status(201).send()
   ```

   - Por fim, a função responde à solicitação HTTP definindo o código de status 201 (Created) e enviando uma resposta vazia. Isso indica que o check-in foi bem-sucedido.
