const express = require("express");
const cors = require("cors");

const { dbConnection } = require('../database/config')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.materiasPath = "/api/materia"; // Ruta para el recurso materia

    //Conectar a base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();

    //Rutas de mi app
    this.routes();
  }

  async conectarDB(){
    await dbConnection(); // Llamamos a la función dbConnection del archivo config.js
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y Parseo del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.materiasPath, require("../routes/materia")); // Cuando se haga una petición a la ruta /api/materia se ejecutará el archivo routes/materia.js
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en ", this.port); // Imprimimos en consola el puerto en el que se está ejecutando el servidor
    });
  }
}

module.exports = Server; // Exportamos la clase Server para poder utilizarla en app.js
