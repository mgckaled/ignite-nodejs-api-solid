# `package.json`

## Função

Os scripts no arquivo `package.json` são comandos que podem ser executados usando o gerenciador de pacotes npm. Eles são úteis para automatizar tarefas comuns durante o desenvolvimento, teste e implantação de um aplicativo.

## `scripts`

1. `"start:dev": "tsx watch src/server.ts"`:
   - Este script é usado para iniciar o aplicativo em modo de desenvolvimento. Ele usa o comando `tsx watch` para transpilar (converter) os arquivos TypeScript em JavaScript e observa o arquivo `src/server.ts`. Quando algum arquivo é modificado, ele reinicia automaticamente o servidor.

2. `"start": "node build/server.js"`:
   - Esse script é usado para iniciar o aplicativo em produção. Ele assume que o aplicativo foi previamente construído (geralmente usando o script "build") e inicia o servidor usando o arquivo JavaScript transpilado no diretório `build`.

3. `"test:create-prisma-environment": "npm link ./prisma/vitest-environment-prisma"`:
   - Este script é usado para criar um link simbólico para um pacote local. Ele vincula o pacote `vitest-environment-prisma` localmente no projeto para fins de teste.

4. `"test:install-prisma-environment": "npm link vitest-environment-prisma"`:
   - Similar ao script anterior, este script é usado para instalar o pacote `vitest-environment-prisma` localmente no projeto. Isso permite que o projeto use uma versão local do pacote para fins de teste.

5. `"build": "tsup src --out-dir build"`:
   - Este script é usado para construir o aplicativo. Ele usa a ferramenta `tsup` para transpilar o código TypeScript localizado em `src` e coloca os arquivos resultantes no diretório `build`.

6. `"test": "vitest run --dir src/use-cases"`:
   - Este script é usado para executar testes automatizados. Ele usa a ferramenta `vitest` para executar testes localizados no diretório `src/use-cases`.

7. `"test:watch": "vitest --dir src/use-cases"`:
   - Similar ao script anterior, este script também executa testes automatizados, mas ele permanece em modo de observação, reexecutando os testes sempre que há alterações nos arquivos no diretório `src/use-cases`.

8. `"pretest:e2e": "run-s test:create-prisma-environment test:install-prisma-environment"`:
   - Este script é uma tarefa que deve ser executada antes do script "test:e2e". Ele executa os scripts "test:create-prisma-environment" e "test:install-prisma-environment" para preparar o ambiente antes de executar os testes de ponta a ponta (e2e).

9. `"test:e2e": "vitest run --dir src/http"`:
   - Este script é usado para executar testes de ponta a ponta (end-to-end). Ele utiliza a ferramenta `vitest` para executar os testes localizados no diretório `src/http`.

10. `"test:e2e:watch": "vitest --dir src/http"`:
    - Similar ao script anterior, este script também executa testes de ponta a ponta, mas permanece em modo de observação, reexecutando os testes sempre que há alterações nos arquivos no diretório `src/http`.

11. `"test:coverage": "vitest run --coverage"`:
    - Este script é usado para executar testes e gerar relatórios de cobertura de código. Ele usa a ferramenta `vitest` com a opção `--coverage` para coletar informações sobre a cobertura de código durante a execução dos testes.

12. `"test:ui": "vitest --ui"`:
    - Este script é usado para executar testes de interface do usuário (UI). Ele utiliza a ferramenta `vitest` com a opção `--ui` para executar testes relacionados à interface do usuário.

> Voltar para o [`index`](../index.md)
