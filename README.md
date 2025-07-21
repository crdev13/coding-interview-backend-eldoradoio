# Bienvenido al coding-interview-backend-level-3 - Parte I

## Descripción
Eres el Senior Developer de tu equipo en El Dorado, y te han dado la responsabilidad de desarrollar un nuevo feature que nos pide el equipo de producto:

> API REST que permita realizar operaciones CRUD sobre una entidad de tipo `Item`.
>
> La entidad tiene 3 campos: `id`, `name` y `price`.
>
>

# Requisitos:
- Si el servicio se reinicia, los datos no se pueden perder.
- Tienes que implementar tu codigo como si estuvieses haciendo un servicio para El Dorado listo para produccion.
- Completar la implementación de toda la funcionalidad de forma tal de que los tests e2e pasen exitosamente.


### Que puedes hacer: 
- ✅ Modificar el código fuente y agregar nuevas clases, métodos, campos, etc.
- ✅ Cambiar dependencias, agregar nuevas, etc.
- ✅ Modificar la estructura del proyecto (/src/** es todo tuyo)
- ✅ Elegir una base de datos
- ✅ Elegir un framework web
- ✅ Crear tests
- ✅ Cambiar la definición del .devContainer


### Que **no** puedes hacer:
- ❌ No puedes modificar el archivo original /e2e/index.test.ts (pero puedes crear otros test si lo deseas)
- ❌ El proyecto debe usar Typescript 
- ❌ Estresarte 🤗


## Pasos para comenzar
1. Haz un fork usando este repositorio como template
2. Clona el repositorio en tu máquina
3. Realiza los cambios necesarios para que los tests pasen
4. Sube tus cambios a tu repositorio
5. Avísanos que has terminado
6. ???
7. PROFIT

### Cualquier duda contactarme a https://www.linkedin.com/in/andreujuan/

---

# 🛠️ Developer Guide

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Server will run on: http://localhost:3000

---

## ⚙️ Environment Variables

The `.env` file is already included in the repository for local development.

Use `.env.test` for running tests.

---

## 🧪 Running Tests

### All tests (unit + e2e)

```bash
npm test
```

### Unit tests only

```bash
npm run test:unit
```

### E2E tests only

```bash
npm run test:e2e
```

> Prisma migrations are automatically applied before tests.

---

## 🐳 DevContainer

This project supports [VSCode DevContainers](https://containers.dev/):

-   Installs dependencies on creation
-   Automatically starts the dev server
-   Forwards port `3000`

Make sure you have Docker and the **Dev Containers** extension installed.

---

## 📬 API Endpoints

-   `GET /` – API info
-   `GET /ping` – Health check
-   `GET /items` – List all items
-   `POST /items` – Create a new item
-   `GET /items/{id}` – Get item by ID
-   `PUT /items/{id}` – Update an item
-   `DELETE /items/{id}` – Delete an item
