/**
 * Modelo de datos para la entidad `User` utilizando Mongoose.
 *
 * Este modelo define la estructura y las validaciones para los documentos de usuarios en la base de datos MongoDB.
 * Incluye información básica del usuario, como nombre de usuario, correo electrónico, contraseña y dirección,
 * así como campos adicionales para la gestión de avatares, roles y relaciones con otros documentos.
 *
 * Campos del modelo:
 * - `username`: Nombre de usuario único y requerido.
 * - `email`: Correo electrónico único y requerido.
 * - `password`: Contraseña requerida.
 * - `address`: Dirección requerida.
 * - `avatar`: URL de la imagen de perfil, con un valor predeterminado.
 * - `role`: Rol del usuario, con valores posibles de "user" o "admin", por defecto es "user".
 * - `favouritres`: Lista de identificadores de libros que el usuario ha marcado como favoritos.
 * - `cart`: Lista de identificadores de libros en el carrito de compras del usuario.
 * - `orders`: Lista de identificadores de pedidos realizados por el usuario.
 *
 * Opciones:
 * - `timestamps`: Incluye campos `createdAt` y `updatedAt` en el documento para registrar la fecha y hora de creación y actualización.
 */

const mongoose = require("mongoose"); // Importa Mongoose para definir el esquema y modelo de datos.

// Define el esquema para el modelo de usuario.
const user = new mongoose.Schema(
  {
    username: {
      type: String, // Tipo de dato: cadena de texto.
      required: true, // Campo requerido.
      unique: true // Debe ser único en la colección.
    },
    email: {
      type: String, // Tipo de dato: cadena de texto.
      required: true, // Campo requerido.
      unique: true // Debe ser único en la colección.
    },
    password: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    address: {
      type: String, // Tipo de dato: cadena de texto.
      required: true // Campo requerido.
    },
    avatar: {
      type: String, // Tipo de dato: cadena de texto.
      default:
        "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" // Valor por defecto para el avatar.
    },
    role: {
      type: String, // Tipo de dato: cadena de texto.
      default: "user", // Valor por defecto para el rol.
      enum: ["user", "admin"] // Valores permitidos para el rol.
    },
    favouritres: [
      {
        type: mongoose.Types.ObjectId, // Tipo de dato: identificador de objeto de Mongoose.
        ref: "books" // Referencia al modelo "books".
      }
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId, // Tipo de dato: identificador de objeto de Mongoose.
        ref: "books" // Referencia al modelo "books".
      }
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId, // Tipo de dato: identificador de objeto de Mongoose.
        ref: "order" // Referencia al modelo "order".
      }
    ]
  },
  { timestamps: true } // Incluye campos de marcas de tiempo en el esquema.
);

module.exports = mongoose.model("user", user); // Exporta el modelo de usuario para su uso en otras partes de la aplicación.
