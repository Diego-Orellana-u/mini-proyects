import net from "node:net";
import fs from "node:fs";
import { log } from "node:console";

// 9 de 10 puntos. Unico fallo fue eliminar "process.hrtime(startTime) y poner solo startTime pensando que era duplicado"
// Identificación de falta de callback en parametro ✅
// creacion callback dentro de client con primer parametro null para no dar error✅
// En la error function, identificar codigo inaccesible y eliminar throw error ✅

// export const ping = (ip, callback) => {
//   const startTime = process.hrtime();

//   const client = net.connect({ port: 80, host: ip }, () => {
//     client.end();
//     callback(null, { time: process.hrtime(startTime), ip });
//   });

//   client.on("error", (err) => {
//     client.end();
//     callback(err);
//   });
// };

// ping("midu.dev", (err, info) => {
//   if (err) console.error(err);
//   else console.log(info);
// });

// export function obtenerDatosPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { data: "datos importantes" };
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }

// obtenerDatosPromise();

// -------------------------------

// Que hace la function  --> lee contenido de un archivo, procesa el contenido y lo inyecta a otro archivo llamado output.txt
// Identifica y corrige los errores del codigo
// Eliminar partes innecesarias
// Mejora legibilidad

export async function procesarArchivoPromise() {
  let contenido = "";
  try {
    contenido = await fs.promises.readFile("input.txt", "utf8");
  } catch (error) {
    console.error(error);
    throw error;
  }

  const textoProcesado = contenido.toUpperCase();

  try {
    await fs.promises.writeFile("output.txt", textoProcesado);
    console.log("Archivo procesado y guardado con éxito");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

await procesarArchivoPromise();

// -------------------------------

// version promises

// Acá podemos usar allSettled para evitar que si hay un error nos pete.
// export async function leerArchivos() {
//   const [archivo1, archivo2, archivo3] = await Promise.all([
//     fs.promises.readFile("archivo1.txt", "utf8"),
//     fs.promises.readFile("archivo2.txt", "utf8"),
//     fs.promises.readFile("archivo3.txt", "utf8"),
//   ]);
//   return `${archivo1} ${archivo2} ${archivo3}`;
// }

// leerArchivos().then((results) => console.log(results));

// version async await

// export async function leerArchivos() {
//   const archivo1 = await fs.promises.readFile("archivo1.txt", "utf8");
//   const archivo2 = await fs.promises.readFile("archivo2.txt", "utf8");
//   const archivo3 = await fs.promises.readFile("archivo3.txt", "utf8");

//   return `${archivo1} ${archivo2} ${archivo3}`;
// }

// await leerArchivos().then((results) => console.log(results));

// ----------------------------

// Escribe una funcion `delay` que retorne una promesa que se resuelva después de `n` milisegundos. Por ejemplo:

// export async function delay(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, n);
//   });
// }

// delay(3000).then(() => console.log("Hola mundo"));
// // o..
// await delay(3000);
// console.log("Hola mundo");

import dotenv from "./dotenv.js";
dotenv.config();

console.log(process.env.PORT); // "8008"
console.log(process.env.TOKEN); // "123abc"
