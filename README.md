# Desafio Like Me parte 2

## Autor
- Proyecto Backend [José Manuel Luque]

## Requisitos antes de la instalación
- Node versión recomendada ![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)

## Procedimiento para iniciar el proyecto
- Crear base de datos
```bash
  CREATE DATABASE likeme;
```
```bash
    \c likeme
```
```bash
    CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);
```

- Clonar el proyecto
- Ir hacia el directorio del proyecto

Instalar dependencias:

### Instalar dependencias para el backend

```bash
  cd backend
  npm install
```
# NOTA IMPORTANTE debe crear el archivo .env 

- como se indica en el ejemplo debe crear el archivo .env con la informacion del archivo .env.example en la caperta backend

Levantar proyecto

```bash
  npm run dev
```
abrir otro terminal para levantar el proyecto
### Instalar dependencias para el frontend

```bash
  cd frontend
  npm install
```

Levantar proyecto

```bash
  npm run dev
```


## Proyecto Frontend
![Vite](https://img.shields.io/badge/Vite-v4.4.10-gray?style=flat&logo=Vite&logoColor=white&color=646CFF)
![React](https://img.shields.io/badge/React-v18.2.0-gray?style=flat&logo=react&logoColor=white&color=61DAFB)
![axios](https://img.shields.io/badge/axios-v1.5.1-gray?style=flat&logo=axios&logoColor=white&color=5A29E4)
![standardjs](https://img.shields.io/badge/standardjs-v17.1.0-gray?style=flat&logo=standardjs&logoColor=white&color=F3DF49)
![bootstrap](https://img.shields.io/badge/bootstrap-v5.3.2-gray?style=flat&logo=bootstrap&logoColor=white&color=7952B3)
![CSS3](https://img.shields.io/badge/CSS3-gray?style=flat&logo=CSS3&logoColor=white&color=1572B6)


## Proyecto Backend

![javascript](https://img.shields.io/badge/javascript-gray?style=flat&logo=javascript&logoColor=white&color=F7DF1E)
![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)
![Express](https://img.shields.io/badge/Express-v4.18.2-gray?style=flat&logo=Express&logoColor=white&color=000000)
![nodemon](https://img.shields.io/badge/nodemon-v3.0.1-gray?style=flat&logo=nodemon&logoColor=white&color=76D04B)
![standardjs](https://img.shields.io/badge/standardjs-v17.1.0-gray?style=flat&logo=standardjs&logoColor=white&color=F3DF49)
![dotenv](https://img.shields.io/badge/dotenv-v16.3.1-gray?style=flat&logo=dotenv&logoColor=white&color=ECD53F)
![postgresql](https://img.shields.io/badge/pg-v8.11.3-gray?style=flat&logo=postgresql&logoColor=white&color=4169E1)
![cors](https://img.shields.io/badge/cors-v2.8.5-gray?style=flatd&color=000000)










