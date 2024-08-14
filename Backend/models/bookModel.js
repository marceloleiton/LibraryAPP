/**
 * Modelo de datos para la entidad `Book` utilizando Mongoose.
 *
 * Este modelo define la estructura y las validaciones para los documentos de libros en la base de datos MongoDB.
 * Incluye información esencial sobre el libro, como la URL de la portada, el título, el autor, el precio, la descripción y el idioma.
 *
 * Campos del modelo:
 * - `url`: URL de la portada del libro, requerida.
 * - `title`: Título del libro, requerido.
 * - `author`: Autor del libro, requerido.
 * - `price`: Precio del libro, requerido.
 * - `desc`: Descripción del libro, requerida.
 * - `language`: Idioma en el que está escrito el libro, requerido.
 *
 * Opciones:
 * - `timestamps`: Incluye campos `createdAt` y `updatedAt` en el documento para registrar la fecha y hora de creación y actualización.
 */

const mongoose = require("mongoose"); // Importa Mongoose para definir el esquema y modelo de datos.

// Define el esquema para el modelo de libro.
const book = new mongoose.Schema(
  {
    url: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    title: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    author: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    price: {
      type: Number, // Tipo de dato: número.
      required: true // Campo requerido.
    },
    desc: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    language: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    }
  },
  { timestamps: true } // Incluye campos de marcas de tiempo en el esquema.
);

module.exports = mongoose.model("books", book); // Exporta el modelo de libro para su uso en otras partes de la aplicación.
