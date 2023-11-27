const { Schema, model } = require("mongoose");

const MateriasSchema = Schema({ // Definimos el esquema de la colección materia
  clave: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  nombre: {
    type: String,
    require: [true, "El correo es obligatorio"]
  },
  creditos: {
    type: String,
    require: [true, "El correo es obligatorio"],
  },
  status:{
    type: Boolean,
    default:true
  }
});

MateriasSchema.methods.toJSON = function() { 
  const { __v, ...materia } = this.toObject();
  return materia; 
}

module.exports = model("Materia", MateriasSchema); // Exportamos el modelo para poder utilizarlo en otros archivos
