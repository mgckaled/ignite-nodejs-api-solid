# `vite.config.js`

## Função

O arquivo `vite.config.js` é uma configuração do Vite que inclui um plugin para suportar a resolução de módulos usando caminhos definidos no `tsconfig.json` e também configurações relacionadas ao ambiente de teste, especificamente padrões de correspondência de arquivos para o ambiente de teste. Isso é útil ao desenvolver aplicativos front-end e back-end com Vite que usam TypeScript e requerem personalizações específicas para testes.

## Anãlise e informações

1. **Importações**:

   ```javascript
   import { defineConfig } from 'vitest/config'
   import tsconfigPaths from 'vite-tsconfig-paths'
   ```

   - A primeira linha importa a função `defineConfig` do módulo `vitest/config`. Isso é usado para definir a configuração do ambiente de teste com Vite.
   - A segunda linha importa o módulo `vite-tsconfig-paths`, que é um plugin Vite para suportar a resolução de módulos usando caminhos definidos no arquivo de configuração TypeScript (`tsconfig.json`) usando o `paths`.

2. **Exportação da Configuração**:

   ```javascript
   export default defineConfig({
     // Configuração do Vite
   })
   ```

   - Este arquivo exporta a configuração do Vite como um objeto que é definido usando a função `defineConfig`.

3. **Plugins**:

   ```javascript
   plugins: [tsconfigPaths()],
   ```

   - Aqui, configura-se os plugins que o Vite deve usar. O único plugin definido é `tsconfigPaths()`, que permite a resolução de módulos com base nas configurações definidas no arquivo `tsconfig.json` do seu projeto TypeScript. Isso é útil quando você usa aliases para caminhos de importação personalizados.

4. **Configuração de Teste**:

   ```javascript
   test: {
     environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
   },
   ```

   - Esta parte da configuração parece estar relacionada ao ambiente de teste. A propriedade `environmentMatchGlobs` define um conjunto de padrões globais que correspondem a ambientes de teste específicos. No exemplo fornecido, ele corresponderá a todos os arquivos dentro do diretório `src/http/controllers` e qualquer coisa que tenha a palavra-chave `'prisma'`. Isso é útil para personalizar o ambiente de teste para partes específicas do seu projeto.

> Voltar para o [`index`](../index.md)
