
# Book CRUD with NestJS and MongoDB
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.


## Setup

### 1. Crear proyecto NestJS

```bash
npm i -g @nestjs/cli
nest new book-crud
cd book-crud
```

### 2. Instalar dependencias

```bash
npm install @nestjs/mongoose mongoose
npm install @nestjs/config
```

### 3. (Opcional) Instalar ESLint para TypeScript

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## MongoDB con Docker
### 1. Descargar y correr MongoDB en un contenedor

```bash
docker run -d --name mongo_book_crud -p 27017:27017 mongo
```

### 2. Ver contenedores activos

```bash
docker ps
```

### 3. Acceder a la terminal de MongoDB

```bash
docker exec -it mongo_book_crud mongosh
```

### 4. Consultar base de datos y documentos (dentro del shell de Mongo)

```bash
use book-crud
db.books.find().pretty()
```

## Limpiar Docker después de usar

```bash
docker stop mongo_book_crud
docker rm mongo_book_crud
docker rmi mongo  # opcional, para borrar imagen y liberar espacio
```

## Ejecutar aplicación NestJS

```bash
npm run start:dev
```

¡Listo! Ahora tienes todo para arrancar tu proyecto y base de datos con Docker fácilmente.
## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
