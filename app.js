//Iniciar el servidor

require("dotenv").config(); // Para leer las variables de entorno

const Server = require('./models/server') // Importamos el servidor

const server = new Server(); // Instanciamos el servidor

server.listen(); // Llamamos al método listen del servidor