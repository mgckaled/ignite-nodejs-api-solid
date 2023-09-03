# `src/server.ts`

## Função

## Análise e Informações

1. Inicialização do servidor:

   ```javascript
   app
     .listen({
       host: '0.0.0.0',
       port: env.PORT,
     })
   ```

   Aqui, o servidor é inicializado usando a função `listen` do objeto `app`. O servidor é configurado para ouvir em um determinado host e porta. O host `'0.0.0.0'` significa que o servidor estará disponível para qualquer endereço IP (ou seja, todos os IPs disponíveis na máquina onde o servidor está sendo executado), e a porta é obtida a partir da variável `env.PORT`, que é importada do módulo `env`.

2. Promessa:

   ```javascript
   .then(() => {
     console.log('🚀 HTTP Server Running!')
   })
   ```

   Após a inicialização do servidor, uma função de retorno de chamada é registrada usando o método `.then()`. Esta função será executada quando o servidor estiver pronto para aceitar conexões. Neste caso, ela simplesmente exibe uma mensagem de log no console informando que o servidor HTTP está em execução.

> Voltar para o [`index`](../../index.md)
