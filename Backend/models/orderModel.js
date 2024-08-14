/**
 * Modelo de datos para la entidad `Order` utilizando Mongoose.
 *
 * Este modelo define la estructura y las validaciones para los documentos de pedidos en la base de datos MongoDB.
 * Incluye referencias a los usuarios y libros involucrados en el pedido, así como el estado del pedido.
 *
 * Campos del modelo:
 * - `user`: Identificador del usuario que realizó el pedido. Referencia al modelo `user`.
 * - `book`: Identificador del libro pedido. Referencia al modelo `books`.
 * - `status`: Estado del pedido, con valores posibles de "Pedido realizado", "En proceso de entrega", "Enviado", o "Cancelado".
 *   - Valor por defecto: "Pedido realizado".
 *
 * Opciones:
 * - `timestamps`: Incluye campos `createdAt` y `updatedAt` en el documento para registrar la fecha y hora de creación y actualización.
 */

const mongoose = require("mongoose"); // Importa Mongoose para definir el esquema y modelo de datos.

// Define el esquema para el modelo de pedido.
const order = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId, // Tipo de dato: identificador de objeto de Mongoose.
      ref: "user" // Referencia al modelo "user".
    },
    book: {
      type: mongoose.Types.ObjectId, // Tipo de dato: identificador de objeto de Mongoose.
      ref: "books" // Referencia al modelo "books".
    },
    status: {
      type: String, // Tipo de dato: cadena de texto.
      default: "Pedido realizado", // Valor por defecto para el estado del pedido.
      enum: [
        "Pedido realizado", // Estado inicial del pedido.
        "En proceso de entrega", // Estado cuando el pedido está en proceso de entrega.
        "Enviado", // Estado cuando el pedido ha sido enviado.
        "Cancelado" // Estado cuando el pedido ha sido cancelado.
      ]
    }
  },
  { timestamps: true } // Incluye campos de marcas de tiempo en el esquema.
);

module.exports = mongoose.model("order", order); // Exporta el modelo de pedido para su uso en otras partes de la aplicación.
