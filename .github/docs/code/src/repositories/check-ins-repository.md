# `repositories/check-ins-repository.ts`

## Função

Essa interface `CheckInsRepository` é um contrato que define as operações que podem ser realizadas em um repositório de check-ins, com métodos para buscar, criar, contar e salvar check-ins. Essa interface pode ser implementada em uma classe ou objeto concreto que fornece as implementações reais desses métodos usando o Prisma ou outra tecnologia de acesso a banco de dados.

## Análise e imformações

```typescript
export interface CheckInsRepository {
  findById(id: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  save(checkIn: CheckIn): Promise<CheckIn>
}
```

Métodos da interface `CheckInsRepository`:

- `findById(id: string): Promise<CheckIn | null>` recebe um ID como uma string e retorna uma promessa (Promise) de um objeto `CheckIn` ou `null`. Ele é usado para encontrar um check-in com base no seu ID.

- `create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>`:  recebe dados em formato `Prisma.CheckInUncheckedCreateInput` e retorna uma promessa (Promise) de um objeto `CheckIn`. Usado para criar um novo check-in.

- `findManyByUserId(userId: string, page: number): Promise<CheckIn[]>`:  recebe um ID de usuário (userId) como uma string e um número de página (page) e retorna uma promessa (Promise) de uma matriz (array) de objetos `CheckIn`. Ele é usado para encontrar vários check-ins associados a um usuário específico, possivelmente paginados.

- `countByUserId(userId: string): Promise<number>`:  recebe um ID de usuário (userId) como uma string e retorna uma promessa (Promise) de um número (number). Ele é usado para contar o número de check-ins associados a um usuário específico.

- `findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>`:  recebe um ID de usuário (userId) como uma string e uma data (date) como um objeto `Date` e retorna uma promessa (Promise) de um objeto `CheckIn` ou `null`. Ele é usado para encontrar um check-in específico de um usuário em uma data específica.

- `save(checkIn: CheckIn): Promise<CheckIn>`:  recebe um objeto `CheckIn` e retorna uma promessa (Promise) do mesmo objeto `CheckIn`. Ele é usado para salvar (atualizar) um check-in existente.

> Voltar para o [`index`](../../../index.md)
