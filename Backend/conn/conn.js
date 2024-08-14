/**
 * Módulo para la conexión a la base de datos utilizando Mongoose.
 *
 * Este módulo define una función `conn` que establece una conexión con la base de datos MongoDB usando Mongoose.
 * La URI de conexión se obtiene desde las variables de entorno, permitiendo una configuración flexible para diferentes entornos.
 *
 * Funcionalidades:
 * - Intenta conectar a la base de datos MongoDB usando la URI proporcionada en las variables de entorno.
 * - Imprime un mensaje en la consola indicando el éxito de la conexión.
 * - Maneja errores de conexión y los imprime en la consola en caso de fallo.
 */

const mongoose = require("mongoose"); // Importa Mongoose para manejar la conexión y la interacción con la base de datos.

// Define la función de conexión a la base de datos.
const conn = async () => {
  try {
    // Intenta conectar a la base de datos usando la URI almacenada en las variables de entorno.
    await mongoose.connect(`${process.env.URI}`);
    console.log("Conectado al servidor BD"); // Mensaje en consola si la conexión es exitosa.
  } catch (error) {
    console.error(error); // Imprime el error en consola si la conexión falla.
  }
};

// Llama a la función de conexión.
conn();
