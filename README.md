# Instalaciones Requeridas

Para el correcto funcionamiento y desarrollo del aplicativo, es necesario contar con los siguientes programas y herramientas:

- **Node.js (v22.15.0):** Entorno de ejecución para JavaScript en el servidor. Es esencial para la ejecución de la aplicación backend desarrollada con Express.js.
- **PostgreSQL (v17):** Sistema de gestión de bases de datos relacional, utilizado como motor de base de datos principal del sistema.
- **Git:** Herramienta de control de versiones distribuido, utilizada para la gestión del código fuente y colaboración en el desarrollo mediante repositorios.
- **DBeaver:** Cliente universal de bases de datos que permite la administración visual de la base de datos PostgreSQL y la ejecución de consultas SQL.
- **Postman:** Plataforma utilizada para realizar pruebas y validación de los endpoints de la API REST desarrollada.
- **Visual Studio Code:** Editor de código fuente utilizado para el desarrollo tanto del frontend como del backend del sistema.

---

# Tecnologías Utilizadas

El sistema fue desarrollado utilizando una arquitectura basada en **Angular** para el frontend y **Express.js** para el backend. La base de datos implementada es **PostgreSQL**, y para la interacción con esta se utilizó el ORM **Prisma**, el cual facilita la creación y gestión de las tablas y relaciones mediante código.

Además, se implementó un sistema de autenticación mediante **JSON Web Tokens (JWT)**, que permite asegurar las rutas de la API, controlar el acceso de los usuarios y mantener la integridad de las sesiones de forma segura.

---

# Flujo del Sistema

El sistema está diseñado para permitir a los usuarios interactuar de manera sencilla y segura con la plataforma mediante un flujo autenticado. A continuación, se detalla el comportamiento general:

## Registro e Inicio de Sesión

1. Un nuevo usuario puede registrarse proporcionando los datos requeridos.
2. Una vez registrado, puede iniciar sesión. Al hacerlo correctamente, el sistema genera un token JWT que autentica su identidad y permite el acceso a las funcionalidades protegidas.

## Gestión de Fincas

- Una vez autenticado, el usuario puede acceder a la sección de administración de fincas.
- En esta sección, el usuario puede realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las fincas registradas en el sistema.

## Gestión de Sectores

- Cada finca puede tener asociados múltiples sectores.
- El usuario puede administrar estos sectores al momento de crear la finca.

---

# Manual de Despliegue

Este manual explica los pasos necesarios para desplegar el proyecto en un entorno local o de desarrollo. Se asume que el proyecto tiene dos partes: un frontend (Angular) y un backend (Node.js con Express).

## Requisitos Previos

Se debe tener instalado:

- **Node.js (versión 22)**
- **Git** 
- **Angular CLI**
- **PostgreSQL** 

---

## Paso 1: Clonar el Repositorio

Clonar el repositorio del proyecto (Frontend y Backend):

```bash
git clone https://github.com/jarolVidal9/AGRO-IOT
```

---

## Paso 2: Desplegar el Frontend

1. Navega a la carpeta del frontend en la terminal:
    ```bash
    cd frontend
    ```
2. Instalar dependencias:
    ```bash
    npm install
    ```
3. Iniciar el servidor de desarrollo:
    ```bash
    ng serve
    ```
4. Accede al frontend en: [http://localhost:4200](http://localhost:4200).

---

## Paso 3: Desplegar el Backend

1. Navega a la carpeta del backend:
    ```bash
    cd backend
    ```
2. Instalar dependencias:
    ```bash
    npm install
    ```
3. Configurar la conexión a la base de datos:
    - Abre el archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Ejemplo:
      ```env
      DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=agroiot"
      ```
4. Ejecutar las migraciones de Prisma:
    ```bash
    npx prisma migrate dev
    ```
5. Iniciar el servidor de backend:
    ```bash
    npm start
    ```

--- 

