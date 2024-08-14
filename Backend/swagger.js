const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs"); // Asegúrate de que yamljs esté instalado
const path = require("path");

// Lee el archivo YAML de documentación
const swaggerDocument = YAML.load(path.join(__dirname, "./docs/swagger.yaml"));

// Configuración para Swagger UI
const swaggerSpec = swaggerDocument;

module.exports = {
  swaggerUi,
  swaggerSpec
};
