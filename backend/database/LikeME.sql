--Recuerde leer el archivo Readme, debe crear la base de datos primero, como indique en el primer desafio.

CREATE DATABASE likeme;
\c likeme ;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY UNIQUE, 
    titulo VARCHAR(25), 
    img VARCHAR(1000),
    descripcion VARCHAR(255), 
    likes INT
);
