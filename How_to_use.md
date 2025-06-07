# Book CRUD with NestJS and MongoDB

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
