const { validationResult } = require("express-validator"); 

const validarCampos = (req, res, next) => {
  const errors = validationResult(req); // Validamos los campos de la petición
  if (!errors.isEmpty()) { // Si hay errores
    return res.status(400).json(errors); // Retornamos un estado 400 y los errores
  }
  next(); // Si no hay errores, continuamos con el siguiente middleware
}; // Función para validar los campos de las peticiones

module.exports = {
  validarCampos,
};
