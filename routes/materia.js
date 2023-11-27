// Definir las rutas para el recurso materia
const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const {
  materiaGet,
  materiaPost,
} = require("../controllers/materia");

const router = Router();

router.get("/", materiaGet); // Cuando se haga una petición get a la ruta / se ejecutará el controlador materiaGet

router.post(
  "/",
  [
    check("clave", "La clave es obligatoria").not().isEmpty(),
    check("nombre", "El nombre no es valido").not().isEmpty(),
    check("creditos", "Los creditos son obligatorios").not().isEmpty(),
    validarCampos,
  ],
  materiaPost
); // Cuando se haga una petición post a la ruta / se ejecutará el controlador materiaPost para crear una materia

module.exports = router;
