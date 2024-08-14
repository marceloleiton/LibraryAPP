/**
 * Módulo de rutas para la gestión de usuarios en la aplicación.
 *
 * Este módulo define la ruta para el registro de nuevos usuarios mediante una solicitud POST a "/sign-up".
 *
 * Funcionalidades:
 * - Validación de datos de entrada: verifica que el nombre de usuario tenga al menos 5 caracteres y que la contraseña tenga más de 5 caracteres.
 * - Comprobación de unicidad: asegura que el nombre de usuario y el correo electrónico proporcionados no estén ya registrados en la base de datos.
 * - Creación y almacenamiento de un nuevo usuario en la base de datos si todas las validaciones son exitosas.
 * - Manejo de errores: proporciona mensajes de error específicos para solicitudes incorrectas y errores del servidor.
 *
 * Requiere:
 * - `express` para manejar las rutas HTTP.
 * - `userModel` para interactuar con el modelo de datos del usuario.
 */

const router = require("express").Router(); // Importa el enrutador de Express para definir las rutas de la API.
const User = require("../models/userModel"); // Importa el modelo de usuario para interactuar con la base de datos.

// Ruta para el registro de nuevos usuarios.
router.post("/sign-up", async (req, res) => {
  // Define la ruta POST para el registro de usuarios.
  try {
    const { username, email, password, address } = req.body; // Extrae los datos del cuerpo de la solicitud.

    // Verificar que el tamaño del nombre de usuario sea mayor a 4 caracteres.
    if (username.length < 5) {
      return res
        .status(400) // Devuelve un código de estado 400 (solicitud incorrecta).
        .json({ message: "El tamaño del usuario debe ser mayor que 4." }); // Mensaje de error si el tamaño es insuficiente.
    }

    // Verificar que la longitud de la contraseña sea mayor a 5 caracteres.
    if (password.length <= 5) {
      return res
        .status(400) // Devuelve un código de estado 400 (solicitud incorrecta).
        .json({ message: "El tamaño de la contraseña debe ser mayor que 5." }); // Mensaje de error si la contraseña es demasiado corta.
    }

    // Verificar si ya existe un usuario con el mismo nombre de usuario.
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "El usuario ya existe." }); // Mensaje de error si el nombre de usuario ya está en uso.
    }

    // Verificar si ya existe un usuario con el mismo correo electrónico.
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ message: "El correo ya existe." }); // Mensaje de error si el correo electrónico ya está en uso.
    }

    // Crear un nuevo objeto de usuario con los datos proporcionados.
    const newUser = new User({
      username: username,
      email: email,
      password: password,
      address: address
    });

    // Guardar el nuevo usuario en la base de datos.
    await newUser.save();

    // Devolver una respuesta exitosa.
    return res.status(200).json({ message: "Usuario creado correctamente." });
  } catch (error) {
    // Manejo de errores en caso de fallo en el servidor.
    res.status(500).json({ message: "Error de servidor" });
  }
});

module.exports = router; // Exporta el enrutador para ser utilizado en otras partes de la aplicación.
