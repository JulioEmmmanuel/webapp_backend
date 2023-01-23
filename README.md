# webapp_backend
Backend para el proyecto de una webapp.

Es un API Rest que cuenta con servicios y clientes. Genera de forma automática los cargos para los clientes.

Desarrollada en Node.JS con PostgreSQL y Docker.

Para correr el proyecto escribir en la terminal:
- npm install
- docker-compose up -d
- npm run migrations:run
- npm run start

En .env.example se especifican variables de entorno que es importante definir para que el proyecto corra correctamente, entre ellas:
- El puerto, se sugiere usar el puerto 4000, el frontend llama a la API en este puerto
- El url para la base de datos de postgresql
- Un secret para utilizar en la verificación JWT
