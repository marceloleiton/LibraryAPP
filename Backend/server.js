/**
 * Archivo principal para configurar y lanzar el servidor Express.
 *
 * Este archivo realiza la configuración básica del servidor Express, incluyendo la carga de variables de entorno,
 * la configuración de rutas y el inicio del servidor. Utiliza `dotenv` para manejar variables de entorno, `conn`
 * para la conexión a la base de datos, y define las rutas de la API.
 *
 * Funcionalidades:
 * - Carga las variables de entorno desde un archivo `.env`.
 * - Establece la conexión a la base de datos.
 * - Configura el servidor Express para manejar solicitudes JSON.
 * - Define las rutas de la API bajo el prefijo `/api/v1`.
 * - Configura una ruta base para verificar el estado del servidor.
 * - Inicia el servidor y lo pone a escuchar en el puerto definido en las variables de entorno.
 */

require("dotenv").config(); // Carga las variables de entorno desde un archivo `.env`.
require("./conn/conn"); // Importa y ejecuta el archivo de conexión a la base de datos.
const user = require("./routes/userRoutes"); // Importa las rutas de usuario.
const express = require("express"); // Importa el módulo Express.
const app = express(); // Crea una instancia de la aplicación Express.
const port = process.env.PORT; // Obtiene el puerto desde las variables de entorno.
const { swaggerUi, swaggerSpec } = require("./swagger"); // Importa la configuración de Swagger
const YAML = require("yamljs");

app.use(express.json()); // Configura Express para manejar datos JSON en las solicitudes.

app.use("/api/v1", user); // Establece el prefijo `/api/v1` para las rutas de usuario.
// Configura Swagger UI en una ruta específica
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send(`Servidor corriendo en el puerto ${port}`); // Respuesta para la ruta base, mostrando el puerto en el que está corriendo el servidor.
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`); // Mensaje en consola indicando que el servidor está escuchando en el puerto especificado.
});
