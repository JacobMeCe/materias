const { response } = require("express");

const Materia = require("../models/materia"); // Importamos el modelo materia
const { body } = require("express-validator");

const materiaGet = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query; // Obtenemos los parámetros de la url
  const query = { status: true }; // Creamos un objeto query para filtrar las materias que tengan status en true

  const [total, materia] = await Promise.all([ // Ejecutamos las dos promesas al mismo tiempo
    Materia.countDocuments(query), // Contamos los documentos que coincidan con el objeto query
    Materia.find(query).skip(Number(desde)).limit(Number(limite)), // Buscamos las materias que coincidan con el objeto query y las mostramos con el limite y desde que se obtuvieron de la url
  ]);
  
  res.json({
    total,
    materia, // Enviamos el total de materias y las materias que coincidieron con el objeto query
  });
}; // Controlador para obtener las materias

const materiaPost = async (req, res = response) => {
  try { //Crear una nueva materia
    const { clave, nombre, creditos } = req.body; // Obtenemos los datos de la petición
  const materia = new Materia({ clave, nombre, creditos }); // Creamos una nueva instancia del modelo materia

  await materia.save(); // Guardamos la nueva materia en la base de datos

  res.json({
    materia, // Enviamos la materia que se creó
  });
    
  } catch (error) { // Si hay un error, lo imprimimos en consola
    console.log(error)
  }
  
};

module.exports = {
  materiaGet,
  materiaPost,
};
