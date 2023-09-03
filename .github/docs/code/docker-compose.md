# `docker-compose.yml`

## Função

 O código .yml Docker Compose define um serviço chamado `api-solid-pg` que usa a imagem Docker `bitnami/postgresql`. Esse serviço cria um contêiner PostgreSQL com as configurações de nome de usuário, senha e nome do banco de dados especificadas nas variáveis de ambiente. O PostgreSQL no contêiner estará acessível na porta 5432 do host. Isso é útil para configurar um ambiente de desenvolvimento ou teste com um banco de dados PostgreSQL pronto para uso.

## Análise e informações

- `version: '3'`: Isso define a versão do formato de arquivo Docker Compose que está sendo usado. Neste caso, é a versão 3.
- `services:`: Esta seção é onde você define os serviços que serão executados em seu ambiente Docker.
- `api-solid-pg:`: Este é o nome do serviço que está sendo definido.
- `image: bitnami/postgresql`: Esta linha especifica a imagem Docker que será usada para criar o contêiner do serviço `api-solid-pg`. Neste caso, a imagem `bitnami/postgresql` será usada, que é uma imagem pré-configurada do PostgreSQL.
- `ports:`: Aqui você define as portas que serão mapeadas do host (seu computador ou servidor) para o contêiner. A porta 5432 do host será mapeada para a porta 5432 do contêiner PostgreSQL. Isso significa que você pode se conectar ao banco de dados PostgreSQL no contêiner usando a porta 5432 em seu host.
- `environment:`: Esta seção define as variáveis de ambiente que serão passadas para o contêiner PostgreSQL. Essas variáveis são usadas para configurar o PostgreSQL no momento da inicialização. No exemplo, as seguintes variáveis de ambiente são definidas:
- `POSTGRESQL_USERNAME=`: Isso define o nome de usuário do PostgreSQL.
- `POSTGRESQL_PASSWORD=`: Isso define a senha do PostgreSQL.
- `POSTGRESQL_DATABASE=`: Isso define o nome do banco de dados que será criado no PostgreSQL.

> Voltar para o [`index`](../index.md)
