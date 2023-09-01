# `package.json`

## `scripts`

### `"start:dev": "tsx watch src/server.ts"`

- Inicia um processo de desenvolvimento.
- Ele utiliza a ferramenta "tsx" para compilar arquivos TypeScript localizados na pasta "src".
- A opção "watch" significa que ele continuará a observar os arquivos e recompilá-los sempre que houver alterações no código-fonte.
- Ele executa o arquivo "src/server.ts" como ponto de entrada para o aplicativo.

### `"start": "node build/server.js"`

- Inicia o aplicativo em modo de produção.
- Ele assume que o código-fonte foi compilado e está localizado na pasta "build".
- Utiliza o comando "node" para executar o arquivo "build/server.js", que é o ponto de entrada do aplicativo compilado.

### `"build": "tsup src --out-dir build"`

- Cria uma versão compilada e otimizada do aplicativo.
- Ele utiliza a ferramenta "tsup"  para criar um pacote do aplicativo.
- Ele lê os arquivos TypeScript na pasta "src" e cria uma saída na pasta "build", onde os arquivos são compilados e prontos para implantação.
