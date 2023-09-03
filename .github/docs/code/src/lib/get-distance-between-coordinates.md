# `get-distance-between-coordinates.ts`

## Função

Calcular a distância em quilômetros entre duas coordenadas geográficas usando a fórmula de *haversine*, levando em consideração as diferenças de latitude e longitude entre os pontos. É útil para calcular a distância entre dois pontos em um mapa geográfico, como as distâncias entre cidades ou locais.

## Análise e informações

Este código exporta uma função chamada `getDistanceBetweenCoordinates` e uma interface chamada `Coordinate`. A função `getDistanceBetweenCoordinates` é projetada para calcular a distância entre duas coordenadas geográficas (latitude e longitude) usando a fórmula de haversine, que é uma fórmula utilizada para calcular distâncias entre pontos em uma esfera (como a Terra).

Aqui está uma explicação mais detalhada do código e suas funcionalidades:

1. **Interface Coordinate**:
   - A interface `Coordinate` é definida com duas propriedades: `latitude` e `longitude`, ambas do tipo `number`. Essa interface é usada para representar um ponto geográfico com informações de latitude e longitude.

2. **Função getDistanceBetweenCoordinates**:
   - Esta função recebe dois parâmetros do tipo `Coordinate`: `from` (origem) e `to` (destino).
   - Primeiro, a função verifica se as coordenadas de origem (`from`) e destino (`to`) são iguais. Se forem iguais, ela retorna 0, indicando que as coordenadas estão no mesmo ponto.

   - Caso contrário, a função realiza os seguintes cálculos para determinar a distância entre as coordenadas usando a fórmula de haversine:

     - Converte as latitudes de graus para radianos usando a fórmula `(Math.PI * from.latitude) / 180` e `(Math.PI * to.latitude) / 180`.
     - Calcula a diferença de longitude entre as coordenadas (`theta`).
     - Converte a diferença de longitude para radianos usando a fórmula `(Math.PI * theta) / 180`.

   - A fórmula de haversine é aplicada para calcular a distância em radianos:

     ```javascript
     dist = Math.sin(fromRadian) * Math.sin(toRadian) +
            Math.cos(fromRadian) * Math.cos(toRadian) * Math.cos(radTheta)
     ```

   - Em seguida, a função verifica se `dist` é maior que 1 (o que pode acontecer devido a problemas de arredondamento). Se for maior que 1, é definido como 1 para evitar erros de cálculo.

   - O resultado em radianos é convertido de volta para graus usando `dist = (dist * 180) / Math.PI`.

   - A distância é então calculada em milhas náuticas, multiplicando-a por `60 * 1.1515` (1 milha náutica é aproximadamente igual a 1.1515 milhas terrestres).

   - Por fim, a distância é convertida para quilômetros multiplicando-a por `1.609344` (1 milha terrestre é igual a aproximadamente 1.609344 quilômetros).

   - O resultado final é retornado como a distância em quilômetros entre as duas coordenadas geográficas especificadas.

> Voltar para o [`index`](../../../index.md)
