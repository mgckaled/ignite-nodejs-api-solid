# `repositories/gyms-repository.ts`

## Função

Permitir criar uma abstração para interagir com o banco de dados e fornece um contrato claro para as operações relacionadas a academias de ginástica, facilitando a implementação posterior de um repositório concreto que utilize o Prisma para executar essas operações.

## Análise e imformações

   ```typescript
   export interface FindManyNearbyParams {
     latitude: number
     longitude: number
   }
   
   export interface GymsRepository {
     findById(id: string): Promise<Gym | null>
     findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>
     searchMany(query: string, page: number): Promise<Gym[]>
     create(data: Prisma.GymCreateInput): Promise<Gym>
   }
   ```

   Aqui, duas interfaces são definidas:

- `FindManyNearbyParams`: Esta interface define os parâmetros esperados para a função `findManyNearby`. Ela espera um objeto com as propriedades `latitude` e `longitude`, ambas do tipo `number`.

- `GymsRepository`: Esta interface define um contrato para operações relacionadas a academias de ginástica. Ela lista quatro métodos que devem ser implementados por qualquer classe que a implemente:
  - `findById(id: string): Promise<Gym | null>`: Espera receber uma string `id` e retorna uma Promise que pode resolver para um objeto `Gym` ou `null`.
  - `findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>`: Espera receber um objeto com as propriedades `latitude` e `longitude` e retorna uma Promise que pode resolver para um array de objetos `Gym`.
  - `searchMany(query: string, page: number): Promise<Gym[]>`: Espera receber uma string de consulta `query` e um número de página `page`, e retorna uma Promise que pode resolver para um array de objetos `Gym`.
  - `create(data: Prisma.GymCreateInput): Promise<Gym>`: Espera receber um objeto `data` do tipo `Prisma.GymCreateInput` e retorna uma Promise que pode resolver para um objeto `Gym`.

> Voltar para o [`index`](../../../index.md)
