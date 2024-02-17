import pg  from 'pg';
import { db } from './config.js';

export const pool = new pg.Pool(db);

// Hay que crear el archivo .env para que todo funcione
//segun el ejemplo que proporcione
pool.on("CONECTADO :)", () => console.log("Estas Conectado :)"))