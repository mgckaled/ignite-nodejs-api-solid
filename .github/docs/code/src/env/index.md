# `env/index.ts`

## Função

Arquivo de configuração de ambiente usando a biblioteca `dotenv` e a biblioteca `zod` em uma aplicação Node.js. Lida com a definição e validação de variáveis de ambiente para garantir que a aplicação funcione corretamente com as configurações esperadas. Se a validação for bem-sucedida, as variáveis de ambiente validadas são exportadas como `env`, e se houver algum problema de validação, uma exceção é lançada indicando que as variáveis de ambiente são inválidas. É uma abordagem robusta para lidar com configurações de ambiente em uma aplicação.

## Análise e Imformações

1. Importação de bibliotecas:

   ```javascript
   import 'dotenv/config'
   import { z } from 'zod'
   ```

   - A primeira linha importa a biblioteca `dotenv` e a configura, o que permite carregar variáveis de ambiente a partir de um arquivo `.env` na raiz do projeto.
   - A segunda linha importa a função `z` da biblioteca `zod`, que é usada para definir e validar o esquema das variáveis de ambiente.

2. Definição do esquema de variáveis de ambiente:

   ```javascript
   const envSchema = z.object({
     NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
     JWT_SECRET: z.string(),
     PORT: z.coerce.number().default(3333),
   })
   ```

   - Aqui, um esquema `envSchema` é definido usando `z.object()`, que cria um esquema para um objeto JavaScript.
   - Ele define três variáveis de ambiente:
     - `NODE_ENV`: Uma enumeração que deve ser uma das três opções: 'dev', 'test' ou 'production'. Se não estiver definida, o valor padrão é 'dev'.
     - `JWT_SECRET`: Uma string que deve ser definida obrigatoriamente.
     - `PORT`: Um número que é convertido coercitivamente de string para número, e o valor padrão é 3333 se não estiver definido.

3. Validação das variáveis de ambiente:

   ```javascript
   const _env = envSchema.safeParse(process.env)
   ```

   - Nesta linha, as variáveis de ambiente definidas em `process.env` são validadas de acordo com o esquema `envSchema` usando `envSchema.safeParse()`.
   - O resultado é armazenado na variável `_env`, que conterá um objeto com as propriedades `success`, `data`, e `error`.
     - `success`: Um booleano que indica se a validação foi bem-sucedida.
     - `data`: Um objeto com as variáveis de ambiente validadas se `success` for verdadeiro.
     - `error`: Um objeto com informações de erro se `success` for falso.

4. Verificação de sucesso da validação:

   ```javascript
   if (_env.success === false) {
     console.error('❌ Invalid environment variables', _env.error.format())
     throw new Error('Invalid environment variables.')
   }
   ```

   - Esta seção verifica se a validação das variáveis de ambiente falhou. Se `success` for falso, isso significa que pelo menos uma das variáveis de ambiente não está de acordo com o esquema.
   - O código então exibe uma mensagem de erro no console com detalhes do erro usando `_env.error.format()`.
   - Por fim, ele lança uma exceção (`Error`) para indicar que as variáveis de ambiente são inválidas.

5. Exportação das variáveis de ambiente validadas:

   ```javascript
   export const env = _env.data
   ```

   - Se a validação for bem-sucedida, o objeto `_env.data` (que contém as variáveis de ambiente validadas) é exportado como `env`.

> Voltar para o [`index`](../../../index.md)
