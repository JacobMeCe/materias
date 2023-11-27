const mongoose = require("mongoose"); // Importamos mongoose

const dbConnection = async () => { // Función para conectar a la base de datos
  try { // Intentamos conectarnos a la base de datos
    await mongoose.connect(process.env.MONGO_CNN, { // Conectamos a la base de datos con la url que tenemos en el archivo .env
      useNewUrlParser: true,  
      useUnifiedTopology: true, 
    });

    console.log("Conexion de base de datos exitosa");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos");
  }
};

module.exports = {
  dbConnection,
};
