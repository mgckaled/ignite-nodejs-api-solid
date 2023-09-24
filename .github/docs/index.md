# `index`

> Anotações importantes com dicas, conceitos e ensinamentos [AQUI](./notes.md).
>
> Perguntas e Respostas dos [Quizzes](./quizzes.md).

## Análise de código por arquivo

### `root`

- [`docker-compose.yml`](./code/docker-compose.md)
- [`package.json`](./code/packagejson.md)
- [`vite.config.js`](./code/viteconfig.md)

### `src`

- [`@types/fastify-jwt.d.ts`](../docs/code/src/@types/fastify-jwt.d.md)
- [`env/index.ts`](../docs/code/src/env/index.md)
- [`lib/get-distance-between-coordinates.ts`](./code/src/lib/get-distance-between-coordinates.md)
- `http/`
  - `middlewares`
    - [`verify-jwt.ts`](./code/src/http/middlewares/verify-jwt.md)
    - [`verify-user-role.ts`](./code/src/http/middlewares/verify-user-role.md)
- `controllers/`
  - `check-ins/`
    - [`create.ts`](../docs/code/src/http/controllers/check-ins/create.md)
    - [`history.ts`](../docs/code/src/http/controllers/check-ins/history.md)
    - [`metrics.ts`](../docs/code/src/http/controllers/check-ins/metrics.md)
    - [`routes.ts`](../docs/code/src/http/controllers/check-ins/routes.md)
    - [`validate.ts`](../docs/code/src/http/controllers/check-ins/validade.md)
  - `gyms/`
    - [`create.ts`](../docs/code/src/http/controllers/gyms/create.md)
    - [`nearby.ts`](../docs/code/src/http/controllers/gyms/nearby.md)
    - [`metrics.ts`](../docs/code/src/http/controllers/gyms/metrics.md)
    - [`routes.ts`](../docs/code/src/http/controllers/gyms/routes.md)
    - [`validate.ts`](../docs/code/src/http/controllers/gyms/validate.md)
  - `users/`
    - [`authenticate.ts`](../docs/code/src/http/controllers/users/authenticate.md)
    - [`nearby.ts`](../docs/code/src/http/controllers/users/nearby.md)
    - [`metrics.ts`](../docs/code/src/http/controllers/users/metrics.md)
    - [`routes.ts`](../docs/code/src/http/controllers/users/routes.md)
    - [`validate.ts`](../docs/code/src/http/controllers/users/validate.md)
- `repositories`
  - `in-memory`
    - [`in-memory-check-ins-repository.ts`]
    - [`in-memory-gyms-repository.ts`]
    - [`in-memory-users-repository.ts`]
  - `prisma`
    - [`prisma-check-ins-repository.ts`]
    - [prisma-gyms-repository.ts]
    - [`prisma-users-repository.ts`]
  - [`check-ins-repository.ts`](../docs/code/src/repositories/check-ins-repository.md)
  - [`gyms-repository.ts`](../docs/code/src/repositories/gyms-repository.md)
  - [`users-repository.ts`](../docs/code/src/repositories/users-repository.md)
- `use-cases/`
  - [`errors/`](../docs/code/src/use-cases/errors.md)
  - [`factories/`](../docs/code/src/use-cases/factories.md)
  - [`authenticate.ts`](../docs/code/src/use-cases/authenticate.md)
  - [`check-in.ts`](../docs/code/src/use-cases/check-in.md)
  - [`create-gym.ts`](../docs/code/src/use-cases/create-gym.md)
  - [`fetch-nearby-gyms.ts`](../docs/code/src/use-cases/fetch-nearby-gyms.md)
  - [`fetch-user-check-ins-history.ts`](../docs/code/src/use-cases/fetch-user-check-ins-history.md)
  - [`get-user-metrics.ts`](../docs/code/src/use-cases/get-user-metrics.md)
  - [`get-user-profile.ts`](../docs/code/src/use-cases/get-user-profile.md)
  - [`register.ts`](../docs/code/src/use-cases/register.md)
  - [`search-gyms.ts`](../docs/code/src/use-cases/search-gyms.md)
  - [`validate-check-in.ts`](../docs/code/src/use-cases/validate-check-in.md)

### `prisma`

> Voltar para o [README](../../README.md)
